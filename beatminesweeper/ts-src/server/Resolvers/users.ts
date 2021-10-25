import {
  Ctx,
  Query,
  Mutation,
  Resolver,
  Arg,
  InputType,
  Field,
  ObjectType,
} from "type-graphql";
import { User } from "TSDatabase/entities/User";
import { MineContext } from "../types";
import { EntityManager } from "@mikro-orm/postgresql";
import argon2 from "argon2";
import {COOKIE_NAME} from "TSSrc/constants";

@InputType()
class UsernamePasswordInput {
  @Field(() => String)
  username: string;
  @Field(() => String)
  password: string;
}

@ObjectType()
class FieldError {
  @Field(() => String)
  field: string;
  @Field(() => String)
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: MineContext) {
    // you are not logged in
    if (!req.session.userId) {
      return null;
    }
    const user = await em.findOne(User, { id: req.session.userId });
    return user;
  }

  @Query(() => [User])
  getAllUsers(@Ctx() { em }: MineContext): Promise<User[]> {
    return em.find(User, {});
  }

  @Query(() => UserResponse)
  async getSingleUser(
    @Arg("id", () => Number) id: number,
    @Ctx() { em }: MineContext
  ): Promise<UserResponse> {
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

  @Mutation(() => UserResponse)
  async register(
    @Arg("options", () => UsernamePasswordInput) options: UsernamePasswordInput,
    @Ctx() { em, req }: MineContext
  ): Promise<UserResponse> {
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
      const result = await (em as EntityManager)
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
    } catch (err) {
      console.log(err);
      // Duplicate username error
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
    // Store user id session, this will set a cookie on the user and keep them logged in.
    req.session.userId = user.id;
    req.session.save(() => {})

    return {user};
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MineContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        console.log('destroyed!!!');
        resolve(true);
      })
    );
    return { ok: true };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options", () => UsernamePasswordInput) options: UsernamePasswordInput,
    @Ctx() { em, req }: MineContext
  ): Promise<UserResponse> {
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
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("id", () => Number) id: number,
    @Ctx() { em }: MineContext
  ): Promise<boolean> {
    try {
      await em.nativeDelete(User, { id });
      return true;
    } catch (err) {
      return false;
    }
  }
}
