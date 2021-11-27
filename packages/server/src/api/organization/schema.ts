export const organizationDef = /* GraphQL */ `
  type Organization {
    id: ID!
    name: String!
    description: String
    users: [ID]!
  }

  extend type Query {
    organization: Organization!
  }
`;
