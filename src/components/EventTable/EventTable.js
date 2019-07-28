import React from "react";
import "./EventTable.scss";

const EventTable = ({ events }) => {
  return (
    <div className="events-table-container">
      <ul>
        {events &&
          events.map(event => {
            return (
              <li className="event-row" key={event._id}>
                <div className="timestamp">
                  <span className="label">timestamp</span>
                  <span>{event.ts}</span>
                </div>
                <div className="raw">
                  <span className="label">_raw</span>
                  <span>{event._raw}</span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default EventTable;
