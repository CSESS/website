import React, { Component } from "react";

import { TITLE, SESSION } from "../../../const";

import Loader from "../../loader";
import Select from "../../select";

import "./excoPage.css";

class excoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: SESSION,
      sessionList: [SESSION],
      excos: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://csess.su.hkust.edu.hk/api/excos.php?session=${this.state.session}`,
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ excos: data }));

    fetch("https://csess.su.hkust.edu.hk/api/sessions.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ sessionList: data }));
  }

  renderExcos() {
    let excos = this.state.excos;
    if (excos && excos.length > 0) {
      return (
        <div className="excos">
          {excos.map((exco) => {
            return (
              <div className="exco" key={exco.sequence}>
                <picture>
                  <source
                    srcset={
                      "https://assets.csess.workers.dev/images/h_500,w_500,to_avif/" +
                      `https://csess.su.hkust.edu.hk/home/images/exco/${exco.session}/${exco.nickname}.jpg`
                    }
                    type="image/avif"
                  />
                  <source
                    srcset={
                      "https://assets.csess.workers.dev/images/h_500,w_500,to_webp/" +
                      `https://csess.su.hkust.edu.hk/home/images/exco/${exco.session}/${exco.nickname}.jpg`
                    }
                    type="image/webp"
                  />
                  <img
                    className="exco-img"
                    src={`https://csess.su.hkust.edu.hk/home/images/exco/${exco.session}/${exco.nickname}.jpg`}
                    alt={exco.name}
                  />
                </picture>

                <div className="exco-desc">
                  <div className="exco-detail exco-post">{exco.position}</div>
                  <div className="exco-detail exco-name">{exco.name}</div>
                  <div className="exco-detail exco-nick">{exco.nickname}</div>
                  {exco.major && (
                    <div className="exco-detail exco-major">
                      Major:{" "}
                      {`${exco.major}${
                        exco.session === SESSION ? "/" + exco.year : ""
                      }`}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <Loader />;
    }
  }

  handleSelectChange(select) {
    this.setState({ session: select, excos: [] });

    fetch(`https://csess.su.hkust.edu.hk/api/excos.php?session=${select}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ excos: data }));
  }

  render() {
    return (
      <div>
        <title>{`Excos | ${TITLE}`}</title>
        <div className="excoPage">
          <div className="container">
            <h1 className="pageHeader">Excos</h1>
            <Select
              defaultValue={this.state.session}
              options={this.state.sessionList}
              onSelect={this.handleSelectChange.bind(this)}
            />
            <h2>Session {this.state.session}</h2>
            {this.renderExcos()}
          </div>
        </div>
      </div>
    );
  }
}

export default excoPage;
