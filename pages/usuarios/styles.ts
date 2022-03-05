import { Box, Typography } from "@mui/material";
import { styled } from "@stitches.config";

export const BreadcrumbsBox = styled(Box, {
  marginTop: "$6",
});

export const Title = styled(Typography, {
  fontWeight: "bold",
  margin: "$6 0 $4 0",
});

export const StatesUsersGrid = styled(Box, {
  display: "flex",
  gap: "$4",
  marginTop: "$4",
});

export const StatesBox = styled(Box, {
  flex: 1,
  "& .states-box": {
    border: "1px solid $gray90",
    borderRadius: "$1",
    padding: "$3",
    "& h6": {
      fontWeight: "bold",
      marginLeft: "$4",
    },
  },
});
export const NoneUserBox = styled(Box, {
  border: "1px solid $gray90",
  boxSizing: "border-box",
  borderRadius: "$1",
  padding: "$4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
