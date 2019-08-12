//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import MoreButtons from './MoreButtons';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const initVal = 1;

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const [down, setDown] = useState(initVal);
  const [quarter, setQuarter] = useState(initVal);

  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(20);

  const handleScore = (team, points) => {
    team === 'home' && setHomeScore(homeScore + points);
    team === 'away' && setAwayScore(awayScore + points);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} down={down} toGo={toGo} ballOn={ballOn} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
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
      <MoreButtons
        quarter={quarter}
        setQuarter={setQuarter}
        down={down}
        setDown={setDown}
        homeScore={homeScore}
        setHomeScore={setHomeScore}
        awayScore={awayScore}
        setAwayScore={setAwayScore}
        toGo={toGo}
        setToGo={setToGo}
        ballOn={ballOn}
        setBallOn={setBallOn}
      />
    </div>
  );
}

export default App;
