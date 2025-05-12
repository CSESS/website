import React, { Component } from "react";

import DocumentTitle from "react-document-title";
import { TITLE } from "../../../const";

import { Link } from "react-router-dom";

import "./notFoundPage.css";

const jokes = [
  "I would tell you a joke about UDP, but you would never get it.",
  "Waiter: Would you like coffee or tea? Programmer: Yes.",
  "Before you can understand recursion, you must first understand recursion.",
  "Whats the object-oriented way to become wealthy? Inheritance.",
  "There are 10 types of people in the world. Those who understand binary and those who have a life.",
  "Old C programmers don't die, they're just cast into void.",
  "Software developers like to solve problems. If there are no problems handily available, they will create their own problems.",
  "How do you generate a random string? Put a first year Computer Science student in Vim and ask them to save and exit.",
  "In C we had to code our own bugs. In C++ we can inherit them.",
  "There are two ways to write error-free programs; only the third one works.",
  "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.",
  "If you play a Windows CD backwards, you'll hear satanic chanting ... worse still, if you play it forwards, it installs Windows.",
  "'Knock, knock.' 'Who's there?' ... very long pause ... 'Java.'",
  "Why doesn't C++ have a garbage collector? Because there would be nothing left!",
];

class notFoundPage extends Component {
  renderJokes() {
    let index = Math.ceil(Math.random() * jokes.length);
    return <p className="jokes">{jokes[index]}</p>;
  }

  render() {
    return (
      <DocumentTitle title={`Page Not Found | ${TITLE}`}>
        <div className="notFoundPage">
          <div className="container">
            <h1 className="pageHeader">Page Not Found</h1>
            <div className="notFoundContent">
              <img src={require("../../../assets/lg2.png")} alt="lg2" />
              <div className="content">
                <div className="text">
                  <p>
                    Oops! Seems like you have entered a place that you are not
                    supposed to visit.
                  </p>{" "}
                  <p>Unfortunately, we can do nothing about it.</p>
                  <p>But at least we could tell you a joke:</p>
                  {this.renderJokes()}
                </div>
                <Link to="/">Back to Home Page</Link>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default notFoundPage;
