import { User } from "types/User";
import Filters from "./Filters/Filters";
import { MainBox } from "./Users.styles";
import UsersGrid from "./UsersGrid/UsersGrid";

type UsersProps = {
  totalUsers: number;
  totalPages: number;
  page: number;
  setPage: (arg: number) => void;
  limit: number;
  users: User[];
  orderBy: string;
  setOrderBy: (arg: string) => void;
};

const Users = ({
  totalUsers,
  totalPages,
  page,
  setPage,
  limit,
  users,
  orderBy,
  setOrderBy,
}: UsersProps): JSX.Element => {
  return (
    <MainBox>
      <Filters
        pageQuantity={limit}
        totalItems={totalUsers}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        setPage={setPage}
      />
      <UsersGrid
        users={users}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </MainBox>
  );
};

export default Users;
