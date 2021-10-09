var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Ctx, Query, Mutation, Resolver, Arg, InputType, Field, ObjectType, } from "type-graphql";
import { User } from "TSDatabase/entities/User";
import argon2 from "argon2";
import { COOKIE_NAME } from "TSSrc/constants";
let UsernamePasswordInput = class UsernamePasswordInput {
};
__decorate([
    Field(() => String)
], UsernamePasswordInput.prototype, "username", void 0);
__decorate([
    Field(() => String)
], UsernamePasswordInput.prototype, "password", void 0);
UsernamePasswordInput = __decorate([
    InputType()
], UsernamePasswordInput);
let FieldError = class FieldError {
};
__decorate([
    Field(() => String)
], FieldError.prototype, "field", void 0);
__decorate([
    Field(() => String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    ObjectType()
], FieldError);
let UserResponse = class UserResponse {
};
__decorate([
    Field(() => [FieldError], { nullable: true })
], UserResponse.prototype, "errors", void 0);
__decorate([
    Field(() => User, { nullable: true })
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    ObjectType()
], UserResponse);
let UserResolver = class UserResolver {
    async me({ req, em }) {
        if (!req.session.userId) {
            return null;
        }
        const user = await em.findOne(User, { id: req.session.userId });
        return user;
    }
    getAllUsers({ em }) {
        return em.find(User, {});
    }
    async getSingleUser(id, { em }) {
        const user = await em.findOne(User, { id });
        if (!user) {
            return {
                errors: [
                    {
                        field: "username",
                        message: "user does not exist",
                    },
                ],
            };
        }
        return { user };
    }
    async register(options, { em, req }) {
        if (options.username.length <= 2) {
            return {
                errors: [
                    {
                        field: "username",
                        message: "length must be greater than 2",
                    },
                ],
            };
        }
        if (options.password.length <= 2) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "length must be greater than 2",
                    },
                ],
            };
        }
        const hashedPassword = await argon2.hash(options.password);
        let user;
        try {
            const result = await em
                .createQueryBuilder(User)
                .getKnexQuery()
                .insert({
                username: options.username,
                password: hashedPassword,
                created_at: new Date(),
                updated_at: new Date(),
            })
                .returning("*");
            user = result[0];
        }
        catch (err) {
            console.log(err);
            if (err.detail.includes("already exists")) {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "username is already taken",
                        },
                    ],
                };
            }
            return err.message;
        }
        req.session.userId = user.id;
        return { user };
    }
    logout({ req, res }) {
        return new Promise((resolve) => req.session.destroy((err) => {
            res.clearCookie(COOKIE_NAME);
            if (err) {
                console.log(err);
                resolve(false);
                return;
            }
            console.log('destroyed!!!');
            resolve(true);
        }));
        return { ok: true };
    }
    async login(options, { em, req }) {
        try {
            const user = await em.findOne(User, { username: options.username });
            if (!user) {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "that username does not exist",
                        },
                    ],
                };
            }
            const valid = await argon2.verify(user.password, options.password);
            if (!valid) {
                return {
                    errors: [
                        {
                            field: "password",
                            message: "incorrect password",
                        },
                    ],
                };
            }
            req.session.userId = user.id;
            return { user };
        }
        catch (err) {
            console.log(err);
            return err.message;
        }
    }
    async deleteUser(id, { em }) {
        try {
            await em.nativeDelete(User, { id });
            return true;
        }
        catch (err) {
            return false;
        }
    }
};
__decorate([
    Query(() => User, { nullable: true }),
    __param(0, Ctx())
], UserResolver.prototype, "me", null);
__decorate([
    Query(() => [User]),
    __param(0, Ctx())
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    Query(() => UserResponse),
    __param(0, Arg("id", () => Number)),
    __param(1, Ctx())
], UserResolver.prototype, "getSingleUser", null);
__decorate([
    Mutation(() => UserResponse),
    __param(0, Arg("options", () => UsernamePasswordInput)),
    __param(1, Ctx())
], UserResolver.prototype, "register", null);
__decorate([
    Mutation(() => Boolean),
    __param(0, Ctx())
], UserResolver.prototype, "logout", null);
__decorate([
    Mutation(() => UserResponse),
    __param(0, Arg("options", () => UsernamePasswordInput)),
    __param(1, Ctx())
], UserResolver.prototype, "login", null);
__decorate([
    Mutation(() => Boolean),
    __param(0, Arg("id", () => Number)),
    __param(1, Ctx())
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    Resolver()
], UserResolver);
export { UserResolver };
//# sourceMappingURL=users.js.map