import React from "react";
import FlipMove from "react-flip-move";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ text: "Add New Task", key: Date.now() }],
      addedItems: {
        text: "",
        key: "",
      },
    };
    this.submitItem = this.submitItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.taskUpdate = this.taskUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      addedItems: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  submitItem(e) {
    e.preventDefault();
    const newTask = this.state.addedItems;
    if (newTask.text !== "") {
      const newTasks = [...this.state.tasks, newTask];
      this.setState({
        tasks: newTasks,
        addedItems: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteTask(key) {
    const filteredTask = this.state.tasks.filter((task) => task.key !== key);
    this.setState({
      tasks: filteredTask,
    });
  }
  taskUpdate(text, key) {
    const tasks = this.state.tasks;
    tasks.map((task) => {
      if (task.key === key) {
        task.text = text;
      }
      this.setState({
        tasks: tasks,
      });
    });
  }
  render() {
    return (
      <div className="bg-primary m-5 p-3 vw-50 todoHolder">
        <form className="d-flex mb-3" onSubmit={this.submitItem}>
          <input
            type="text"
            className="form-control"
            placeholder="Add Task"
            onChange={this.handleInput}
            value={this.state.addedItems.text}
          />
          <button type="submit" className="btn btn-dark m-1">
            Add#{this.state.tasks.length + 1}
          </button>
        </form>
        <Task
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          taskUpdate={this.taskUpdate}
        />
      </div>
    );
  }
}

//List Functional Component
const Task = (props) => {
  const listItems = props.tasks;
  const list = listItems.map((task) => {
    return (
      <div className="list m-1 p-1">
        <p className="m-0">
          <span className="float-start">
            <i class="bi bi-bookmark-fill"></i>
          </span>
          <input
            type="text"
            id={props.tasks.key}
            value={task.text}
            onChange={(e) => {
              props.taskUpdate(e.target.value, task.key);
            }}
          />
          <span
            className="float-end"
            onClick={() => props.deleteTask(task.key)}
          >
            <i className="bi bi-trash-fill"></i>
          </span>
        </p>
      </div>
    );
  });
  const taskLeft = list.length;
  return (
    <div>
      <p>Tasks Left: {taskLeft}</p>
      <div>
      <FlipMove duration={300} easing="ease-in-out">
        {list}
      </FlipMove>
    </div>
    </div>
  );
};
export default App;
