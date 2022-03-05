import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ContainerStyled, HeaderStyled, InputSearch } from "./index.styles";

const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <Box>
          <Typography variant="h4">LOGO</Typography>
        </Box>
        <Box>{/* <InputSearch placeholder="Buscar aqui" /> */}</Box>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
