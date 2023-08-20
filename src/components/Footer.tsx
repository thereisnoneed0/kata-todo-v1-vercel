import TaskFilter from "./TasksFilter";
import { TFooterProps } from "./types/types";
export default function Footer({
  clearAll,
  toComplete,
  toEdit,
  toAll,
  handleHowManyIsLeft
}: TFooterProps) {
  return (
    <footer className="footer">
      <span className="todo-count">{handleHowManyIsLeft} 1 items left</span>
      <TaskFilter
        toComplete={toComplete}
        toEdit={toEdit}
        toAll={toAll}
        handleHowManyIsLeft={handleHowManyIsLeft}
      />
      <button className="clear-completed" onClick={clearAll}>
        Clear completed
      </button>
    </footer>
  );
}
