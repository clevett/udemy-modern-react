import React from 'react'

const seasonConfig = {
  summer: {
    text: "Its sunny summer",
    iconName: "sun",
  },
  winter: {
    text: "Winter has come.",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? "winter" : "summer";
  }
}

const SeasonDisplay = props => {
  const currentSeason = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[currentSeason];

  return (
    <div>
      <i className={`massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`}></i>
    </div>
  );
}

export default SeasonDisplay