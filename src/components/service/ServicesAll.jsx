import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { SiBisecthosting } from 'react-icons/si';
import { TbArrowAutofitContent, TbBrandNordVpn, TbDatabaseOff, TbSocial } from 'react-icons/tb';

const ServicesAll = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom website development tailored to your needs.',
      icon: CgWebsite,
    },
    {
      title: 'Hosting Services',
      description: 'Reliable hosting solutions to keep your website online 24/7.',
      icon: SiBisecthosting,
    },
    {
      title: 'Digital Marketing',
      description: 'Strategies to boost your online presence and reach your target audience.',
      icon: TbSocial,
    },
    {
      title: 'SEO',
      description: 'Boost your online visibility with our expert SEO services.',
      icon: TbDatabaseOff,
    },
    {
      title: 'VPS',
      description: 'Experience unmatched performance and reliability with our VPS hosting solutions.',
      icon: TbBrandNordVpn,
    },
    {
      title: 'Content Creation',
      description:
        "Engage your audience with compelling and impactful content tailored to your brand's voice and objectives.",
      icon: TbArrowAutofitContent,
    },
  ];

  return (
    <>
      <section className="bg-white my-2">
        <div className="container px-6 py-5 mx-auto">
          <h3 className="text-center text-4xl sm:text-65xl font-black mb-15">
            explore our <br /> awesome <span className="text-blue">Services</span>
          </h3>

          <div className="mx-auto max-w-7xl px-4 my-20 sm:py-10 lg:px-8">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-3">
              {services.map((item, index) => (
                <div className="p-6 shadow-xl hover:bg-blue rounded-xl border-r-gray-200" key={index}>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue rounded-xl md:mx-4  ">
                      {React.createElement(item.icon, { className: 'h-8 w-8' })}
                    </span>
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h1 className="text-xl font-medium text-gray capitalize ">{item.title}</h1>
                      <p className="mt-3 text-gray-500 ">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAll;
