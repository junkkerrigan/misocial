import React from 'react';
import { Container } from 'reactstrap';

import CustomLink from '../general/CustomLink';
import ScrollButton from './ScrollButton';

import '../../styles/home/Welcome.scss';

import welcomeBg from '../../images/home/bg-1.png';

const Welcome = () => {
  const maxTextLength = 100;
  let text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.';
  text=text.substring(0, Math.min(text.length, maxTextLength));

  return (
    <div className='home-section position-relative'>
      <Container className='w-100 d-flex welcome-wrapper'>
        <section className='welcome section light'>
          <img src={welcomeBg} alt="welcome background" className='section-background' />
          <div className='section-background-sm' />
          <span className='section-topic left-line'>social marketing & analytics</span>
          <h2 className='section-title'>Take control of your data</h2>
          <p className='section-text'> {text} </p>
          <div className='section-link-wrapper'>
            <CustomLink to='get-started' text='get started' customClass='section-link' />
            <CustomLink to='features' text='explore features' customClass='section-link' />
          </div>
          <ScrollButton theme='light' />
        </section>
      </Container>
    </div>
  );
};

export default Welcome;