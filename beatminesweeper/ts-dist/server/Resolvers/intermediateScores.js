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
import { IntermediateScore } from 'TSDatabase/entities/Intermediate_Scores';
let IntermediateScoreResolver = class IntermediateScoreResolver {
    async allIntermediateScores({ em }) {
        return em.find(IntermediateScore, {});
    }
    async newIntermediateScore(username, time, { em }) {
        const newIntermediateScore = em.create(IntermediateScore, { username, time });
        await em.persistAndFlush(newIntermediateScore);
        return newIntermediateScore;
    }
};
__decorate([
    Query(() => [IntermediateScore]),
    __param(0, Ctx())
], IntermediateScoreResolver.prototype, "allIntermediateScores", null);
__decorate([
    Mutation(() => IntermediateScore, { nullable: true }),
    __param(0, Arg('username', () => String)),
    __param(1, Arg('time', () => Number)),
    __param(2, Ctx())
], IntermediateScoreResolver.prototype, "newIntermediateScore", null);
IntermediateScoreResolver = __decorate([
    Resolver()
], IntermediateScoreResolver);
export { IntermediateScoreResolver };
//# sourceMappingURL=intermediateScores.js.map