import React from 'react';
import './App.css';

const Buttons = props => {
  const handleScore = (team, points) => {
    team === 'home' && props.setHomeScore(props.homeScore + points);
    team === 'away' && props.setAwayScore(props.awayScore + points);
  };

  return (
    <section className="buttons">
      <div className="homeButtons">
        <button
          className="homeButtons__touchdown"
          // onClick={() => setHomeScore(homeScore + 7)}>
          onClick={() => handleScore('home', 7)}>
          Home Touchdown
        </button>
        <button
          className="homeButtons__fieldGoal"
          // onClick={() => setHomeScore(homeScore + 3)}>
          onClick={() => handleScore('home', 3)}>
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          className="awayButtons__touchdown"
          // onClick={() => setAwayScore(awayScore + 7)}>
          onClick={() => handleScore('away', 7)}>
          Away Touchdown
        </button>
        <button
          className="awayButtons__fieldGoal"
          // onClick={() => setAwayScore(awayScore + 3)}>
          onClick={() => handleScore('away', 3)}>
          Away Field Goal
        </button>
      </div>
    </section>
  );
};

export default Buttons;
