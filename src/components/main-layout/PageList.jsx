import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

import '../../styles/main-layout/PageList.scss';

const mapStateToProps = state => ({
  location: state.headerNav
});

//TODO: toggle menu styles

const PageList = ({ location, theme, isOpen }) => {
  const navItems = [
    {
      name: 'Home',
      link: 'home'
    },
    {
      name: 'Why MISOCIAL',
      link: 'why-misocial'
    },
    {
      name: 'Features',
      link: 'features'
    },
    {
      name: 'Articles',
      link: 'articles'
    },
    {
      name: 'Pricing',
      link: 'pricing'
    },
  ];
  return (
    <ul className={`main-nav-list ${isOpen? 'open' : 'closed'}`}>
      {
        navItems.map(value =>
          <li className={`main-nav-item${location===value.link?
              ' active' : ''} ${theme}`} key={shortid.generate()}>
            <Link className='main-nav-link' to={'/'+value.link}>
              {value.name}
            </Link>
          </li>
        )
      }
      <span className={`main-nav-item get-started ${theme}`}>
        <Link to='get-started' className='main-nav-link text-uppercase'>
          get started
        </Link>
      </span>
    </ul>
  );
};

export default connect(mapStateToProps)(PageList);