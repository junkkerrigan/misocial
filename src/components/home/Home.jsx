import React from 'react';
import { Container } from 'reactstrap';

import Welcome from './Welcome';

import '../../styles/home/Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Container>
        <Welcome />
      </Container>
    </div>
  );
};

export default Home;