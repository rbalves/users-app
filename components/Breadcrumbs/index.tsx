import { Breadcrumbs as BreadcrumbsMUI, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { BsChevronRight } from "react-icons/bs";

type BreadcrumbData = {
  href: string;
  label: string;
};

const normalizeBreadcrumbList = (
  breadcrumbsData: BreadcrumbData[]
): JSX.Element[] => {
  const breadcrumbs = [];

  for (let index = 0; index < breadcrumbsData.length - 1; index++) {
    const { label, href } = breadcrumbsData[index];

    breadcrumbs.push(
      <Link underline="hover" key={index + 1} color="inherit" href={href}>
        {label}
      </Link>
    );
  }

  const lastItem = breadcrumbsData[breadcrumbsData.length - 1];

  breadcrumbs.push(
    <Typography key={breadcrumbsData.length}>{lastItem.label}</Typography>
  );

  return breadcrumbs;
};

const Breadcrumbs = ({
  breadcrumbsData,
}: {
  breadcrumbsData: BreadcrumbData[];
}) => {
  const breadcrumbs = normalizeBreadcrumbList(breadcrumbsData);

  return (
    <BreadcrumbsMUI separator={<BsChevronRight />} aria-label="breadcrumb">
      {breadcrumbs}
    </BreadcrumbsMUI>
  );
};

export default Breadcrumbs;
