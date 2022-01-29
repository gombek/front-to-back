import { gql, useQuery } from "@apollo/client";
import { Providers } from "../Providers/Providers";
import GetUser from "../../api/user/getUser.graphql";

// const GET_USER = gql`
//   query GetUser {
//     user(id: "user.1") {
//       name
//     }
//   }
// `;

export const App = () => {
  return (
    <Providers>
      <div>App</div>
      <User />
    </Providers>
  );
};

const User = () => {
  const { loading, error, data } = useQuery(GetUser);
  return (
    <>
      <div>user</div>
      {JSON.stringify(loading)}
      {JSON.stringify(error)}
      {JSON.stringify(data)}
    </>
  );
};
