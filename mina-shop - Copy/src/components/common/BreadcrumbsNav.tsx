import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type BreadcrumbsNavProps = {
  currentPage: string;
};

function BreadcrumbsNav({ currentPage }: BreadcrumbsNavProps) {
  return (
    <Breadcrumbs sx={{ mb: 3 }}>
      <Link component={RouterLink} to="/products" underline="hover">
        Products
      </Link>

      <Typography color="text.primary">{currentPage}</Typography>
    </Breadcrumbs>
  );
}

export default BreadcrumbsNav;
