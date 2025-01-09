interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: (value: React.SetStateAction<number>) => void;
  pagesToShow?: number;
}

const Pagination = ({
  currentPage,
  totalPages,
  setPage,
  pagesToShow = 5,
}: PaginationProps) => {
  const half = Math.floor(pagesToShow / 2);
  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPages, currentPage + half);

  if (currentPage <= half) {
    end = Math.min(totalPages, pagesToShow);
  } else if (currentPage + half > totalPages) {
    start = Math.max(1, totalPages - pagesToShow + 1);
  }

  const paginationRange = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );

  const disablePreviousButton = currentPage === 1;
  const disableNextButton = currentPage === totalPages;

  const onNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const onPreviousPage = () => {
    setPage((currentPage) => currentPage - 1);
  };

  return (
    <nav aria-label="Paginación">
      <button onClick={onPreviousPage} disabled={disablePreviousButton}>
        {"<< Anterior"}
      </button>
      <ul>
        {paginationRange.map((page) => (
          <li key={page}>
            <button
              onClick={() => setPage(page)}
              disabled={currentPage === page}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onNextPage} disabled={disableNextButton}>
        {"Siguiente >>"}
      </button>
    </nav>
  );
};

export default Pagination;
