export interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onPageChange: (newPage: number) => void;
}