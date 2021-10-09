import 'reflect-metadata';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import minesweeperRouter from './ssr-client/index';
import path from 'path';
import { buildSchema } from 'type-graphql';
import microConfig from '../database/mikro-orm.config';
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';
import { COOKIE_NAME, __prod__ } from '../constants';
import { MikroORM } from '@mikro-orm/core';
import { BeginnerScoreResolver } from './Resolvers/beginnerScores';
import { IntermediateScoreResolver } from './Resolvers/intermediateScores';
import { AdvancedScoreResolver } from './Resolvers/advancedScores';
import { UserResolver } from './Resolvers/users';
const main = async () => {
    const app = express();
    const redisStore = connectRedis(session);
    const redisClient = redis.createClient();
    app.use(cors({
        origin: 'http://localhost:4000',
        credentials: true
    }));
    app.use(session({
        name: COOKIE_NAME,
        store: new redisStore({
            client: redisClient,
            disableTouch: true
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            sameSite: 'lax',
            secure: __prod__
        },
        saveUninitialized: false,
        secret: 'abcdefghijklmnop',
        resave: false
    }));
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [BeginnerScoreResolver, IntermediateScoreResolver, AdvancedScoreResolver, UserResolver],
            validate: false
        }),
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
        context: ({ req, res }) => ({ em: orm.em, req, res })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: false });
    app.use('/static', express.static(path.resolve(__dirname, '../../ts-dist/public')));
    app.get('*', minesweeperRouter);
    app.listen(4000, () => console.log('beat minesweeper app is listening on port 4000'));
};
main().catch((err) => console.log(err.message));
//# sourceMappingURL=index.js.map