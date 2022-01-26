import { memo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function PagedCustom({ props }) {
  const [pageEnable, setPageEnable] = useState(false);
  const [arrPage, setArrPage] = useState([]);

  const ref = useRef();

  useEffect(() => {
    var arrNew = [];
    for (let i = 0; i < props.totalPage; i++) {
      arrNew.push(i);
    }
    setArrPage(arrNew);
    ref.current = props;
  }, [props.currentPage]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">

        <li className="page-item">
          <Link
            className="page-link"
            to={`/roles/page/0?sizePage=${props.sizePage}&sortField=${props.field}&sortDir=${props.dir}&keyword=${props.keyword}`}
          >
            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          </Link>
        </li>

        <li className="page-item">
          <Link
            className="page-link"
            to={`/roles/page/${props.currentPage - 1}?sizePage=${props.sizePage}&sortField=${props.field}&sortDir=${props.dir}&keyword=${props.keyword}`}
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </Link>
        </li>

        {arrPage.map((element, index) => (
          <li key={element} className="page-item">
            <Link
              className="page-link"
              to={`/roles/page/${element}?sizePage=${props.sizePage}&sortField=${props.field}&sortDir=${props.dir}&keyword=${props.keyword}`}
            >
              {element}
            </Link>
          </li>
        ))}

        <li className="page-item">
          <Link
            className="page-link"
            to={`/roles/page/${props.currentPage + 1}?sizePage=${props.sizePage}&sortField=${props.field}&sortDir=${props.dir}&keyword=${props.keyword}`}
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </Link>
        </li>

        <li className="page-item">
          <Link
            className="page-link"
            to={`/roles/page/${props.totalPage}?sizePage=${props.sizePage}&sortField=${props.field}&sortDir=${props.dir}&keyword=${props.keyword}`}
          >
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default memo(PagedCustom);
