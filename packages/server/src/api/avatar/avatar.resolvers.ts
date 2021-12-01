import { avatar } from "../../mocks/fixtures";
import { Resolvers } from "shared/lib/types/api-types";

export const resolvers: Resolvers = {
  Query: {
    avatar: (id) => avatar,
  },
};
