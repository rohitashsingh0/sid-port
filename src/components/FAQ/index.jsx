'use client';
import dynamic from 'next/dynamic';

const DisclosureItem = dynamic(() => import('./DisclosureItem'), { ssr: false });

const FAQ = () => {
  return (
    <div id="faq-section" className="mx-auto max-w-7xl py-24 lg:px-8 bg-blue rounded-2xl my-16 faq-bg">
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked <br /> questions.
      </h2>
      <div className="w-full px-4 pt-16">
        <DisclosureItem
          question="What types of digital marketing strategies do you specialize in?"
          answer="We specialize in a range of digital marketing strategies, including SEO, social media marketing, email marketing, and content marketing."
        />
        <DisclosureItem
          question="Can you provide examples of websites or projects you’ve previously worked on?"
          answer="Certainly! We’ve worked on a variety of projects across different industries, from e-commerce platforms to corporate websites and personal blogs."
        />
        <DisclosureItem
          question="How do you ensure that your web development solutions are tailored to our specific needs and preferences?"
          answer="We prioritize understanding your unique requirements and preferences to deliver customized web development solutions that align perfectly with your goals and objectives."
        />
      </div>
    </div>
  );
};

export default FAQ;
