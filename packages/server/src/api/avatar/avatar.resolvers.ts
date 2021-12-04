import { avatar } from "../../mocks/fixtures";
import { Resolvers } from "shared/lib/types/generated/api-types";

export const resolvers: Resolvers = {
  Query: {
    avatar: (parent, args, context, info) => avatar,
  },
};
