import { Resolvers } from "@piechowj/pmt-types/lib/generated/api-types";
import { organization, organizations, avatar } from "../../mocks/fixtures";

export const resolvers: Resolvers = {
  Query: {
    organization: (parent, args, context, info) => organization,
    organizations: (parent, args, context, info) => organizations,
  },
};
