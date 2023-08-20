import Task from "./Task";
import { TTaskListProps } from "./types/types";

export default function TaskList({
  taskList,
  isCompletedFlag,
  handleTaskIsCompleted
}: TTaskListProps) {
  // массив объектов тасок

  return (
    <>
      <Task
        taskList={taskList}
        isCompletedFlag={isCompletedFlag}
        handleTaskIsCompleted={handleTaskIsCompleted}
      />
    </>
  );
}
