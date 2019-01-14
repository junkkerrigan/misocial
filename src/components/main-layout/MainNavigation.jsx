import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageList from './PageList';

import '../../styles/main-layout/MainNavigation.scss';

import mainLogo from '../../images/main-logo.png';

class MainNavigation extends Component {
  state = {
    isMenuOpen: false
  };

  handleButtonClick = () => {
    let { isMenuOpen } = this.state ;
    isMenuOpen = !isMenuOpen;
    this.setState({
      isMenuOpen
    })
  };

  render() {
    const { theme } = this.props;
    const { isMenuOpen } = this.state;
    const icon = isMenuOpen? 'times' : 'bars';
    return (
      <nav className='container main-nav-wrapper'>
        <h1 className={`main-logo text-uppercase ${theme}`}>
          <Link to='/home' className='d-flex align-items-center'>
            <img src={mainLogo} alt='main logo'/>
            misocial
          </Link>
        </h1>
        <div className='d-flex flex-column align-items-end position-relative'>
          <button type='button' onClick={this.handleButtonClick} className='main-nav-switch'>
            <FontAwesomeIcon icon={[ 'fas', icon ]} style={ {
              color: `${theme==='dark'?  '#37374a' : 'white'}`,
              fontSize: '24'
            } } />
          </button>
          <PageList theme={theme} isOpen={isMenuOpen} />
        </div>
      </nav>
    );
  }
}

export default MainNavigation;