//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import Buttons from './Buttons';
import MoreButtons from './MoreButtons';
import ScoreBoardTop from './ScoreBoardTop';
import TimerButtons from './TimerButtons';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const initScore = 0;
  const initVal = 1;
  const initToGo = 10;
  const initBallOn = 20;

  const [homeScore, setHomeScore] = useState(initScore);
  const [awayScore, setAwayScore] = useState(initScore);

  const [down, setDown] = useState(initVal);
  const [quarter, setQuarter] = useState(initVal);

  const [toGo, setToGo] = useState(initToGo);
  const [ballOn, setBallOn] = useState(initBallOn);

  const [timer, setTimer] = useState(900);
  const [timerActive, setTimerActive] = useState(false);

  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoardTop
          homeScore={homeScore}
          awayScore={awayScore}
          timer={timer}
          setTimer={setTimer}
        />
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
        setTimer={setTimer}
        setTimerActive={setTimerActive}
      />
      <TimerButtons
        timer={timer}
        setTimer={setTimer}
        timerActive={timerActive}
        setTimerActive={setTimerActive}
      />
    </div>
  );
}

export default App;
