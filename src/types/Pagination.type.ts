export type PaginationProps = {
  totalPages: number;
  page: number;
  limit: number;
  siblings: number;
  onPageChange: (page: number | string) => void;
}