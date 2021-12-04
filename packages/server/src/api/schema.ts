// import path from "path";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
// import { loadFilesSync } from "@graphql-tools/load-files";

import * as avatar from "./avatar/avatar.graphql";
import { resolvers as avatarResolvers } from "./avatar/avatar.resolvers";
import * as organization from "./organization/organization.graphql";
import { resolvers as organizationResolvers } from "./organization/organization.resolvers";
import * as user from "./user/user.graphql";
import { resolvers as userResolvers } from "./user/user.resolvers";

// const typesCollection = loadFilesSync(path.join(__dirname, "."), {
//   extensions: ["graphql"],
//   recursive: true,
// });

// const resolversCollection = loadFilesSync(
//   path.join(__dirname, "./**/*.resolvers.*")
// );

const typeDefs = mergeTypeDefs([avatar, organization, user]);
const resolvers = mergeResolvers([
  avatarResolvers,
  organizationResolvers,
  userResolvers,
]);

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
