import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: (value: React.SetStateAction<number>) => void;
}

//TODO -> Acortar la cantidad de botones a mostrar

const Pagination = ({ currentPage, totalPages, setPage }: PaginationProps) => {
  const totalPagesArr = useMemo(
    () => Array.from(Array(totalPages).keys(), (n) => n + 1),
    [totalPages]
  );
  const disablePreviousButton = currentPage === 1;
  const disableNexButton = currentPage === totalPages;

  const onNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const onPreviousPage = () => {
    setPage((currentPage) => currentPage - 1);
  };

  return (
    <article>
      <button onClick={onPreviousPage} disabled={disablePreviousButton}>
        {"<<"}
      </button>
      <ul>
        {totalPagesArr.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => setPage(pageNumber)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={onNextPage} disabled={disableNexButton}>
        {">>"}
      </button>
    </article>
  );
};
export default Pagination;
