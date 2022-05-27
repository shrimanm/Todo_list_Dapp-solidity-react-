import "./todo.css";
import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div id="content">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.createTask(this.task.value);
          }}
        >
          <input
            id="newTask"
            ref={(input) => {
              this.task = input;
            }}
            type="text"
            className="form-control"
            placeholder="Add task..."
            required
          />
          <input type="submit" hidden="" />
        </form>
        <ul id="taskList" className="list-unstyled">
          {this.props.tasks.map((task, key) => {
            return (
              <div className="taskTemplate" key={key}>
                <label>
                  <input
                    type="checkbox"
                    name={task.id}
                    defaultChecked={task.completed}
                    ref={(input) => {
                      this.checkbox = input;
                    }}
                    onClick={(event) => {
                      this.props.toggleCompleted(task.id);
                    }}
                  />
                  <span className="content">{task.content}</span>
                </label>
              </div>
            );
          })}
        </ul>
        <ul id="completedTaskList" className="list-unstyled"></ul>
      </div>
    );
  }
}
export default Todo;

// 16.10
// 22
//
