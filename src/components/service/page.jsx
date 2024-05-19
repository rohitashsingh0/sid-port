import React from 'react';
import Provide from '../Provide/page';
import ServicesAll from './ServicesAll';
import ServiceBanner from './ServiceBanner';

const Service = () => {
  return (
    <>
      <ServiceBanner />
      <ServicesAll />
      <Provide />
      {/* <Beliefs /> */}
    </>
  );
};

export default Service;
