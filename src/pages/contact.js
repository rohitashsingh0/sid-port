'use client';

import Layout from 'components/Layout';
import Image from 'next/image';
import { useState } from 'react';

const contact = () => {
  const [inputValues, setInputValues] = useState({
    full_name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert(`Name: ${inputValues.full_name}, Email-address: ${inputValues.email}, Message: ${inputValues.message}`);
    // setIsOpen(false);
  };

  return (
    <>
      {' '}
      <Layout>
        <div className="mx-auto max-w-7xl my-5 sm:py-5 px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 my-12">
            {/* COLUMN-1 */}

            <div className="hidden lg:block">
              <Image src="/images/banner/banner2.svg" alt="hero-image" width={800} height={642} />
            </div>

            {/* COLUMN-2 */}

            <div className="mx-auto my-auto w-full pt-5">
              <div className="items-center mx-5 p-5 sm:p-0 rounded-xl justify-between  sm:rounded-full">
                <form onSubmit={handleClick}>
                  <div>
                    <input
                      type="name"
                      className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black w-full"
                      placeholder="Your name"
                      value={inputValues.full_name}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black sm:rounded-full w-full"
                      placeholder="Your email"
                      value={inputValues.email}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <textarea
                      className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black sm:rounded-full w-full"
                      placeholder="Your Message"
                      value={inputValues.message}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="sm:mr-3">
                    <button
                      type="submit"
                      className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default contact;
