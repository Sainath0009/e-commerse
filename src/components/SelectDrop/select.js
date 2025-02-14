import React from "react";
import "../SelectDrop/select.css";

const Select = () => {
  return (
    <div className="dropdownMenu">
      <ul>
        <li>Fruits</li>
        <li>Vegetables</li>
        <li>Dairy</li>
        <li>Grains</li>
        <li>Herbs</li>
      </ul>
    </div>
  );
};

export default Select;
