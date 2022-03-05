import { Box } from "@mui/material";
import { styled } from "@stitches.config";

export const Card = styled(Box, {
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
  width: "176px",
  height: "$4",
  background: "$gray2",
  borderRadius: "$8",
  margin: "$3 0 $8 0",
});

export const Address = styled(Box, {
  width: "113px",
  height: "$3",
  background: "$gray2",
  borderRadius: "$8",
});
