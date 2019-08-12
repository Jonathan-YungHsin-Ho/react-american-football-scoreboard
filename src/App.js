//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import Buttons from './Buttons';
import MoreButtons from './MoreButtons';
import ScoreBoardTop from './ScoreBoardTop';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const initVal = 1;

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const [down, setDown] = useState(initVal);
  const [quarter, setQuarter] = useState(initVal);

  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(20);

  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoardTop homeScore={homeScore} awayScore={awayScore} />
        <BottomRow quarter={quarter} down={down} toGo={toGo} ballOn={ballOn} />
      </section>
      <Buttons
        homeScore={homeScore}
        setHomeScore={setHomeScore}
        awayScore={awayScore}
        setAwayScore={setAwayScore}
      />
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
