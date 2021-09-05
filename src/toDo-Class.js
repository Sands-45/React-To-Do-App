import React from "react";
import List from "./list";

class TodoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{text:"Add New Task",key:"01"}],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
	this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value +" "+ new Date().getDate(),
        key: Date.now(),
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, key){
	  const items = this.state.items;
	  items.map(item =>{
		  if(item.key === key){
			  item.text=text;
		  }
		  this.setState({
			  items:items
		  })
	  })
  }
  render() {
    return (
      <div>
        <div className="bg-primary m-5 p-3 vw-50 todoHolder">
          <form id="toDo-Form" className="d-flex mb-3" onSubmit={this.addItem}>
            <input
              type="text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
              className="form-control"
              placeholder="Add Task"
              aria-label="Add Task"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-info m-1" type="submit" id="button-addon2">
              Add#{this.state.items.length+1}
            </button>
          </form>
          <List
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoClass;
