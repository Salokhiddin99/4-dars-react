import { useEffect } from "react";

function Item({
  data,
  todo,
  index,
  setTodo,
  modal,
  setModal,
  modalChangeValue,
  setModalId,
}) {
  const removeItem = (itemId) => {
    setTodo(todo.filter((item) => item.id !== itemId));
  };
  let isComplitedFunc = (itemId) => {
    todo.map((item) => {
      if (item.id === itemId) {
        item.isComplited = !item.isComplited;
      }
    });
    setTodo([...todo]);
  };
  return (
    <>
      <tr className={data.isComplited ? "table-success" : "table-danger"}>
        <td className="text-center">{index}</td>
        <td className="text-center">{data.title}</td>
        <td className="text-center">
          {data.isComplited ? "true" : "false"}
          <input
            type="checkbox"
            className="ms-3 form-check-input"
            onChange={() => isComplitedFunc(data.id)}
          />
        </td>
        <td className="text-center">
          <div className="btns d-flex">
            <button
              className="btn btn-warning me-3"
              onClick={() => {
                modalChangeValue(data.id);
                setModalId(data.id);
                setModal(true);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(data.id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Item;
