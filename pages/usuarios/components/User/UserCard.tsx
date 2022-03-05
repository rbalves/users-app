import { Box, Typography } from "@mui/material";
import { styled } from "@stitches.config";
import { User } from "types/User";
import ProfileImage from "../Users/UsersGrid/UserCard/ProfileImage";
import { MdMailOutline, MdPhone, MdLocationOn } from "react-icons/md";
import { Card, Detail, Name } from "./UserCard.styles";

const UserCard = ({ user }: { user: User }): JSX.Element => {
  const {
    name,
    email,
    phone,
    location: { city, state },
    picture,
  } = user;

  return (
    <Card>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileImage
          alt={`${name.first} ${name.last} profile picture`}
          src={picture.large}
        />
        <Name>{`${name.first} ${name.last}`}</Name>
      </Box>
      <Detail>
        <MdMailOutline />
        <Typography>{email}</Typography>
      </Detail>
      <Detail>
        <MdPhone />
        <Typography>{phone}</Typography>
      </Detail>
      <Detail>
        <MdLocationOn />
        <Typography
          style={{ textTransform: "capitalize" }}
        >{`${city}, ${state}`}</Typography>
      </Detail>
    </Card>
  );
};

export default UserCard;
