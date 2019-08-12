import React, { useEffect } from 'react';
import './App.css';

const TimerButtons = props => {
  const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const styles = {
    margin: '1rem',
    borderRadius: 4,
  };

  const toggle = () => props.setTimerActive(!props.timerActive);

  const reset = () => {
    props.setTimer(900);
    props.setTimerActive(false);
  };

  useEffect(() => {
    let counter = null;
    if (props.timerActive) {
      counter = setInterval(() => {
        props.setTimer(props.timer - 1);
      }, 1000);
    } else if (!props.timerActive && props.timer !== 0) {
      clearInterval(counter);
    }
    return () => clearInterval(counter);
  }, [props.timerActive, props]);

  return (
    <container style={wrapper}>
      <div>
        <button style={styles} onClick={reset}>
          Reset Clock
        </button>
        <button style={styles} onClick={toggle}>
          Run/Pause Clock
        </button>
      </div>
    </container>
  );
};

export default TimerButtons;
