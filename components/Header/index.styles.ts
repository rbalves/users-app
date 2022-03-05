import { Container } from "@mui/material";
import { styled } from "@stitches.config";

export const HeaderStyled = styled("header", {
  height: "96px",
  background: "$gray1",
  display: "flex",
  alignItems: "center",
});

export const ContainerStyled = styled(Container, {});

export const InputSearch = styled("input", {
  width: "464px",
  height: "$12",
  background: "$white",
  border: "1px solid #B0B0B0",
  boxSizing: "border-box",
  borderRadius: "$8",
  backgroundImage: 'url("magnifier.png")',
  backgroundPosition: "12px 16px",
  backgroundRepeat: "no-repeat",
  padding: "$3 $5 $3 $10",
  marginLeft: "140px",
});
