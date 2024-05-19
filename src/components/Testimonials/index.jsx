'use client';
import Slider from 'react-slick';
import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

// CAROUSEL DATA
const postData = [
  {
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'Working with Sidharth was an absolute pleasure. Their attention to detail and dedication to delivering results exceeded our expectations. Highly recommend!',
    imgSrc: '/images/testimonial/user.jpg',
  },
  {
    name: 'Rahul Malhotra',
    profession: 'CEO, Uphosting',
    comment:
      "I couldn't be happier with the website Sidharth built for us. It perfectly captures our brand identity and has significantly boosted our online presence. Thank you!",
    imgSrc: '/images/testimonial/user.jpg',
  },
  {
    name: 'Shyam Sundar',
    profession: 'Founder of SKM Group',
    comment:
      'Choosing Sidharth for our digital marketing needs was one of the best decisions we made. Their expertise and professionalism have been invaluable in helping us achieve our goals.',
    imgSrc: '/images/testimonial/user.jpg',
  },
  {
    name: 'AK Creator',
    profession: 'Founder of AK Group',
    comment:
      'The team at Sidharth went above and beyond to ensure our project was a success. Their creativity and expertise shone through every step of the way.',
    imgSrc: '/images/testimonial/user.jpg',
  },
  {
    name: 'Aman Gupta',
    profession: 'Cyber Security Expert',
    comment:
      "I'm impressed by the level of professionalism and commitment demonstrated by Sidharth. They truly understand our needs and deliver exceptional results.",
    imgSrc: '/images/testimonial/user.jpg',
  },
  {
    name: 'Rasbihari',
    profession: 'SEO Manager',
    comment:
      'Thanks to Sidharth, our online presence has never been stronger. Their strategic approach and attention to detail have made a significant impact on our business.',
    imgSrc: '/images/testimonial/user.jpg',
  },
];

// CAROUSEL SETTINGS
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">
            See what others are saying.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">
            See what others are saying.
          </h3>
        </div>

        <Slider {...settings}>
          {postData.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white test-sha m-3 p-10 my-20 rounded-3xl">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  width={71}
                  height={71}
                  className="inline-block m-auto absolute test-pos rounded-full"
                />
                <h4 className="text-base font-medium text-testColor my-4">{item.comment}</h4>
                <hr style={{ color: 'lightgrey' }} />
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-base font-medium pt-4 pb-2">{item.name}</h3>
                    <h3 className="text-xs font-medium pb-2 opacity-50">{item.profession}</h3>
                  </div>
                  <div className="flex">
                    <StarIcon width={20} className="star" />
                    <StarIcon width={20} className="star" />
                    <StarIcon width={20} className="star" />
                    <StarIcon width={20} className="star" />
                    <StarIcon width={20} className="star" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
