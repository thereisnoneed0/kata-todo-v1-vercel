import { useState } from "react";
import { TTaskListProps, TTaskUniqueProps } from "./types/types";

function Task({
  item,
  isCompletedFlag,
  handleTaskIsCompleted,
  handleDeleteTask,
  handleChangeTextAtTask
}: TTaskUniqueProps) {
  const [edit, setEdit] = useState(false);
  const [taskText, setTaskText] = useState(item.text);

  if (edit && !item.isCompleted) {
    return (
      <li>
        <div>
          <input
            className="new-todo"
            autoFocus
            value={taskText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newText = e.target.value;
              setTaskText(newText);
            }}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                e.preventDefault();
                handleChangeTextAtTask(item.id, taskText);
                setEdit(false);
              }
            }}
          />
        </div>
      </li>
    );
  }
  return (
    <li key={item.id} className={item.isCompleted ? "completed" : ""}>
      <div className="view">
        <input
          id={item.id}
          className="toggle"
          type="checkbox"
          // onClick={() => handleTaskIsCompleted(item.id)}
          onChange={() => handleTaskIsCompleted(item.id)}
          checked={item.isCompleted}
        ></input>
        <label htmlFor={item.id}>
          <span className="description">{item.text}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            setEdit((prev) => !edit);
          }}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => {
            handleDeleteTask(item.id);
          }}
        ></button>
      </div>
    </li>
  );
}

export default Task;
