import React, { useEffect } from "react";
import { TITLE } from "../../../const";

import "./aboutPage.css";
import fb from "../../../assets/fb.svg";
import ig from "../../../assets/ig.svg";
import yt from "../../../assets/yt.svg";
import medium from "../../../assets/medium.svg";

export default function (props) {
  useEffect(() => {
    document.title = `About Us | ${TITLE}`;
  }, []);

  return (
    <div className="historyPage">
      <div className="container">
        <h1 className="pageHeader">About Us</h1>
        <div className="header-image">
          <img
            src="https://csess.su.hkust.edu.hk/home/images/history.jpg"
            alt="CSESS"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="highlighted">History</h2>
          <p>
            The Computer Science and Engineering Students' Society, Hong Kong
            University of Science and Technology Students' Union (CSESS,
            HKUSTSU, or 香港科技大學學生會計算機科學及工程學系學生會) is
            affiliated to the Students' Union of Hong Kong University of Science
            and Technology. CSESS, HKUSTSU was established in 1991, which was
            one of the earliest students' societies founded in HKUST. The
            society was called "The Computer Science Students' Society, HKUSTSU"
            and changed on 31st March, 2010. It is because the official name of
            Department was changed from the "Department of Computer Science"
            (計算機科學系) to the "Department of Computer Science and
            Engineering" (計算機科學及工程學系) with effect from 2 May 2006 in
            recognition of the comprehensiveness of our educational programs,
            which are designed to educate professional engineers with expertise
            in both computer science and engineering.
          </p>
          <p>
            The objectives of society shall be to cultivate a sense of belonging
            within the Department and serve as a communication channel between
            its members and other interest groups within the university. Besides
            communicating with internal parties, CSESS, HKUSTSU also associates
            with other organizations outside the University which helps to
            promote interests of its members in cultural, intellectual, social
            and sports activities.
          </p>
        </div>
        <div>
          <h2 className="highlighted">Contact Us</h2>
          <div className="contact-info">
            <h3>Mailbox</h3>
            <div>
              Mailbox #3, Student Centre, HKUST, Clear Water Bay, Kowloon, Hong
              Kong
            </div>
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <div>
              <a href="mailto:su_csess@connect.ust.hk">
                su_csess@connect.ust.hk
              </a>
            </div>
          </div>
          <div className="contact-info">
            <h3>Social Media</h3>
            <div className="social-media">
              <a
                href="https://www.facebook.com/csess.hkustsu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/csess.hkustsu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ig} alt="Instagram" />
              </a>
              <a
                href="https://www.youtube.com/@CSESSHKUSTSU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={yt} alt="Youtube" />
              </a>
              <a
                href="https://ustcsess.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={medium} alt="Medium" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
