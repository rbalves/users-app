import { styled } from "@stitches.config";
import { Box, Pagination, Typography } from "@mui/material";

export const MainBox = styled(Box, {
  flex: 4,
  display: "flex",
  flexDirection: "column",
});

export const PaginationFlex = styled(Pagination, {
  display: "flex",
  justifyContent: "center",
  marginTop: "$10",
});
