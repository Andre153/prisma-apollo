import { resolvers } from './resolvers'
import * as path from 'path'
import express = require('express');
import {importSchema} from 'graphql-import'
import {ApolloServer} from 'apollo-server-express'
import {Context} from './types/types'
import * as cors from "cors";
import {prisma} from '../prisma/generated/prisma-client'

const graphqlPath: string  = '/api/graphql'

const schema = path.resolve('src/schema/Schema.graphql')
console.log(importSchema(schema))
const typeDefs = importSchema(schema)

const app: express.Application = express();
app.use(cors())

const server = new ApolloServer({
    typeDefs: typeDefs as any,
    resolvers: resolvers as any,
    introspection: true,
    context: ({ req }): Context => {
        return {
            db: prisma,
            userUUID: req.uuid
        }
    },
}) as any

server.applyMiddleware({
    app,
    path: graphqlPath
})

app.listen({ port: process.env.PORT }, () => {
    console.log('Server rocking on PORT', process.env.PORT)
})