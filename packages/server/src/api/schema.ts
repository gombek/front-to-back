import path from "path";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const typesCollection = loadFilesSync(path.join(__dirname, "."), {
  extensions: ["graphql"],
  recursive: true,
});

const resolversCollection = loadFilesSync(
  path.join(__dirname, "./**/*.resolvers.*")
);

const typeDefs = mergeTypeDefs(typesCollection);
const resolvers = mergeResolvers(resolversCollection);

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
