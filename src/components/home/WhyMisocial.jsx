import React from 'react';
import { Container } from 'reactstrap';

import CustomLink from '../general/CustomLink';

import '../../styles/home/WhyMisocial.scss';

import welcomeBg from '../../images/home/bg-2.png';
import ScrollButton from './ScrollButton';

const Welcome = () => {
  const maxTextLength = 190;
  let text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.';
  text=text.substring(0, Math.min(text.length, maxTextLength));
  return (
    <div className='home-section position-relative'>
      <Container className='why-misocial-wrapper w-100 d-flex'>
        <section className='why-misocial section dark'>
          <img src={welcomeBg} className='section-background' />
          <div className='section-background-sm' />
          <span className='section-topic left-line'>social marketing & analytics</span>
          <h2 className='section-title'>Take control of your data</h2>
          <p className='section-text'> {text} </p>
          <CustomLink customClass='section-link' text='core features' to='features' />
          <ScrollButton theme='dark' />
        </section>
      </Container>
    </div>
  );
};

export default Welcome;