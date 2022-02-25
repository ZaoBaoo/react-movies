import React, { useState } from "react";

const RadioBtn = (props) => {
  const { setFilter } = props;

  const [type, setType] = useState("");

  const handleRadio = (e) => {
    setType(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <form className="margin-bottom" action="!#">
      {/* Btn 1 */}
      <label className="margin-right">
        <input
          name="group1"
          type="radio"
          value=""
          onChange={handleRadio}
          checked={type === ""}
        />
        <span>All</span>
      </label>
      {/* Btn 2 */}
      <label className="margin-right">
        <input
          name="group1"
          type="radio"
          value="movie"
          onChange={handleRadio}
          checked={type === "movie"}
        />
        <span>Films</span>
      </label>
      {/* Btn 3 */}
      <label className="margin-right">
        <input
          name="group1"
          type="radio"
          value="series"
          onChange={handleRadio}
          checked={type === "series"}
        />
        <span>Series</span>
      </label>
    </form>
  );
};

export default RadioBtn;
