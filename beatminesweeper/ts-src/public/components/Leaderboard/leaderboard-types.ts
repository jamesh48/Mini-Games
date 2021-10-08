import { AdvancedScore, BeginnerScore, IntermediateScore } from "TSSrc/generated/graphql";

type FormatTimeFunc = (time: number) => string;
type LeaderboardHandleClickFunc = (e: React.MouseEvent<HTMLInputElement>) => void;
type MakeTitleFunc = (
  personalized: boolean | string,
  skillLevel: string
) => string;

type LeaderboardEntry = {username: string; time: number};



type GenericScore = (BeginnerScore | IntermediateScore | AdvancedScore);

type HandleClickPageFunc = (e: React.MouseEvent) => void;

type HandleScoreViewFunc = (ssrTopTimes: GenericScore[] | undefined) => GenericScore[] | undefined;

type Personalized = (boolean | string);

interface LeaderboardProps {
  ssrTopTimes?: GenericScore[];
}

export {HandleClickPageFunc, FormatTimeFunc, MakeTitleFunc, LeaderboardHandleClickFunc, HandleScoreViewFunc, Personalized, LeaderboardEntry, LeaderboardProps, GenericScore };
