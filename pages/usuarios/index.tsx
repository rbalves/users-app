import Breadcrumbs from "@components/Breadcrumbs";
import Layout from "@components/Layout";
import { Box, Container, Typography } from "@mui/material";
import { useFetchUsers } from "hooks/use-fetch-users";
import SkeletonGrid from "./components/SkeletonGrid/SkeletonGrid";
import StateList from "./components/States/States";
import StatesChips from "./components/StatesChips/StatesChips";
import Users from "./components/Users/Users";
import {
  BreadcrumbsBox,
  NoneUserBox,
  StatesBox,
  StatesUsersGrid,
  Title,
} from "./styles";

const breadcrumbs = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/usuarios",
    label: "Usuários",
  },
];

const Usuarios = (): JSX.Element => {
  const {
    loading,
    error,
    totalUsers,
    totalPages,
    page,
    setPage,
    limit,
    users,
    states,
    setStates,
    orderBy,
    setOrderBy,
  } = useFetchUsers();

  return (
    <Layout>
      <Container>
        <BreadcrumbsBox>
          <Breadcrumbs breadcrumbsData={breadcrumbs} />
        </BreadcrumbsBox>

        <Title variant="h5">Lista de membros</Title>

        <StatesChips states={states} setStates={setStates} setPage={setPage} />

        <StatesUsersGrid>
          <StatesBox>
            <Box className="states-box">
              <Typography variant="h6">Por Estado</Typography>
              <StateList
                states={states}
                setStates={setStates}
                setPage={setPage}
              />
            </Box>
          </StatesBox>

          {loading ? (
            <SkeletonGrid />
          ) : (
            <>
              {totalUsers > 0 ? (
                <Users
                  totalUsers={totalUsers}
                  totalPages={totalPages}
                  page={page}
                  setPage={setPage}
                  limit={limit}
                  users={users}
                  orderBy={orderBy}
                  setOrderBy={setOrderBy}
                />
              ) : (
                <Box style={{ flex: 4 }}>
                  <NoneUserBox>
                    <Typography>Nenhum usuário encontrado</Typography>
                  </NoneUserBox>
                </Box>
              )}
            </>
          )}
        </StatesUsersGrid>
      </Container>
    </Layout>
  );
};

export default Usuarios;
