import React from "react";
import ListOptionSelects from "./ListOptionSelects";
export default function CheckBox({ name, value, tick, onCheck }) {
  const test = () => {
    if (tick) {
      return <ListOptionSelects />;
    }
  };
  return (
    <div>
      <label>
        <input
          name={name}
          type="checkbox"
          value={value}
          checked={tick || false}
          onChange={onCheck}
        />
        {value}
      </label>
      {test()}
    </div>
  );
}
