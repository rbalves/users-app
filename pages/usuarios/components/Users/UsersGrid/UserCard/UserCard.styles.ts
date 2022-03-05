import { Box } from "@mui/material";
import { styled } from "@stitches.config";

export const Card = styled("a", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$4",
  border: "1px solid $gray90",
  boxSizing: "border-box",
  borderRadius: "$1",
  padding: "$8 $4",
});

export const Name = styled(Box, {
  fontSize: "$5",
  fontWeight: "bold",
  textTransform: "capitalize",
});

export const Address = styled(Box, {
  fontSize: "$2",
  textTransform: "capitalize",
});

export const Locality = styled(Box, {
  fontSize: "$1",
  margin: "0 $14",
  textTransform: "capitalize",
  textAlign: "center",
});
