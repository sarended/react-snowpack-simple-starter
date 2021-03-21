import React from 'react';
import { useHistory } from 'react-router';

const About = () => {
  const history = useHistory();
  return (
    <div className="App">
      about <a onClick={() => history.push('/')}>go to other page</a>
    </div>
  );
};

export default About;
