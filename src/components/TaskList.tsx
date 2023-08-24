// import Task from "./Task";

import { TTaskListProps, TInputTypes } from "./types/types";
import Task from "./Task";

export default function TaskList({
  taskList,
  isCompletedFlag,
  handleTaskIsCompleted,
  handleDeleteTask,
  handleChangeTextAtTask
}: TTaskListProps) {
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
      {newTaskList?.map((item: TInputTypes) => {
        return (
          <Task
            item={item}
            isCompletedFlag={isCompletedFlag}
            handleTaskIsCompleted={handleTaskIsCompleted}
            handleDeleteTask={handleDeleteTask}
            handleChangeTextAtTask={handleChangeTextAtTask}
          />
        );
      })}
    </ul>
  );
}
// {
//   // массив объектов тасок

//   return (
//     <>
//       <Task
//         taskList={taskList}
//         isCompletedFlag={isCompletedFlag}
//         handleTaskIsCompleted={handleTaskIsCompleted}
//         handleDeleteTask={handleDeleteTask}
//         handleChangeTextAtTask={handleChangeTextAtTask}
//       />
//     </>
//   );
// }
