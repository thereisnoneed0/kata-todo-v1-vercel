import { useState } from "react";
import { TBtnIsSelectedProps, TFooterProps } from "./types/types";
export default function TaskFilters({
  activeFilter,
  onClickSetActiveFilter
}: TFooterProps) {
  const [btnIsSelected, setBtnIsSelected] = useState<TBtnIsSelectedProps>("");
  const arrayOfNamesForBtns = ["All", "Active", "Completed"];
  return (
    <ul className="filters">
      {arrayOfNamesForBtns.map((btn) => {
        return (
          <li>
            <button
              className={activeFilter === btn ? "selected" : ""}
              onClick={() => onClickSetActiveFilter(btn)}
            >
              {btn}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
