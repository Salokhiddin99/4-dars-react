import React from "react";

function ItemOfApi({ data, todo }) {
  return (
    <>
      {todo.map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
      ))}
    </>
  );
}

export default ItemOfApi;
