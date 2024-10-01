import React, { useState } from "react";

function CustomRangeInput({value}) {
  const [selected, setSelected] = useState(value);
  return (
    <div className={"customInputOuter d-flex align-items-center " + (selected ? " justify-content-end bgSuccess" : " justify-content-start bgSecondary")} onClick={() => setSelected(!selected)}>
      <div className={"rangeBox" + (selected ? " bgSecondary": " bg-dark")}></div>
    </div>
  );
}

export default CustomRangeInput;
