import { useContext } from "react";
import { RandomContext } from "./randomProvider";

export function ChildLesson({ name }) {

  const { highlight } = useContext(RandomContext)

  const isHighlighted = name === highlight;

  return (
    <div className={`rounded-md bg-white px-3 py-2 text-sm ${isHighlighted ? 'font-bold ring-2 ring-stone-900' : ''}`}>
      {name}
      {isHighlighted && <span className="ml-2 text-xs text-amber-700">selected</span>}
    </div>
  );
}