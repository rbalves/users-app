import { styled } from "@stitches.config";
import { Box, Typography } from "@mui/material";

export const FiltersBox = styled(Box, {
  border: "1px solid $gray90",
  boxSizing: "border-box",
  borderRadius: "$1",
  padding: "$4",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const OrderByBox = styled(Box, {
  display: "flex",
  alignItems: "center",
  gap: "$3",
});

export const OrderByText = styled(Typography, {
  fontWeight: "bold",
  fontSize: "$2",
});
