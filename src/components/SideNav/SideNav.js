import React from "react";
import "./SideNav.scss";
import { events_name } from "../../constants";

const SideNav = ({ events, click, activeTabs }) => {
  const getNavItem = event => {
    let navItemClass = "";
    if (activeTabs.indexOf(event) !== -1) {
      navItemClass = "active";
    }
    return (
      <li
        data-event={event}
        key={event}
        onClick={click}
        className={navItemClass}
      >
        {events_name[event]}
      </li>
    );
  };
  return (
    <div className="sidenav-container">
      <ul>
        {Object.keys(events).map(event => {
          return getNavItem(event);
        })}
      </ul>
    </div>
  );
};

export default SideNav;
