import { Resolvers } from "@piechowj/pmt-types/lib/generated/api-types";
import { users, avatars } from "../../mocks/fixtures";

export const resolvers: Resolvers = {
  Query: {
    user: (parent, args, context, info) =>
      users.find(({ id }) => id === args.id) || null,
    users: (parent, args, context, info) =>
      users.filter(({ id }) => args.ids.includes(id)),
  },

  User: {
    avatar: (parent, args, context, info) =>
      avatars.find(({ id }) => id === parent.avatar) || null,
  },
};
