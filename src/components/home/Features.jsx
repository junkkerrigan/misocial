import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shortid from 'shortid';
import MediaQuery from 'react-responsive';

import featuresData from './featuresData';

import { sizes } from '../../variables';

import '../../styles/home/Features.scss';

const FeaturesItem = ({ title, text }) => {
  return (
    <Col className='features-item'
       xl={{ size: 4, offset: 0 }}
       lg={{ size: 6, offset: 0 }}
       md={{ size: 8, offset: 2 }}
       xs={{ size: 10, offset: 1 }}
    >
      <MediaQuery maxWidth={sizes.maxMd}>
        <div className='features-title-wrapper'>
          <span className='features-logo-wrapper'>
            <FontAwesomeIcon icon={[ 'fas', 'clipboard-check' ]}
              style={{
                color: '#a8abb4',
                fontSize: '24'
              }}/>
          </span>
          <h3 className='features-title'>{title}</h3>
        </div>
        <p className='features-text'>{text}</p>
      </MediaQuery>
      <MediaQuery minWidth={sizes.minLg}>
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
      </MediaQuery>
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
          <h2 className='section-title text-center'>Powerful Features</h2>
          <p className='section-text text-center'>
            Built for your projects, your workflows, your goals, your team.
          </p>
          <Row noGutters className='features-list'>
          {
            featuresData.map(item =>
              <FeaturesItem title={item.title} text={item.text}
                key={shortid.generate()}/>
            )
          }
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Features;
