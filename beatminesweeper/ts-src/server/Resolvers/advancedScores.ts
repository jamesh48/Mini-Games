
import { Arg, Query, Mutation, Resolver, Ctx } from 'type-graphql';
import { MineContext } from '../types';
import { AdvancedScore } from 'TSDatabase/entities/Advanced_Scores';

@Resolver()
export class AdvancedScoreResolver {

  @Query(() => [AdvancedScore])
  async allAdvancedScores(
    @Ctx() { em }: MineContext
  ): Promise<AdvancedScore[]> {
    return em.find(AdvancedScore, {});
  }

  @Mutation(() => AdvancedScore, { nullable: true })
  async newAdvancedScore(
    @Arg('username', () => String) username: string,
    @Arg('time', () => Number) time: number,
    @Ctx() { em }: MineContext
  ): Promise<AdvancedScore> {
    const newAdvancedScore = em.create(AdvancedScore, { username, time })
    await em.persistAndFlush(newAdvancedScore);
    return newAdvancedScore;
  }
}