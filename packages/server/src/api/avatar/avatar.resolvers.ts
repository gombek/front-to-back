import { avatar } from "../../mocks/fixtures";
import type { Resolvers } from "@piechowj/pmt-types/lib/generated/api-types";

export const resolvers: Resolvers = {
  Query: {
    avatar: (parent, args, context, info) => avatar,
  },
};
