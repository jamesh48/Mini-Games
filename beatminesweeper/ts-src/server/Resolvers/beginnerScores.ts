
import { Arg, Query, Mutation, Resolver, Ctx } from 'type-graphql';
import { MineContext } from '../types';
import { BeginnerScore } from 'TSDatabase/entities/Beginner_Scores';


@Resolver()
export class BeginnerScoreResolver {

  @Query(() => [BeginnerScore])
  async allBeginnerScores(
    @Ctx() { em }: MineContext
  ): Promise<BeginnerScore[]> {
    return em.find(BeginnerScore, {});
  }

  @Mutation(() => BeginnerScore, { nullable: true })
  async newBeginnerScore(
    @Arg('username', () => String) username: string,
    @Arg('time', () => Number) time: number,
    @Ctx() { em }: MineContext
  ): Promise<BeginnerScore> {
    const newBeginnerScore = em.create(BeginnerScore, { username, time })
    await em.persistAndFlush(newBeginnerScore);
    return newBeginnerScore;
  }
}