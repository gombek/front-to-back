import { useQuery } from "@apollo/client";
import Fab from "@mui/material/Fab";
import Icon from "@mui/material/Icon";
import { Providers } from "../Providers/Providers";
import GetUser from "../../api/user/getUser.graphql";

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
      <Fab color="primary" aria-label="add">
        <Icon>Add</Icon>
      </Fab>
      <div>user</div>
      {JSON.stringify(loading)}
      {JSON.stringify(error)}
      {JSON.stringify(data)}
    </>
  );
};
