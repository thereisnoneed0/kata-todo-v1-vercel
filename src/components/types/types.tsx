export type TInputTypes = {
  id: string;
  isCompleted: boolean;
  text: string;
};

export type TTaskListProps = {
  taskList: TInputTypes[];
  isCompletedFlag: TStatesForCompleted;
  handleTaskIsCompleted: (id: string) => void;
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
