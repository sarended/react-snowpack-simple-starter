import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { increment } from '../store/actions';

const Home = () => {
  const st = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(st);

  useEffect(() => {
    const timer = setTimeout(() => dispatch(increment()), 1000);
    return () => clearTimeout(timer);
  }, [st]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          counter: <code>{st.counter}</code>.
        </p>
        <a onClick={() => history.push('/about')}>go to other page</a>
      </header>
    </div>
  );
};

export default Home;
