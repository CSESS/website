import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { TITLE } from "../../../const";

import "./indexPage.css";

import HomeLoader from "./homeLoader";
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
function shortenString(str, length) {
  if (str.length > length) {
    return str.substring(0, length - 3) + "...";
  } else {
    return str;
  }
}

class indexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      isLoading: true,
      hasError: false,
    };
  }
  componentDidMount() {
    fetch("https://csess.su.hkust.edu.hk/api/activities.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ activities: data, isLoading: false }))
      .catch((error) => this.setState({ hasError: true }));

    fetch("https://csess.su.hkust.edu.hk/api/activities.php?type=upcoming")
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ upcomingActivities: data }))
      .catch((error) => this.setState({ hasError: true }));
  }

  renderActivities() {
    const { activities, isLoading, hasError } = this.state;
    if (hasError) {
      return (
        <div>
          We have encountered an error while fetching data, please try again
          later.
        </div>
      );
    }
    if (!activities || isLoading) {
      return (
        <Fragment>
          <HomeLoader />
          <HomeLoader />
          <HomeLoader />
          <HomeLoader />
        </Fragment>
      );
    }
    if (activities.length === 0) {
      return <div>More events coming soon...</div>;
    }
    return activities.map((act, index) => {
      return (
        <Link to={`/activity/${act.aid}`} className="activity" key={index}>
          <div className="activityDetails">
            <div className="title">
              <span>{shortenString(act.event, 60)}</span>
            </div>
            <div className="date">{timeAgo(act.starttime)}</div>
          </div>
          <div className="thumb">
            <picture>
              <source
                srcSet={
                  "https://assets.csess.workers.dev/images/h_500,w_500,to_avif/" +
                  act.thumb
                }
                type="image/avif"
              />
              <source
                srcSet={
                  "https://assets.csess.workers.dev/images/h_500,w_500,to_webp/" +
                  act.thumb
                }
                type="image/webp"
              />
              <img src={act.thumb} alt={act.event} />
            </picture>
          </div>
        </Link>
      );
    });
  }

  renderUpcomingActivities() {
    const { upcomingActivities } = this.state;
    return upcomingActivities.map((act, index) => {
      return (
        <Link
          to={`/activity/${act.aid}`}
          className="activity"
          key={index}
          tabindex="0"
        >
          <div className="activityDetails">
            <div className="title">
              <span>{shortenString(act.event, 40)}</span>
            </div>
            <div className="date">{timeAgo(act.starttime)}</div>
          </div>
          <div className="thumb">
            <picture>
              <source
                srcSet={
                  "https://assets.csess.workers.dev/images/h_500,w_500,to_avif/" +
                  act.thumb
                }
                type="image/avif"
              />
              <source
                srcSet={
                  "https://assets.csess.workers.dev/images/h_500,w_500,to_webp/" +
                  act.thumb
                }
                type="image/webp"
              />
              <img src={act.thumb} alt={act.event} />
            </picture>
          </div>
        </Link>
      );
    });
  }

  renderUpcoming() {
    if (
      !this.state.upcomingActivities ||
      this.state.upcomingActivities.length === 0
    ) {
      return <Fragment />;
    } else {
      return (
        <div>
          <h1>Upcoming Activities</h1>
          <div className="activities">{this.renderUpcomingActivities()}</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <title>{`Home | ${TITLE}`}</title>
        <div className="indexPage">
          <div className="container">
            {this.renderUpcoming()}
            <div>
              <h1>Activities</h1>
              <div className="activities">{this.renderActivities()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default indexPage;
