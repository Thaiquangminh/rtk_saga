export interface Pagination {
  _page: number;
  _limit: number;
  _totalRows: number;
}

export interface ListRespone<T> {
  data: T[];
  pagination: Pagination;
}
