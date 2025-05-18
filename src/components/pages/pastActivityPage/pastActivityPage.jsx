import React, { Component } from "react";
import { TITLE } from "../../../const";
import { Link } from "react-router-dom";

import Loader from "../../loader";

import "./pastActivityPage.css";
import logo from "../../../assets/logo.svg";

function getRandomNumbers() {
  return Math.random() * 1000;
}
function timeAgo(timestamp, locale = "en") {
  let value;
  const diff = (new Date().getTime() - new Date(timestamp).getTime()) / 1000;
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (years > 0) {
    value = rtf.format(0 - years, "year");
  } else if (months > 0) {
    value = rtf.format(0 - months, "month");
  } else if (days > 0) {
    value = rtf.format(0 - days, "day");
  } else if (hours > 0) {
    value = rtf.format(0 - hours, "hour");
  } else if (minutes > 0) {
    value = rtf.format(0 - minutes, "minute");
  } else {
    value = rtf.format(0 - diff, "second");
  }
  return value;
}
class pastActivityPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      actToLoad: 10,
    };
  }

  componentDidMount() {
    fetch("https://csess.su.hkust.edu.hk/api/activities.php?type=past")
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ activities: data }));
  }

  setDefaultSrc(event) {
    event.target.src = logo;
    event.target.parentNode.children[0].srcset =
      event.target.parentNode.children[1].srcset = logo;
  }

  renderActivites() {
    const activities = this.state.activities;
    if (activities && activities.length > 0) {
      let loaded = 0;
      return activities.map((activity) => {
        let random = getRandomNumbers();
        loaded++;
        if (loaded > this.state.actToLoad) {
          return null;
        }
        return (
          <Link
            key={activity.aid}
            to={`/activity/${activity.aid}`}
            className={`past-activity ${random < 50 ? "big" : ""} ${random > 800 ? "middle" : ""}`}
          >
            <div className="act-image">
              <picture>
                <source
                  srcSet={
                    "https://assets.csess.workers.dev/images/h_500,w_500,to_avif/" +
                    activity.thumb
                  }
                  type="image/avif"
                />
                <source
                  srcSet={
                    "https://assets.csess.workers.dev/images/h_500,w_500,to_webp/" +
                    activity.thumb
                  }
                  type="image/webp"
                />
                <img
                  onError={this.setDefaultSrc}
                  src={activity.thumb}
                  alt={activity.event}
                />
              </picture>
            </div>
            <div className="act-detail">
              <div className="act-name">
                <span>{activity.event}</span>
              </div>
              <div className="act-time">{timeAgo(activity.starttime)}</div>
            </div>
          </Link>
        );
      });
    } else {
      return <Loader />;
    }
  }

  render() {
    return (
      <div>
        <title>{`Past Activities | ${TITLE}`}</title>
        <div className="pastActivityPage">
          <div className="container">
            <h1 className="pageHeader">Past Activities</h1>
            <div className="past-activities">{this.renderActivites()}</div>
            {this.state.activities &&
              this.state.actToLoad < this.state.activities.length && (
                <button
                  className="load-btn"
                  onClick={() => {
                    this.setState({ actToLoad: this.state.actToLoad + 20 });
                  }}
                >
                  Load More
                </button>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default pastActivityPage;
