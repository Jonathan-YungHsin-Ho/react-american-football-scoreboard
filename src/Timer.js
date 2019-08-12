import React from 'react';

const Timer = props => {
  const timerStyle = {
    display: 'flex',
  };

  return (
    <div class="timerContainer" style={timerStyle}>
      <div>{Math.floor(props.timer / 60)}</div>
      <div>:</div>
      <div>
        {props.timer % 60 <= 9 && '0'}
        {props.timer % 60}
      </div>
    </div>
  );
};

export default Timer;
