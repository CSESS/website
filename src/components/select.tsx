import React, { Component } from "react";
import "./select.css";
import down from "../assets/down.svg";
import { useState, SyntheticEvent } from "react";

interface Props {
  defaultValue: String;
  options: [];
  onSelect: (e: SyntheticEvent<HTMLDivElement>) => {};
}
function Select(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(props.defaultValue);
  function handleOptionSelect(selected) {
    setSelected(selected);
    setIsOpen(false);
    props.onSelect(selected);
  }
  function renderOptions() {
    const options = props.options;
    if (options && options.length > 0) {
      return options.map((option) => {
        return (
          <button
            className="select-option"
            key={option}
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
