import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = (props) => {
  const { services } = props;
  return (
    <section className='section section-feature-grey is-medium'>
      <div className='container'>
        <div className='title-wrapper has-text-centered'>
          <h2 className='title is-2'>Great Power Comes </h2>
          <h3 className='subtitle is-5 is-muted'>With great Responsability</h3>
          <div className='divider is-centered'></div>
        </div>
        <div className='content-wrapper'>
          <div className='columns'>{listServices(services)}</div>
        </div>
      </div>
    </section>
  );

  function listServices(services) {
    return services.map((service) => (
      <ServiceItem key={service.id} service={service} />
    ));
  }
};

export default ServiceList;
