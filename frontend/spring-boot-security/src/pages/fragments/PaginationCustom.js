import React from "react";

function PaginationCustom(props) {
  const {
    currentPage,
    sizePage,
    field,
    dir,
    keyword,
    totalElement,
    totalPage,
  } = props.pageInfo;

  const { onChangePaged } = props;

  //   ----------------------------- handlePageInfo -----------------------------
  const handlePageInfo = (params) => {
    if (onChangePaged) {
      onChangePaged(params);
    }
  };

  //   ----------------------------- handleShowPageElement -----------------------------
  const handleShowPageElement = () => {
    const pageElements = [];
    for (let i = 0; i < totalPage; i++) {
      pageElements.push(i);
    }
    return pageElements;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        {/* ----------------------------- return first ----------------------------- */}

        <li className={currentPage === 0 ? "page-item disabled" : "page-item"}>
          <button
            className="page-link"
            onClick={() =>
              handlePageInfo({
                currentPage: 0,
                sizePage: sizePage,
                sortField: field,
                sortDir: dir,
                keyword: keyword,
              })
            }
          >
            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          </button>
        </li>

        {/* ----------------------------- return previous ----------------------------- */}

        <li className={currentPage === 0 ? "page-item disabled" : "page-item"}>
          <button
            className="page-link"
            onClick={() =>
              handlePageInfo({
                currentPage: currentPage - 1 <= 0 ? 0 : currentPage - 1,
                sizePage: sizePage,
                sortField: field,
                sortDir: dir,
                keyword: keyword,
              })
            }
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </button>
        </li>

        {/* ----------------------------- return current ----------------------------- */}

        {handleShowPageElement().map((element) => (
          <li
            className={
              currentPage === element ? "page-item active" : "page-item"
            }
            key={element}
          >
            <button
              className="page-link"
              onClick={() =>
                handlePageInfo({
                  currentPage: element,
                  sizePage: sizePage,
                  sortField: field,
                  sortDir: dir,
                  keyword: keyword,
                })
              }
            >
              {element + 1}
            </button>
          </li>
        ))}

        {/* ----------------------------- return next ----------------------------- */}

        <li
          className={
            currentPage === totalPage ? "page-item disabled" : "page-item"
          }
        >
          <button
            className="page-link"
            onClick={() =>
              handlePageInfo({
                currentPage:
                  currentPage + 1 >= totalPage ? totalPage : currentPage + 1,
                sizePage: sizePage,
                sortField: field,
                sortDir: dir,
                keyword: keyword,
              })
            }
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </li>

        {/* ----------------------------- return tail ----------------------------- */}

        <li
          className={
            currentPage === totalPage ? "page-item disabled" : "page-item"
          }
        >
          <button
            className="page-link"
            onClick={() =>
              handlePageInfo({
                currentPage: totalPage,
                sizePage: sizePage,
                sortField: field,
                sortDir: dir,
                keyword: keyword,
              })
            }
          >
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </button>
        </li>

        {/* ----------------------------- finish ----------------------------- */}
      </ul>
    </nav>
  );
}

export default PaginationCustom;
