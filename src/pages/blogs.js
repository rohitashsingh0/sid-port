import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from 'components/Layout';
import { getPaginatedPosts } from 'lib/posts';
import Pagination from 'components/Pagination';
import PostCard from 'components/PostCard';

const postData = [
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'August 19, 2021',
    imgSrc: '/images/articles/article3.png',
  },
];

const blogs = ({ posts, pagination }) => {
  const chunkSize = 3;
  const groupedData = [];
  for (let i = 0; i < postData.length; i += chunkSize) {
    groupedData.push(postData.slice(i, i + chunkSize));
  }

  if (!postData.length) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="bg-lightgrey py-20" id="blog-section">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-blue text-lg font-normal tracking-widest">ARTICLES</h3>
            <h3 className="text-4xl sm:text-6xl font-bold">Our latest post.</h3>
          </div>

          <div className="flex flex-wrap ">
            {posts.map((post) => {
              return (
                // <li key={post.slug}>
                <PostCard post={post} key={post.slug} />
                // </li>
              );
            })}
          </div>
          {/* {groupedData.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap ">
              {row.map((item, index) => (
                <div key={index} className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3">
                  <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative">
                    <Link href="/blogs/read/4">
                      <Image src={item.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" />
                    </Link>

                    <Link href="/">
                      <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">
                        {item.time} read
                      </h3>
                    </Link>
                    <h4 className="text-2xl font-bold pt-6 text-black">{item.heading}</h4>
                    <h4 className="text-2xl font-bold pt-1 text-black">{item.heading2}</h4>

                    <div>
                      <h3 className="text-base font-normal pt-6 pb-2 opacity-75">{item.name}</h3>
                      <h3 className="text-base font-normal pb-1 opacity-75">{item.date}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))} */}
        </div>
      </div>
    </Layout>
  );
};

export default blogs;

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
