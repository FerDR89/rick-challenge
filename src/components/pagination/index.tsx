import Button from "../button";

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
      <Button
        onClick={onPreviousPage}
        disabled={disablePreviousButton}
        style={{ width: "75px" }}
      >
        {"<< Anterior"}
      </Button>
      <ul>
        {paginationRange.map((page) => (
          <li key={page}>
            <Button
              onClick={() => setPage(page)}
              disabled={currentPage === page}
              style={{
                width: "40px",
                minHeight: "0px",
                height: "40px",
                backgroundColor: "red",
                padding: "0",
              }}
            >
              {page}
            </Button>
          </li>
        ))}
      </ul>
      <Button
        onClick={onNextPage}
        disabled={disableNextButton}
        style={{ width: "75px" }}
      >
        {"Siguiente >>"}
      </Button>
    </nav>
  );
};

export default Pagination;
