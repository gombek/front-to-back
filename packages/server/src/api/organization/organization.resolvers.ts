import { Resolvers } from "shared/src/types/api-types";
import { organization, organizations, avatar } from "../../mocks/fixtures";

export const resolvers: Resolvers = {
  Query: {
    organization: (id) => organization,
    organizations: (ids) => organizations,
  },
};
