import { BeginnerScore } from "TSDatabase/entities/Beginner_Scores";
import { IntermediateScore } from "TSDatabase/entities/Intermediate_Scores";
import { AdvancedScore } from "TSDatabase/entities/Advanced_Scores";
import { User } from "TSDatabase/entities/User";
import { __prod__ } from "../constants";
import { MikroORM } from "@mikro-orm/core";

export default {
  migrations: {
    path: "TSDatabase/migrations",
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [BeginnerScore, IntermediateScore, AdvancedScore, User],
  dbName: "Minesweeper",
  type: "postgresql",
  debug: !__prod__,
  port: 5432,
  user: "jameshrivnak",
} as Parameters<typeof MikroORM.init>[0];
