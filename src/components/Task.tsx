import { TTaskListProps } from "./types/types";

export default function Task({
  taskList,
  isCompletedFlag,
  handleTaskIsCompleted
}: TTaskListProps): JSX.Element {
  let newTaskList;

  if (isCompletedFlag === "completed") {
    newTaskList = [...taskList].filter((el) => el.isCompleted);
  }
  if (isCompletedFlag === "editing") {
    newTaskList = [...taskList].filter((el) => !el.isCompleted);
  }
  if (isCompletedFlag === "") {
    newTaskList = [...taskList];
  }
  console.log(newTaskList);
  return (
    <ul className="todo-list">
      {newTaskList?.map((item) => {
        return (
          <li key={item.id}>
            <div className="view">
              <input
                id={item.id}
                className="toggle"
                type="checkbox"
                onClick={() => handleTaskIsCompleted(item.id)}
              ></input>
              <label htmlFor={item.id}>
                <span className="description">{item.text}</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
