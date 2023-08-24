export type TInputTypes = {
  id: string;
  isCompleted: boolean;
  text: string;
  date: Date;
};

export type TTaskListProps = {
  taskList: TInputTypes[];
  isCompletedFlag: TStatesForCompleted;
  handleTaskIsCompleted: (id: string) => void;
  handleDeleteTask: (id: string) => void;
  handleChangeTextAtTask: (id: string, newText: string) => void;
};
export type TTaskUniqueProps = Omit<TTaskListProps, "taskList"> & {
  item: TInputTypes;
};

export type TNewTaskFormProps = {
  handleSetInput: (e: React.ChangeEvent<HTMLInputElement | undefined>) => void;
  addTask: (s: string) => void;
  inputText: string;
};

export type TFooterProps = {
  clearAll?: () => void;
  toComplete: () => void;
  toEdit: () => void;
  toAll: () => void;
  handleHowManyIsLeft: number;
};

export type TStatesForCompleted = "completed" | "editing" | "";
export type TBtnIsSelectedProps =
  | "SelectedAll"
  | "SelectedActive"
  | "SelectedCompleted"
  | "";
