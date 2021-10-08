
import { Arg, Query, Mutation, Resolver, Ctx } from 'type-graphql';
import { MineContext } from '../types';
import { IntermediateScore } from 'TSDatabase/entities/Intermediate_Scores';

@Resolver()
export class IntermediateScoreResolver {

  @Query(() => [IntermediateScore])
  async allIntermediateScores(
    @Ctx() { em }: MineContext
  ): Promise<IntermediateScore[]> {
    return em.find(IntermediateScore, {});
  }

  @Mutation(() => IntermediateScore, { nullable: true })
  async newIntermediateScore(
    @Arg('username', () => String) username: string,
    @Arg('time', () => Number) time: number,
    @Ctx() { em }: MineContext
  ): Promise<IntermediateScore> {
    const newIntermediateScore = em.create(IntermediateScore, { username, time })
    await em.persistAndFlush(newIntermediateScore);
    return newIntermediateScore;
  }
}