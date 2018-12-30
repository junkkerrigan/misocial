import React from 'react';

import MainNavigation from './MainNavigation';

import '../../styles/main-layout/MainHeader.scss';

const MainHeader = () => (
  <header className='main-header'>
    <MainNavigation theme='light' />
  </header>
);

export default MainHeader;