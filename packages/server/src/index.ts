import "./setEnvConfig";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, Config } from "apollo-server-core";
import express from "express";
import http from "http";
import path from "path";

import { query } from "./api/query";
import { organizationDef } from "./api/organization/schema";
import { organizationRes } from "./api/organization/resolvers";
import { GraphQLSchema } from "graphql";

const PORT = process.env.PORT;

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [query, organizationDef],
  resolvers: [organizationRes],
});

async function startApolloServer({ schema }: { schema: GraphQLSchema }) {
  const app = express();
  app.use(express.static(path.join(__dirname, "public")));

  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({
    app,
    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: "/graphql",
  });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

startApolloServer({ schema: schema });
