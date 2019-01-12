import React from 'react';

import '../../styles/home/Welcome.scss';

import welcomeBg from '../../images/home/bg-1.png';

const Welcome = () => {
  return (
    <section className='welcome'>
      <img src={welcomeBg} className='welcome-background' />

    </section>
  );
};

export default Welcome;