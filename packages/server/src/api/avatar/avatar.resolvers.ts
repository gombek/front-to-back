import { avatar } from "../../mocks/fixtures";

export const resolvers = {
  Query: {
    avatar: (id: string) => avatar,
  },
};
