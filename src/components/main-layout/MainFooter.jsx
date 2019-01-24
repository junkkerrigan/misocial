import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shortid from 'shortid'

import MainNavigation from './MainNavigation';

import '../../styles/main-layout/MainFooter.scss';

const MainFooter = () => {
  const sns = [ 'facebook-f', 'twitter', 'google-plus-g', 'instagram' ];
  return (
    <footer className='main-footer'>
      <MainNavigation theme='dark'/>
      <Container className='main-footer-info'>
        <span className='main-footer-copyrights'>
          © 2017 Mass Impressions & Tranmautritam. Make the right impression.
        </span>
        <ul className='d-flex align-items-center'>
          {
            sns.map(val => (
              <li key={shortid.generate()} className='main-footer-sns'>
                <a href='#'>
                  <FontAwesomeIcon icon={[ 'fab', val ]} />
                </a>
              </li>
            ))
          }
        </ul>
      </Container>
    </footer>
  )
};

export default MainFooter;