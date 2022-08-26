import React, { useRef } from "react";

function Pagination({
  todo,
  num,
  totalPage,
  paginate,
  prevBtnFunc,
  nextBtnFunc,
  currentPage,
}) {
  let count = [];
  for (let i = 1; i <= Math.ceil(num.length / totalPage); i++) {
    count.push(i);
  }
  const disabledBtn = useRef();
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className="page-item"
            ref={disabledBtn}
            onClick={() => {
              currentPage === 1
                ? (disabledBtn.current.disabled = true)
                : prevBtnFunc(),
                (disabledBtn.current.disabled = false);
            }}
          >
            <a className="page-link" href="#">
              Prev
            </a>
          </li>
          {count.map((item, index) => (
            <li
              className="page-item"
              onClick={() => paginate(item)}
              key={index}
            >
              <a className="page-link" href="#">
                {item}
              </a>
            </li>
          ))}
          <li
            className="page-item"
            ref={disabledBtn}
            onClick={() => {
              currentPage === count.length
                ? (disabledBtn.current.disabled = true)
                : nextBtnFunc(),
                (disabledBtn.current.disabled = false);
            }}
          >
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
