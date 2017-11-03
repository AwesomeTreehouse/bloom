import React from 'react';
import { Link } from 'react-router';
import CountDown from 'react-countdown-now';

const Timer = props => {
  return(
    <div className="small-12 columns">
      <div className="text-center">
        <CountDown date={ Date.now() + 1000 } />
      </div>
    </div>
  );
};
