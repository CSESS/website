import React from "react";
import "./select.css";
import down from "../assets/down.svg";
import { useState } from "react";

interface Props {
  defaultValue: String;
  options: String[];
  onSelect: (e: String) => {};
}
function Select(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(props.defaultValue);
  function handleOptionSelect(selected: String) {
    setSelected(selected);
    setIsOpen(false);
    props.onSelect(selected);
  }
  function renderOptions() {
    const options = props.options;
    if (options && options.length > 0) {
      return options.map((option, index) => {
        return (
          <button
            className="select-option"
            key={index}
            onClick={(_) => {
              handleOptionSelect(option);
            }}
          >
            {option}
          </button>
        );
      });
    } else {
      return null;
    }
  }

  function toggleSelect() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`select ${isOpen ? "active" : ""}`}>
      <button className="select-btn" onClick={toggleSelect}>
        <span>{selected}</span>
        <img src={down} alt="V" />
      </button>
      <div className="select-options">{renderOptions()}</div>
    </div>
  );
}

export default Select;
