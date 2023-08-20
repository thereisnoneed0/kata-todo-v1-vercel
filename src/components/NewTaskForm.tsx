import { TNewTaskFormProps } from "./types/types";

export default function NewTaskForm({
  handleSetInput,
  addTask,
  inputText
}: TNewTaskFormProps) {
  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputText}
        onChange={handleSetInput}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            addTask(inputText);
            console.log("hello");
          }
        }}
      />
    </header>
  );
}
