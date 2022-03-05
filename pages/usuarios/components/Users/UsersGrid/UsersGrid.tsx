import { Grid } from "@mui/material";
import Link from "next/link";
import { User } from "types/User";
import { PaginationFlex } from "../Users.styles";
import UserCard from "./UserCard/UserCard";
import { MainBox } from "./UsersGrid.styles";

type UsersGrid = {
  users: User[];
  page: number;
  setPage: (arg: number) => void;
  totalPages: number;
};

const UsersGrid = ({
  users,
  page,
  setPage,
  totalPages,
}: UsersGrid): JSX.Element => {
  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <MainBox>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {users.map((user: any, index) => (
          <UserCard user={user} key={index} />
        ))}
      </Grid>
      <PaginationFlex page={page} count={totalPages} onChange={handlePage} />
    </MainBox>
  );
};

export default UsersGrid;
