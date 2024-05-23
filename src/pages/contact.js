'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Layout from 'components/Layout';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    message: '',
  });
  const [messages, setMessages] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = 'service_vgkr18l';
    const templateId = 'template_co4bso7';
    const userId = 'WYu5bUphbzYyzY4tH';

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(() => {
        setMessages('Email sent successfully');
        // Clear form data after successful submission
        setFormData({
          full_name: '',
          email: '',
          message: '',
        });
        setTimeout(() => {
          setMessages('');
        }, 5000);
      })
      .catch(() => {
        setMessages('Email sending failed');
        setTimeout(() => {
          setMessages('');
        }, 5000);
      });
  };

  return (
    <>
      {' '}
      <Layout>
        <div className="mx-auto max-w-7xl my-20 py-10 sm:py-5 px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 my-12">
            {/* COLUMN-1 */}

            <div className="">
              <Image src="/images/banner/banner2.svg" alt="hero-image" width={800} height={642} />
            </div>

            {/* COLUMN-2 */}

            <div className="mx-auto my-auto w-full pt-5">
              <div className="items-center mx-5 p-5 sm:p-0 rounded-xl justify-between  sm:rounded-full">
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="name"
                      name="full_name"
                      className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full rounded  bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black w-full"
                      placeholder="Your name"
                      value={formData.full_name}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l rounded  border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black sm:rounded-full w-full"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l rounded  border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black sm:rounded-full w-full"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="sm:mr-3">
                    <button
                      type="submit"
                      className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue mb-6"
                    >
                      Submit
                    </button>
                  </div>
                  {messages && (
                    <div className="text-base font-bold text-green bg-[#32a852] shadow-xl mt-5 px-10 p-2 text-white inline rounded ">
                      {messages}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
