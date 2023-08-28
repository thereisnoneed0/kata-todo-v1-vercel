import { TTaskListProps, TInputTypes } from './types/types'
import Task from './Task'

export default function TaskList({
  taskList,
  activeFilter,
  handleTaskIsCompleted,
  handleDeleteTask,
  handleChangeTextAtTask,
}: TTaskListProps) {
  let newTaskList

  switch (activeFilter) {
    case 'Completed':
      newTaskList = [...taskList].filter((el) => el.isCompleted)
      break
    case 'Active':
      newTaskList = [...taskList].filter((el) => !el.isCompleted)
      break
    case 'All':
      newTaskList = [...taskList]
      break
  }

  console.log(newTaskList)
  return (
    <ul className="todo-list">
      {newTaskList?.map((item: TInputTypes) => {
        return (
          <Task
            item={item}
            handleTaskIsCompleted={handleTaskIsCompleted}
            handleDeleteTask={handleDeleteTask}
            handleChangeTextAtTask={handleChangeTextAtTask}
          />
        )
      })}
    </ul>
  )
}
