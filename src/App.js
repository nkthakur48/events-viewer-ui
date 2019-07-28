import React, { Component } from "react";
import "./App.scss";
import SideNav from "./components/SideNav/SideNav";
import Tabs from "./components/Tabs/Tabs";
import EventTable from "./components/EventTable/EventTable";
import { events } from "./constants";

class App extends Component {
  state = {
    active_tab: "",
    opened_tabs: []
  };
  sideNavClicked = event => {
    const eventId = event.target.dataset.event;
    this.setState({ active_tab: eventId });
    this.setState(prevState => {
      const openedTabs = [...prevState.opened_tabs, eventId];
      return { opened_tabs: openedTabs };
    });
  };
  tabViewHandler = event => {
    const eventId = event.target.closest(".tab").dataset.eventType;
    this.setState({ active_tab: eventId });
  };
  tabCloseHandler = event => {
    const eventId = event.target.closest(".tab").dataset.eventType;
    this.setState(prevState => {
      const openedTabs =
        prevState.opened_tabs.filter(tab => tab !== eventId) || [];
      return { opened_tabs: openedTabs };
    });
  };
  render() {
    return (
      <div className="App">
        <div className="events-left-pane">
          <h3 className="events-viwer-title">Events Viewer</h3>
          <SideNav
            events={events}
            click={this.sideNavClicked}
            activeTabs={this.state.opened_tabs}
          />
          <nav />
        </div>
        <div className="events-right-pane">
          <Tabs
            openedTabs={this.state.opened_tabs}
            activeTab={this.state.active_tab}
            viewHandler={this.tabViewHandler}
            closeHandler={this.tabCloseHandler}
          />
          {this.state.active_tab ? (
            <EventTable events={events[this.state.active_tab]} />
          ) : (
            <h3 style={{ textAlign: "center" }}>
              Select an Event Type to continue
            </h3>
          )}
        </div>
      </div>
    );
  }
}

export default App;
