import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

const Home = props => {
  return (
    <div>
      <Button onClick={props.onClick}>Logout</Button>
    </div>
  );
};

export default Home;
