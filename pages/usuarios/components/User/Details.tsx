import { Typography } from "@mui/material";
import { MdLocationOn, MdOutlineCake, MdTransgender } from "react-icons/md";
import { User } from "types/User";
import {
  CardAbout,
  CardInfo,
  DetailsFlex,
  DetailsMain,
  Info,
} from "./Details.styles";

const Details = ({ user }: { user: User }) => {
  const normalizedStreet = (street: string): string => {
    const number: string = street.substring(0, street.indexOf(" "));
    const road = street.substring(street.indexOf(" ") + 1);
    return `${road}, ${number}`;
  };

  const genderBR = (gender: string) => {
    if (gender === "male") {
      return "Masculino";
    }

    if (gender === "female") {
      return "Feminino";
    }

    return "Não informado";
  };

  const formatDate = (date: any) => {
    return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
  };

  return (
    <DetailsMain>
      <DetailsFlex>
        <CardInfo>
          <Info>
            <MdTransgender />
            <Typography>{`Gênero: ${genderBR(user.gender)}`}</Typography>
          </Info>
          <Info>
            <MdOutlineCake />
            <Typography>{`Aniversário: ${formatDate(user.dob.date)} (${
              user.dob.age
            } anos)`}</Typography>
          </Info>
        </CardInfo>
        <CardInfo>
          <Info>
            <MdLocationOn />
            <Typography
              style={{ textTransform: "capitalize" }}
            >{`Logradouro: ${normalizedStreet(
              user.location.street
            )}`}</Typography>
          </Info>
          <Info>
            <MdLocationOn />
            <Typography
              style={{ textTransform: "capitalize" }}
            >{`CEP: ${user.location.postcode}`}</Typography>
          </Info>
        </CardInfo>
      </DetailsFlex>
      <CardAbout>
        <Typography style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          venenatis urna. Curabitur ultrices enim sem, et venenatis est
          tincidunt id. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Pellentesque gravida, ipsum eget
          porttitor sollicitudin, ligula enim auctor turpis, vitae maximus
          mauris quam vitae sapien. Vestibulum sed ante turpis. Curabitur eu
          massa quis ipsum aliquam viverra. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Mauris et venenatis urna. Curabitur
          ultrices enim sem, et venenatis est tincidunt id. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Pellentesque gravida, ipsum eget porttitor sollicitudin, ligula
          enim auctor turpis, vitae maximus mauris quam vitae sapien. Vestibulum
          sed ante turpis. Curabitur eu massa quis ipsum aliquam viverra.
        </Typography>
      </CardAbout>
    </DetailsMain>
  );
};

export default Details;
