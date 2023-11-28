import React from "react";
import "./Notifications.css";
import close from "../assets/close-icon.png";
import getLatestNotification from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

function Notifications({ displayDrawer = false }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
          <button
            style={{
              position: "absolute",
              top: "-16px",
              right: "-16px",
              transform: "scale(.4)",
              cursor: "pointer",
            }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img src={close} alt="close.png" />
          </button>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
};

export default Notifications;
