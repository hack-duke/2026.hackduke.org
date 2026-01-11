import PropTypes from "prop-types";
import React from "react";

const CountdownRenderer = ({ days, hours, minutes, seconds, deadlineType }) => {
  return (
    <div className="hero-countdown">
      <p>
        {deadlineType} close in {days} days {hours} hrs {minutes} min{" "}
        {seconds} sec
      </p>
    </div>
  );
};

// this part was required by the linter?
CountdownRenderer.propTypes = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  deadlineType: PropTypes.string.isRequired,
};

export default CountdownRenderer;
