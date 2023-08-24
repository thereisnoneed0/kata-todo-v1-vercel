// import { TTaskListProps, TInputTypes } from "./types/types";
// import TaskUnique from "./TaskUnique";

// export default function Task({
//   taskList,
//   isCompletedFlag,
//   handleTaskIsCompleted,
//   handleDeleteTask,
//   handleChangeTextAtTask
// }: TTaskListProps): JSX.Element {
//   let newTaskList;

//   if (isCompletedFlag === "completed") {
//     newTaskList = [...taskList].filter((el) => el.isCompleted);
//   }
//   if (isCompletedFlag === "editing") {
//     newTaskList = [...taskList].filter((el) => !el.isCompleted);
//   }
//   if (isCompletedFlag === "") {
//     newTaskList = [...taskList];
//   }
//   console.log(newTaskList);
//   return (
//     <ul className="todo-list">
//       {newTaskList?.map((item: TInputTypes) => {
//         return (
//           <TaskUnique
//             item={item}
//             isCompletedFlag={isCompletedFlag}
//             handleTaskIsCompleted={handleTaskIsCompleted}
//             handleDeleteTask={handleDeleteTask}
//             handleChangeTextAtTask={handleChangeTextAtTask}
//           />
//         );
//       })}
//     </ul>
//   );
// }
