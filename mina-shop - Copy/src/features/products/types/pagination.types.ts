export type ProductPaginationProps = {
  total: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
