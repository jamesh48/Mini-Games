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
import { AdvancedScore } from 'TSDatabase/entities/Advanced_Scores';
let AdvancedScoreResolver = class AdvancedScoreResolver {
    async allAdvancedScores({ em }) {
        return em.find(AdvancedScore, {});
    }
    async newAdvancedScore(username, time, { em }) {
        const newAdvancedScore = em.create(AdvancedScore, { username, time });
        await em.persistAndFlush(newAdvancedScore);
        return newAdvancedScore;
    }
};
__decorate([
    Query(() => [AdvancedScore]),
    __param(0, Ctx())
], AdvancedScoreResolver.prototype, "allAdvancedScores", null);
__decorate([
    Mutation(() => AdvancedScore, { nullable: true }),
    __param(0, Arg('username', () => String)),
    __param(1, Arg('time', () => Number)),
    __param(2, Ctx())
], AdvancedScoreResolver.prototype, "newAdvancedScore", null);
AdvancedScoreResolver = __decorate([
    Resolver()
], AdvancedScoreResolver);
export { AdvancedScoreResolver };
//# sourceMappingURL=advancedScores.js.map