import { useState } from "react";
import { TBtnIsSelectedProps, TFooterProps } from "./types/types";
export default function TaskFilters({
  toEdit,
  toComplete,
  toAll
}: TFooterProps) {
  const [btnIsSelected, setBtnIsSelected] = useState<TBtnIsSelectedProps>("");
  return (
    <ul className="filters">
      <li>
        <button
          className={btnIsSelected === "SelectedAll" ? "selected" : ""}
          onClick={() => {
            setBtnIsSelected("SelectedAll");
            toAll();
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={btnIsSelected === "SelectedActive" ? "selected" : ""}
          onClick={() => {
            setBtnIsSelected("SelectedActive");

            toEdit();
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={btnIsSelected === "SelectedCompleted" ? "selected" : ""}
          onClick={() => {
            setBtnIsSelected("SelectedCompleted");
            toComplete();
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}
