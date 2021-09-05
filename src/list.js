import React from "react";
import FlipMove from "react-flip-move";

function List(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list m-1 p-1" key={item.key}>
        <p className="m-0">
          <span>
            <i className="bi bi-stop"></i>
          </span>{" "}
          <input
            type="text"
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
            value={item.text}
            id={item.key}
          />
          <span
            className="float-end"
            onClick={() => props.deleteItem(item.key)}
          >
            <i className="bi bi-trash-fill"></i>
          </span>
        </p>
      </div>
    );
  });
  const taskLeft = listItems.length;
  return (
    <div>
      <p>Tasks Left: {taskLeft}</p>
      <div>
        <FlipMove duration={300} easing="ease-in-out">
          {listItems}
        </FlipMove>
      </div>
    </div>
  );
}

export default List;
