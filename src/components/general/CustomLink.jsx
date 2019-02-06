import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/CustomLink.scss';

const CustomLink = ({ to, text, customClass }) => (
  <span className={`link-wrapper${customClass? ' ' + customClass : ''}`}>
    <Link to={to} className='link text-uppercase'> { text } </Link>
  </span>
);

export default CustomLink;