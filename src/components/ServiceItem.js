import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
  return (
    <div className='column is-one-third'>
      <div
        className='feature-card is-bordered has-text-centered revealOnScroll delay-1'
        data-animation='fadeInLeft'
      >
        <div className='card-title'>
          <h4>{service.title}</h4>
        </div>
        <div className='card-icon'>
          <img src={service.image} alt='' />
        </div>
        <div className='card-text'>
          <p>{shortText(service.description)}</p>
        </div>
        <div className='card-action'>
          <Link
            to={`/services/${service.id}`}
            className='button btn-align-md accent-btn raised'
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );

  function shortText(text, maxLength = 30) {
    if (!text) {
      return '';
    } else if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  }
};

export default ServiceItem;
