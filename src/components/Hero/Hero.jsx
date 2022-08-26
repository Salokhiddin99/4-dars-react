import React, { useRef, useState } from "react";
import { IconContext } from "react-icons";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import Item from "../Item/Item";
import Pagination from "../Pagination/Pagination";
import "./Hero.scss";
function Hero() {
  const [todo, setTodo] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [modalId, setModalId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(6);

  let firstIndex = currentPage * totalPage;
  let lastIndex = firstIndex - totalPage;

  const lastData = todo.slice(lastIndex, firstIndex);
  const editInputRef = useRef();
  const todoFunc = (evt) => {
    evt.preventDefault();
    const todoList = {
      id: new Date().getTime(),
      title: evt.target[0].value,
      isComplited: false,
    };
    setTodo([...todo, todoList]);
    evt.target[0].value = "";
  };
  let modalChangeValue = (itemId) => {
    todo.forEach((item) => {
      if (item.id === itemId) {
        setModalText(item.title);
        setModalId(itemId);
      }
    });
  };
  const setTitle = () => {
    todo.forEach((item) => {
      if (item.id === modalId) {
        item.title = modalText;
      }
    });
    setTodo([...todo]);
  };
  const paginate = (num) => {
    setCurrentPage(num);
  };

  return (
    <>
      <main className="w-75 bg-white main">
        <nav className="nav d-flex justify-content-between">
          <h2 className="nav__title w-25">TodoList</h2>
          <form className="w-75 d-flex" onSubmit={(evt) => todoFunc(evt)}>
            <input type="text" className="form-control" />
            <button className=" btn btn-success ms-5">Add</button>
          </form>
        </nav>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th className="todo-header text-center">NUMBER</th>
              <th className="todo-header text-center">TITLE</th>
              <th className="todo-header text-center">COMPLETED</th>
              <th className="todo-header text-center">BUTTONS</th>
            </tr>
          </thead>
          <tbody>
            {lastData.map((item, index) => (
              <Item
                data={item}
                todo={todo}
                setTodo={setTodo}
                modalChangeValue={modalChangeValue}
                index={index + 1}
                key={item.id}
                modal={modal}
                setModal={setModal}
                setModalId={setModalId}
              />
            ))}
          </tbody>
        </table>
        {todo.length > 5 ? (
          <div className="d-flex justify-content-center mt-lg-5 mt-0">
            <Pagination
              todo={lastData}
              num={todo}
              totalPage={totalPage}
              paginate={paginate}
            />
          </div>
        ) : (
          ""
        )}
        {modal ? (
          <>
            <div className="modal-window w-50 modal-window-active bg-white text-dark text-center p-4">
              <IconContext.Provider value={{ size: "25px" }}>
                <div onClick={() => setModal(false)} className="xmark">
                  <FaTimes />
                </div>
              </IconContext.Provider>
              <input
                type="text"
                className="form-control mt-5 w-100 mx-auto"
                onChange={(e) => setModalText(e.target.value)}
                ref={editInputRef}
              />
              <div
                className={
                  modalText === "your todo has been changed"
                    ? "mt-3 fs-5 text-success"
                    : "mt-3 fs-5 text-dark"
                }
              >
                {modalText}
                <IconContext.Provider value={{ size: "25px" }}>
                  <div
                    className={
                      modalText === "your todo has been changed"
                        ? "checkicon-active checkicon"
                        : "checkicon"
                    }
                  >
                    <FaCheckCircle />
                  </div>
                </IconContext.Provider>
              </div>
              <button
                className=" btn btn-success mt-5 w-100"
                onClick={() => {
                  setTitle();
                  setModalText("your todo has been changed");
                  editInputRef.current.value = "";
                }}
              >
                Save
              </button>
            </div>
            <div
              className="overlay-active overlay"
              onClick={() => {
                setModal(false);
              }}
            ></div>
            {document.addEventListener("keydown", (evt) => {
              if (evt.key === "Escape") {
                setModal(false);
              }
            })}
          </>
        ) : (
          <>
            <div className="modal-window w-50 bg-white"></div>
            <div className="overlay"></div>
          </>
        )}
      </main>
    </>
  );
}

export default Hero;
