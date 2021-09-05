import React from "react";
import TodoClass from "./toDo-Class";
import App from "./to-do";


const layout = () => {
  return (
    <div className="container-fluid vh-100 bg-info">
      <div className="row">
        <div className="col-4">
          <TodoClass />
        </div>
        <div className="col-4">
          <App />
        </div>
      </div>
    </div>
  );
};

export default layout;
