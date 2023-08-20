import { TFooterProps } from "./types/types";
export default function TaskFilters({
  toEdit,
  toComplete,
  toAll
}: TFooterProps) {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={toAll}>
          All
        </button>
      </li>
      <li>
        <button onClick={toEdit}>Active</button>
      </li>
      <li>
        <button onClick={toComplete}>Completed</button>
      </li>
    </ul>
  );
}
