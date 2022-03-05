import Breadcrumbs from "@components/Breadcrumbs";
import Layout from "@components/Layout";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@stitches.config";
import { useFetchUser } from "hooks/use-fetch-user";
import { useRouter } from "next/router";
import Details from "./components/User/Details";
import UserCard from "./components/User/UserCard";
import { BreadcrumbsBox, Title } from "./styles";

const breadcrumbs = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/usuarios",
    label: "Usuários",
  },
  {
    href: "#",
    label: "Detalhes",
  },
];

export const NoneUserBox = styled(Box, {
  border: "1px solid $gray90",
  boxSizing: "border-box",
  borderRadius: "$1",
  padding: "$4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user, loading } = useFetchUser(id);

  return (
    <Layout>
      <Container>
        <BreadcrumbsBox>
          <Breadcrumbs breadcrumbsData={breadcrumbs} />
        </BreadcrumbsBox>
        <Title variant="h5">Detalhes do usuário</Title>
        {loading ? (
          <Typography>Buscando informações...</Typography>
        ) : (
          <>
            {user ? (
              <Box style={{ display: "flex", gap: "12px" }}>
                <UserCard user={user} />
                <Details user={user} />
              </Box>
            ) : (
              <NoneUserBox>
                <Typography>Nenhum usuário encontrado</Typography>
              </NoneUserBox>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default User;
