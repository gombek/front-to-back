import { organization, organizations } from "../../mocks/fixtures";

export const resolvers = {
  Query: {
    organization: (id: string) => organization,
    organizations: (id: [string]) => organizations,
  },
};
