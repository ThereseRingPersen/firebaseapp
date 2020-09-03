import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchServices } from 'actions';

import Spinner from 'components/Spinner';
import Hero from 'components/Hero';
import ServiceList from 'components/ServicesList';

const Home = () => {
  const services = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServices(dispatch);
  }, [dispatch]);

  return (
    <>
      <Hero />
      {services.status === 'LOADING' && <Spinner />}
      {services.status === 'SUCCESS' && (
        <ServiceList services={services.services} />
      )}
      {services.status === 'ERROR' && <div> Error </div>}
    </>
  );
};

export default Home;
