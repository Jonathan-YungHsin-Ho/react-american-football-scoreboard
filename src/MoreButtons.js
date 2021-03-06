import React from 'react';
import './App.css';

const MoreButtons = props => {
  const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const styles = {
    margin: '1rem',
    borderRadius: 4,
  };

  const newGame = () => {
    props.setQuarter(1);
    props.setDown(1);
    props.setHomeScore(0);
    props.setAwayScore(0);
    props.setToGo(10);
    props.setBallOn(20);
    props.setTimer(900);
    props.setTimerActive(false);
  };

  const incrementer = (input, method, type) => {
    input === 'prev' && method(type - 1 === 0 ? 4 : type - 1);
    input === 'next' && method(type + 1 === 5 ? 1 : type + 1);
  };

  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  return (
    <section className="more_buttons" style={wrapper}>
      <div>
        <button style={styles} onClick={() => newGame()}>
          New Game
        </button>
        <button
          style={styles}
          onClick={() => {
            incrementer('prev', props.setQuarter, props.quarter);
          }}>
          Previous Quarter
        </button>
        <button
          style={styles}
          onClick={() => {
            incrementer('next', props.setQuarter, props.quarter);
          }}>
          Next Quarter
        </button>
      </div>
      <div>
        <button style={styles} onClick={() => props.setDown(1)}>
          1st Down
        </button>
        <button
          style={styles}
          onClick={() => incrementer('prev', props.setDown, props.down)}>
          Previous Down
        </button>
        <button
          style={styles}
          onClick={() => incrementer('next', props.setDown, props.down)}>
          Next Down
        </button>
      </div>
      <div>
        <button
          style={styles}
          onClick={() =>
            props.setToGo(
              getRandomInt(1, 15 < props.ballOn ? 15 : props.ballOn),
            )
          }>
          Randomize Yards Needed
        </button>
        <button
          style={styles}
          onClick={() => props.setBallOn(getRandomInt(1, 50))}>
          Randomize Field Position
        </button>
      </div>
    </section>
  );
};

export default MoreButtons;
