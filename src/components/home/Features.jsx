import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import featuresData from './featuresData';

import '../../styles/home/Features.scss';

const FeaturesItem = ({ title, text }) => {
  return (
    <Col lg={{ size: 4, offset: 0 }} className='features-item'>
      <span className='features-logo-wrapper'>
        <FontAwesomeIcon icon={[ 'fas', 'clipboard-check' ]}
          style={{
            color: '#a8abb4',
            fontSize: '24'
          }}/>
      </span>
      <div className='features-content-wrapper'>
        <h3 className='features-title'>{title}</h3>
        <p className='features-text'>{text}</p>
      </div>
    </Col>
  );
};

const Features = () => {
  return (
    <div className='home-section position-relative'>
      <Container className='w-100 d-flex features-wrapper'>
        <section className='features section light'>
          <div className='section-background-sm' />
          <div className='section-background' />
          <span className='section-topic left-line right-line'>
              core features
          </span>
          <h2 className='section-title'>Powerful Features</h2>
          <p className='section-text'>
            Built for your projects, your workflows, your goals, your team.
          </p>
          <Row className='features-list'>
          {
            featuresData.map(item =>
              <FeaturesItem title={item.title} text={item.text} />
            )
          }
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Features;
