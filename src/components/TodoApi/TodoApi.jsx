import React, { useEffect, useState } from "react";
import ItemOfApi from "../ItemOfApi/ItemOfApi";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";
import "./TodoApi.scss";
function TodoApi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  let firstIndex = currentPage * totalPage;
  let lastIndex = firstIndex - totalPage;

  const lastData = data.slice(lastIndex, firstIndex);
  const paginate = (num) => {
    setCurrentPage(num);
  };
  const prevBtnFunc = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextBtnFunc = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <div className="todo-api">
        {data.length > 0 ? (
          <>
            <h2 className="nav__title w-25">Todo API</h2>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                </tr>
              </thead>
              <tbody>
                <ItemOfApi data={data} todo={lastData} />
              </tbody>
            </table>
            <div className="d-flex justify-content-center mt-lg-5 mt-0">
              <Pagination
                todo={lastData}
                num={data}
                totalPage={totalPage}
                paginate={paginate}
                prevBtnFunc={prevBtnFunc}
                nextBtnFunc={nextBtnFunc}
                currentPage={currentPage}
              />
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

export default TodoApi;
