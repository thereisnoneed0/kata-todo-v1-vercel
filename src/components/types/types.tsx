export type TInputTypes = {
  id: string
  isCompleted: boolean
  text: string
  date: Date
}

export type TTaskListProps = {
  taskList: TInputTypes[]
  activeFilter: string
  handleTaskIsCompleted: (id: string) => void
  handleDeleteTask: (id: string) => void
  handleChangeTextAtTask: (id: string, newText: string) => void
}
export type TTaskUniqueProps = Omit<TTaskListProps, 'taskList' | 'activeFilter'> & {
  item: TInputTypes
}

export type TNewTaskFormProps = {
  handleSetInput: (e: React.ChangeEvent<HTMLInputElement | undefined>) => void
  addTask: (s: string) => void
  inputText: string
}

export type TFooterProps = {
  clearAll?: () => void
  handleHowManyIsLeft: number
  onClickSetActiveFilter: (s: string) => void
  activeFilter: string
}

export type TStatesForCompleted = 'completed' | 'editing' | ''
export type TBtnIsSelectedProps = 'SelectedAll' | 'SelectedActive' | 'SelectedCompleted' | ''
