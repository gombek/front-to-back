import { user, users, avatar } from "../../mocks/fixtures";

export const resolvers = {
  Query: {
    user: (id: string) => user,
    users: (id: [string]) => users,
  },

  User: {
    avatar: () => avatar,
  },
};
