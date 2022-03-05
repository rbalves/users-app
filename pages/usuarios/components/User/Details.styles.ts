import { Box } from "@mui/material";
import { styled } from "@stitches.config";

export const DetailsMain = styled(Box, {
  flex: 5,
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const DetailsFlex = styled(Box, {
  display: "flex",
  gap: "$2",
});

export const Info = styled(Box, {
  display: "flex",
  gap: "$2",
  alignItems: "center",
  marginBottom: "$3",
});

export const CardInfo = styled(Box, {
  border: "1px solid $gray90",
  boxSizing: "border-box",
  borderRadius: "$1",
  padding: "$3",
  flex: 1,
});

export const CardAbout = styled(Box, {
  border: "1px solid $gray90",
  boxSizing: "border-box",
  borderRadius: "$1",
  padding: "$3",
});
