import { Resolvers } from "shared/lib/types/generated/api-types";
import { organization, organizations, avatar } from "../../mocks/fixtures";

export const resolvers: Resolvers = {
  Query: {
    organization: (parent, args, context, info) => organization,
    organizations: (parent, args, context, info) => organizations,
  },
};
