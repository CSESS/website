import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink, Link, useLocation } from "react-router-dom";

import hamburger from "../assets/hambuger.svg";
import clear from "../assets/clear.svg";

const listItems = [
  {
    path: "/",
    displayName: "Home",
  },
  {
    path: "/about/",
    displayName: "About Us",
    child: [
      {
        path: "/about/faq/",
        displayName: "FAQ 常見問題",
      },
      {
        path: "/about/",
        displayName: "History",
      },
      {
        path: "/about/exco/",
        displayName: "Ex-co",
      },
      {
        path: "/about/document/",
        displayName: "Document",
      },
      {
        path: "/about/honorary-member/",
        displayName: "Honorary Members",
      },
    ],
  },
  {
    path: "/activity/",
    displayName: "Activities",
    child: [
      {
        path: "/activity/",
        displayName: "Current Session",
      },
      {
        path: "/activity/past/",
        displayName: "Past Session",
      },
    ],
  },
  {
    path: "/welfare/",
    displayName: "Welfare",
    child: [
      {
        path: "/welfare/",
        displayName: "Society Product",
      },
      {
        path: "/welfare/welfare-product/",
        displayName: "Welfare Product",
      },
      {
        path: "/welfare/shops/",
        displayName: "Shop Discount",
      },
      {
        path: "/welfare/publications/",
        displayName: "Publication",
      },
    ],
  },
  {
    path: "/sports/",
    displayName: "Sports",
  },
  {
    path: "/link/",
    displayName: "Links",
  },
];

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [tabActive, setTabActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState("-1");
  const location = useLocation();
  function handleResize(event) {
    setTabActive(false);
    if (event.target.outerWidth < 650) {
      setIsMobile(true);
    } else {
      setIsMobile(true);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setIsMobile(window.innerWidth < 650);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setTabActive(false);
    setActiveIndex("-1");
  }, [location]);

  function renderNavItem() {
    return listItems.map((item, index) => {
      return (
        <div
          key={index}
          className={`nav_group ${activeIndex === "" + index ? "active" : ""}`}
        >
          <NavLink
            to={item.path}
            className="nav_item"
            data-id={index}
            onClick={handleParentClick}
          >
            {item.displayName}
          </NavLink>
          <ul className="nav_child">
            {item.child ? renderChildren(item) : ""}
          </ul>
        </div>
      );
    });
  }

  function handleHamburgerClick(_) {
    if (isMobile) {
      setTabActive(!tabActive);
      setActiveIndex("-1");
    }
  }
  function handleParentClick(event) {
    if (isMobile) {
      if (
        event.target.dataset.id === activeIndex ||
        listItems[event.target.dataset.id].child.length === 0
      ) {
      } else {
        event.preventDefault();
        setActiveIndex(event.target.dataset.id);
      }
    }
  }

  function renderChildren(items) {
    return items.child.map((item, index) => {
      return (
        <Link
          to={item.path}
          className="nav_child_item"
          key={index}
          data-id={index}
        >
          {item.displayName}
        </Link>
      );
    });
  }
  return (
    <div className={`navbar ${tabActive && isMobile ? "active" : ""}`}>
      <div
        className={`hamburger ${tabActive ? "active" : ""}`}
        onClick={handleHamburgerClick}
      >
        <img src={tabActive ? clear : hamburger} alt="-" />
      </div>
      <nav className="nav">{renderNavItem()}</nav>
    </div>
  );
}

export default NavBar;
