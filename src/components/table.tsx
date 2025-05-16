import React, { Component } from "react";
import PropTypes from "prop-types";

import "./table.css";

import Loader from "./loader";


interface Props {
  keys: {
    id: string;
    display: string;
  }[]
  data: []
}

function Table(props: Props) {
  function displayKeys() {
    return (
      <div className="table-header table-row">
        {props.keys.map((key) => {
          return (
            <div className="table-header-item table-item" key={key.id}>
              {key.display}
            </div>
          );
        })}
      </div>
    );
  }
  function displayItems() {
    return props.data.map((row, index) => {
      return (
        <div
          key={"key" + index}
          className={`table-row ${index % 2 === 0 ? "table-row-even" : ""}`}
        >
          {props.keys.map((key) => {
            return (
              <div className="table-item" key={key.id + row[key.id]}>
                {row[key.id]}
              </div>
            );
          })}
        </div>
      );
    });
  }

  if (props.data && props.data.length > 0) {
    return (
      <div className="table">
        {displayKeys()}
        {displayItems()}
      </div>
    );
  } else {
    return <Loader />;
  }
}



export default Table;
