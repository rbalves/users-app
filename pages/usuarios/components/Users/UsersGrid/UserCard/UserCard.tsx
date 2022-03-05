import { Grid } from "@mui/material";
import { User } from "types/User";
import ProfileImage from "./ProfileImage";
import { Address, Card, Locality, Name } from "./UserCard.styles";

const UserCard = ({ user }: { user: User & { id: number } }): JSX.Element => {
  const {
    name,
    location: { street, city, state, postcode },
    picture,
  } = user;

  const normalizedStreet = (street: string): string => {
    const number: string = street.substring(0, street.indexOf(" "));
    const road = street.substring(street.indexOf(" ") + 1);
    return `${road}, ${number}`;
  };

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card href={`/usuarios/${user.id}`}>
        <ProfileImage
          alt={`${name.first} ${name.last} profile picture`}
          src={picture.large}
        />
        <Name>{`${name.first} ${name.last}`}</Name>
        <Address>{normalizedStreet(street)}</Address>
        <Locality>{`${city}, ${state} - CEP: ${postcode}`}</Locality>
      </Card>
    </Grid>
  );
};

export default UserCard;
