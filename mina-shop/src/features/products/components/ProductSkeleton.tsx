import { Card, CardContent, Grid, Skeleton } from "@mui/material";

function ProductSkeleton() {
  return (
    <Grid>
      {Array.from({ length: 8 }).map((_, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
          <Card>
            <Skeleton variant="rectangular" height={180} />
            <CardContent>
              <Skeleton />
              <Skeleton width="60%" />
              <Skeleton variant="rounded" height={36} sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductSkeleton;
