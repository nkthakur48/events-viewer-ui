import React from "react";
import "./Tabs.scss";
import { events_name } from "../../constants";

const Tabs = ({ openedTabs, activeTab }) => {
  const getTab = tab => {
    const tabClass = activeTab === tab ? "tab active" : "tab";
    return (
      <div className={tabClass} key={tab}>
        <div className="event-type">{events_name[tab]}</div>
        <div className="close-btn">X</div>
      </div>
    );
  };
  return (
    <div className="event-tabs-holder">
      {openedTabs.map(tab => {
        return getTab(tab);
      })}
    </div>

    //   <div className="tab active">
    //     <div className="event-type">Events Type 1</div>
    //     <div className="close-btn">X</div>
    //   </div>
    //   <div className="tab">
    //     <div className="event-type">Events Type 2</div>
    //     <div className="close-btn">X</div>
    //   </div>
    //   <div className="tab">
    //     <div className="event-type">Events Type 3</div>
    //     <div className="close-btn">X</div>
    //   </div>
    //   <div className="tab">
    //     <div className="event-type">Events Type 4</div>
    //     <div className="close-btn">X</div>
    //   </div>
    //   <div className="tab">
    //     <div className="event-type">Events Type 5</div>
    //     <div className="close-btn">X</div>
    //   </div>
    //   <div className="tab">
    //     <div className="event-type">Events Type 6</div>
    //     <div className="close-btn">X</div>
    //   </div>
    //   <div className="tab">
    //     <div className="event-type">Events Type 7</div>
    //     <div className="close-btn">X</div>
    //   </div>
    // </div>
  );
};

export default Tabs;
