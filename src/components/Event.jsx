import React, { Component } from "react";
import EventCards from "./events/EventCards";
import EventBanner from "./events/EventBanner";

function Events() {
  return (
    <div>
      <EventBanner />
      <EventCards />
    </div>
  );
}

export default Events;
