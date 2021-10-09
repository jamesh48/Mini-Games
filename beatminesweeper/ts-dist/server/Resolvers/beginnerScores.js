var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Arg, Query, Mutation, Resolver, Ctx } from 'type-graphql';
import { BeginnerScore } from 'TSDatabase/entities/Beginner_Scores';
let BeginnerScoreResolver = class BeginnerScoreResolver {
    async allBeginnerScores({ em }) {
        return em.find(BeginnerScore, {});
    }
    async newBeginnerScore(username, time, { em }) {
        const newBeginnerScore = em.create(BeginnerScore, { username, time });
        await em.persistAndFlush(newBeginnerScore);
        return newBeginnerScore;
    }
};
__decorate([
    Query(() => [BeginnerScore]),
    __param(0, Ctx())
], BeginnerScoreResolver.prototype, "allBeginnerScores", null);
__decorate([
    Mutation(() => BeginnerScore, { nullable: true }),
    __param(0, Arg('username', () => String)),
    __param(1, Arg('time', () => Number)),
    __param(2, Ctx())
], BeginnerScoreResolver.prototype, "newBeginnerScore", null);
BeginnerScoreResolver = __decorate([
    Resolver()
], BeginnerScoreResolver);
export { BeginnerScoreResolver };
//# sourceMappingURL=beginnerScores.js.map