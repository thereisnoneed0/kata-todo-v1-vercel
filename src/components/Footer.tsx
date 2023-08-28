import TaskFilter from './TasksFilter'
import { TFooterProps } from './types/types'
export default function Footer({ clearAll, onClickSetActiveFilter, activeFilter, handleHowManyIsLeft }: TFooterProps) {
  return (
    <footer className="footer">
      <span className="todo-count">{handleHowManyIsLeft} 1 items left</span>
      <TaskFilter
        handleHowManyIsLeft={handleHowManyIsLeft}
        onClickSetActiveFilter={onClickSetActiveFilter}
        activeFilter={activeFilter}
      />
      <button className="clear-completed" onClick={clearAll}>
        Clear completed
      </button>
    </footer>
  )
}
