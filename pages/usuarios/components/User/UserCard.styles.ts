import { Box } from "@mui/material";
import { styled } from "@stitches.config";

export const Card = styled(Box, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$4",
  border: "1px solid $gray90",
  boxSizing: "border-box",
  borderRadius: "$1",
  padding: "$8 $4",
  flex: 2,
});

export const Name = styled(Box, {
  fontSize: "$5",
  fontWeight: "bold",
  textTransform: "capitalize",
  marginTop: "$2",
});

export const Detail = styled(Box, {
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
