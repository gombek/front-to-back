import { organization } from "../../mocks/fixtures";

export const organizationRes = {
  Query: {
    organization: (id: string) => organization,
  },
};
