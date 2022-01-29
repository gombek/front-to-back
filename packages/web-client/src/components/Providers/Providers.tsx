import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export const Providers: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
