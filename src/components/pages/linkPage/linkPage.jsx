import React, { Component } from "react";
import { TITLE } from "../../../const";

import "./linkPage.css";

const Links = {
  cs: [
    {
      displayName: "CSE UG Intranet",
      href: "https://cse.hkust.edu.hk/ug/hkust_only/",
    },
    {
      displayName: "ZINC",
      href: "https://zinc.cse.ust.hk/",
    },
    {
      displayName: "CSE Course Assignment Submission System",
      href: "https://course.cse.ust.hk/cass/student/",
    },
    {
      displayName: "CS System",
      href: "https://cssystem.cse.ust.hk/",
    },
  ],
  inside: [
    {
      displayName: "HKUST",
      href: "https://www.hkust.edu.hk",
    },
    {
      displayName: "Department of Computer Science and Engineering",
      href: "https://cse.hkust.edu.hk/",
    },
    {
      displayName: "HOTLINKS for STUDENT",
      href: "https://itso.hkust.edu.hk/student-hotlinks/",
    },
    {
      displayName: "Canvas",
      href: "https://canvas.ust.hk",
    },
    {
      displayName: "Path Advisor",
      href: "https://pathadvisor.ust.hk/",
    },
    {
      displayName: "School of Engineering",
      href: "https://seng.hkust.edu.hk/",
    },
    {
      displayName: "The Computer Science and Engineering Alumni Association",
      href: "https://cse.hkust.edu.hk/cseaa/main.html",
    },
  ],
  outside: [
    {
      displayName: "Hong Kong Computer Society",
      href: "http://www.hkcs.org.hk/",
    },
    {
      displayName: "Computer Science Association, Engineering Society, HKU",
      href: "https://www.instagram.com/hku.csa/",
    },
    {
      displayName: "The Computer Science Society, CUHK",
      href: "https://appsrv.cse.cuhk.edu.hk/~cscs/index.php",
    },
    {
      displayName: "Department of Computing Student Society, PolyU",
      href: "https://www.instagram.com/polyu_31scs_serein/",
    },

    {
      displayName: "Computer Science Society, HKBU",
      href: "https://www.instagram.com/hkbu_css/",
    },
  ],
};

class linkPage extends Component {
  renderLinks(name) {
    return Links[name].map((item, index) => {
      return (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="links-item"
        >
          <span>{item.displayName}</span>
        </a>
      );
    });
  }
  render() {
    return (
      <div>
        <title>{`Links | ${TITLE}`}</title>
        <div className="linkPage">
          <div className="container">
            <h1 className="pageHeader">Links</h1>
            <div>
              <h2 className="highlighted">CS Student Portal</h2>
              <div className="links">{this.renderLinks("cs")}</div>
            </div>
            <div>
              <h2 className="highlighted">Inside HKUST</h2>
              <div className="links">{this.renderLinks("inside")}</div>
            </div>
            <div>
              <h2 className="highlighted">Outside HKUST</h2>
              <div className="links">{this.renderLinks("outside")}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default linkPage;
