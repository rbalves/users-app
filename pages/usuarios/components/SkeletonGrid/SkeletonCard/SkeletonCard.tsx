import { Box, Grid } from "@mui/material";
import { Address, Card, Name } from "./SkeletonCard.styles";

const SkeletonCard = (): JSX.Element => {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card>
        <Box
          component="img"
          alt="Profile image default"
          src="/profile-image.png"
          style={{ background: "#E5E5E5", borderRadius: "50%" }}
        />
        <Name />
        {Array.from(Array(2)).map((_, index) => {
          return <Address key={index} />;
        })}
      </Card>
    </Grid>
  );
};

export default SkeletonCard;
