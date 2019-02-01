import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../styles/home/ScrollButton.scss';

const ScrollButton = ({ theme }) => {
  const handleButtonClick = () => {
    const sections=document.getElementsByClassName("home-section");
    let scrollToSection=1;
    const scrollOffset=window.scrollY;

    for(let i=0;i<sections.length;i++) {
      const item=sections[i];
      if (item.offsetTop<scrollOffset &&
          item.offsetTop + item.offsetHeight>scrollOffset) {
        scrollToSection=i+1;
        break;
      }
    }

    let scrollHeight;
    if (scrollToSection===sections.length) {
      const last=sections[scrollToSection-1];
      scrollHeight=last.offsetHeight+last.offsetTop;
    } else scrollHeight=sections[scrollToSection].offsetTop;
    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button className={`section-scroll-button ${theme}`}
      onClick={handleButtonClick}>
      <FontAwesomeIcon icon={[ 'fas', 'arrow-down']} style={ {
        color: theme==='dark'? 'white' : '#9fa4af',
        fontSize: '20'
      } } />
    </button>
  );
};

export default ScrollButton;