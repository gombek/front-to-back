import "./setEnvConfig";
import "./setup";
import express from "express";
import { createServer } from "http";
import { join } from "path";
import { GraphQLSchema } from "graphql";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, Config } from "apollo-server-core";
import { schema } from "./api/schema";

const PORT = process.env.PORT;

async function startApolloServer({ schema }: { schema: GraphQLSchema }) {
  const app = express();
  app.use(express.static(join(__dirname, "public")));

  const httpServer = createServer(app);
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
    `🚀 Web Client ready at http://localhost:${PORT}\n`,
    `🚀 GraphQL ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

startApolloServer({ schema });
