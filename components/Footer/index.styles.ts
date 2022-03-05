import { Box, Typography } from "@mui/material";
import { styled } from "@stitches.config";

export const Wrapper = styled("header", {
  position: "absolute",
  height: "296px",
  width: "100%",
  left: "0px",
  background: "#3A3A3A",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$6",
  marginTop: "80px",
});

export const CorporateName = styled(Typography, {
  fontSize: "$3",
  color: "$white",
});

export const FollowSocialMedia = styled(Typography, {
  fontSize: "$2",
  color: "$white",
});

export const SocialMediaLinks = styled(Box, {
  display: "flex",
  gap: "$4",
});

export const SocialMediaDotLink = styled("a", {
  height: "40px",
  width: "40px",
  backgroundColor: "#28B0FC",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$white",
  textDecoration: "none",
});
