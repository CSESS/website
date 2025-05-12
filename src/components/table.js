import React, { Component } from "react";
import PropTypes from "prop-types";

import "./table.css";

import Loader from "./loader";

class Table extends Component {
  static propTypes = {
    keys: PropTypes.array.isRequired,
    datas: PropTypes.array.isRequired,
  };

  displayKeys() {
    return (
      <div className="table-header table-row">
        {this.props.keys.map((key) => {
          return (
            <div className="table-header-item table-item" key={key.id}>
              {key.display}
            </div>
          );
        })}
      </div>
    );
  }

  displayItems() {
    return this.props.datas.map((row, index) => {
      return (
        <div
          key={"key" + index}
          className={`table-row ${index % 2 === 0 ? "table-row-even" : ""}`}
        >
          {this.props.keys.map((key) => {
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

  render() {
    if (this.props.datas && this.props.datas.length > 0) {
      return (
        <div className="table">
          {this.displayKeys()}
          {this.displayItems()}
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

export default Table;
