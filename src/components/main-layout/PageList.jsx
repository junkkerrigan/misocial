import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

import '../../styles/main-layout/PageList.scss';

const mapStateToProps = state => ({
  location: state.headerNav
});

const PageList = ({ location, theme }) => {
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
    <nav>
      <ul className='d-flex'>
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
    </nav>
  );
};

export default connect(mapStateToProps)(PageList);