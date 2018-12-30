import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import PageList from './PageList';

import '../../styles/main-layout/MainNavigation.scss';

import mainLogo from '../../images/main-logo.png';

const MainNavigation = ({ theme }) => (
    <Container className='d-flex align-items-center justify-content-between'>
      <h1 className={`main-logo text-uppercase ${theme}`}>
        <Link to='/home' className='d-flex align-items-center'>
          <img src={mainLogo} alt='main logo'/>
          misocial
        </Link>
      </h1>
      <PageList theme={theme} />
    </Container>
);

export default MainNavigation;