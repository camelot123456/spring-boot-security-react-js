import React, { useState } from "react";

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

  const handleChangeSelectSizeElement = (_sizePage) => {
    handlePageInfo({
      currentPage: currentPage,
      sizePage: _sizePage,
      sortField: field,
      sortDir: dir,
      keyword: keyword,
    });
  };

  const handleSearchForm = (_keyword) => {
    handlePageInfo({
      currentPage: currentPage,
      sizePage: sizePage,
      sortField: field,
      sortDir: dir,
      keyword: _keyword,
    });
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
    <div className="hstack d-flex justify-content-between align-items-center w-100">
      <div className="hstack gap-2 w-50">
        <div className="d-flex">
          <input
            className="form-control w-100"
            type="search"
            placeholder="Search"
            onChange={(e) => handleSearchForm(e.target.value)}
          />
        </div>

        <select
          style={{ width: "20%" }}
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => handleChangeSelectSizeElement(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
      </div>

      <nav aria-label="Page navigation example" className="w-50">
        <ul className="pagination justify-content-end my-auto">
          {/* ----------------------------- return first ----------------------------- */}

          <li
            className={currentPage === 0 ? "page-item disabled" : "page-item"}
          >
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

          <li
            className={currentPage === 0 ? "page-item disabled" : "page-item"}
          >
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
              currentPage === totalPage - 1 ? "page-item disabled" : "page-item"
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
              currentPage === totalPage - 1 ? "page-item disabled" : "page-item"
            }
          >
            <button
              className="page-link"
              onClick={() =>
                handlePageInfo({
                  currentPage: totalPage - 1,
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
    </div>
  );
}

export default PaginationCustom;
