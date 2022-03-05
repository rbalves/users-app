import { MainBox } from "./SkeletonGrid.styles";
import { Grid } from "@mui/material";
import SkeletonCard from "./SkeletonCard/SkeletonCard";

const SkeletonGrid = () => {
  return (
    <MainBox>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(9)).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </Grid>
    </MainBox>
  );
};

export default SkeletonGrid;
