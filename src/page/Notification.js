import React from "react";
import Navigation from "../components/Navigation";
import NotifCard from "../components/NotifCard";

export default function Notification() {
  return (
    <div>
      <Navigation />
      <div className="notification-group mt-20">
        <NotifCard />
        <NotifCard />
        <NotifCard />
        <NotifCard />
      </div>
    </div>
  );
}
