import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  CorporateName,
  FollowSocialMedia,
  Wrapper,
  SocialMediaDotLink,
  SocialMediaLinks,
} from "./index.styles";

const SOCIAL_MEDIA_ICONS = [
  {
    id: 1,
    href: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/",
    icon: <FaLinkedinIn />,
  },
  {
    id: 3,
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <CorporateName>NOME DA EMPRESA</CorporateName>
      <FollowSocialMedia>Siga-nos nas redes sociais:</FollowSocialMedia>
      <SocialMediaLinks>
        {SOCIAL_MEDIA_ICONS.map(({ id, href, icon }) => {
          return (
            <SocialMediaDotLink key={id} href={href} target="_blank">
              {icon}
            </SocialMediaDotLink>
          );
        })}
      </SocialMediaLinks>
    </Wrapper>
  );
};

export default Footer;
