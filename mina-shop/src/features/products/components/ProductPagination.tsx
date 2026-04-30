import { Box, Pagination } from "@mui/material";
import { Products_Per_Page } from "../../../constants/api";
import type { ProductPaginationProps } from "../types/pagination.types";

function ProductPagination({
  total,
  currentPage,
  onPageChange,
}: ProductPaginationProps) {
  const pageCount = Math.ceil(total / Products_Per_Page);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Pagination
        count={pageCount}
        page={currentPage}
        color="primary"
        onChange={(_, page) => onPageChange(page)}
      />
    </Box>
  );
}

export default ProductPagination;
