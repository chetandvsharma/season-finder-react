import './SeasonDisplay.css';
import React from 'react';
const getSeason = (lat, month) => {
  console.log('lat,,', lat, month);
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonConfig = {
  winter: {
    text: 'Winter is coming',
    iconProperty: 'snowflake icon',
  },

  summer: {
    text: "Oo yeah! It's Summer slam",
    iconProperty: 'sun icon',
  },
};

export const SeasonDisplay = (params) => {
  const season = getSeason(params.latitude, new Date().getMonth());

  console.log(seasonConfig[season].iconProperty);
  return (
    <div className={`season-display ${season}`}>
      <i class={`icon-left massive ${seasonConfig[season].iconProperty}`}></i>
      <h1>{seasonConfig[season].text}</h1>
      <i class={`icon-right massive ${seasonConfig[season].iconProperty}`}></i>
    </div>
  );
};
