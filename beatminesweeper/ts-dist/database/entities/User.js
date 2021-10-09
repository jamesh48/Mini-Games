var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectType, Field, Int } from 'type-graphql';
let User = class User {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    Field(() => Int),
    PrimaryKey({ type: 'number' })
], User.prototype, "id", void 0);
__decorate([
    Field(() => String),
    Property({ type: 'date' })
], User.prototype, "createdAt", void 0);
__decorate([
    Field(() => String),
    Property({ type: 'date', onUpdate: () => new Date() })
], User.prototype, "updatedAt", void 0);
__decorate([
    Field(() => String),
    Property({ type: 'text', unique: true })
], User.prototype, "username", void 0);
__decorate([
    Property({ type: 'text' })
], User.prototype, "password", void 0);
User = __decorate([
    ObjectType(),
    Entity()
], User);
export { User };
//# sourceMappingURL=User.js.map