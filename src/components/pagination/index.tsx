import Text from "../text";
import styles from "./pagination.module.css";

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
    <nav aria-label="pagination" className={styles.pagination__container}>
      <button
        onClick={onPreviousPage}
        disabled={disablePreviousButton}
        className={styles.pagination__control_button}
        aria-label="previous page"
      >
        <Text tag="text-bold" text="<<" />
      </button>

      <ul className={styles.pagination__dots_container}>
        {paginationRange.map((page) => (
          <li key={page}>
            <button
              onClick={() => setPage(page)}
              disabled={currentPage === page}
              className={styles.pagination__dot_button}
              aria-label={`go to page ${page}`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={onNextPage}
        disabled={disableNextButton}
        className={styles.pagination__control_button}
        aria-label="next page"
      >
        <Text tag="text-bold" text=">>" />
      </button>
    </nav>
  );
};

export default Pagination;
