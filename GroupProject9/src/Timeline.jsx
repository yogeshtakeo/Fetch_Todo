import React from "react";
import { Timeline } from "flowbite-react";

const Timeline = ({ children }) => {
  return <ul className="timeline">{children}</ul>;
};

const TimelineItem = ({ time, title, body, children, button }) => {
  return (
    <li className="timeline-item">
      <div className="timeline-point"></div>
      <div className="timeline-content">
        <div className="text-gray-500 text-xs">{time}</div>
        <div className="font-bold">{title}</div>
        <div className="text-sm">{body || children}</div>
        {button && <div className="mt-2">{button}</div>}
      </div>
    </li>
  );
};

Timeline.Item = TimelineItem;

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Timeline;
