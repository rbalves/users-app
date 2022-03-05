import { Box } from "@mui/material";

const ProfileImage = ({
  alt,
  src,
}: {
  alt: string;
  src: string;
}): JSX.Element => {
  return (
    <Box component="img" alt={alt} src={src} style={{ borderRadius: "50%" }} />
  );
};

export default ProfileImage;
