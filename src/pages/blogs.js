import React from 'react';
import Layout from 'components/Layout';
import { getPaginatedPosts } from 'lib/posts';
import PostCard from 'components/PostCard';

const blogs = ({ posts }) => {
  return (
    <Layout>
      <div className="bg-lightgrey py-40" id="blog-section">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-blue text-lg font-normal tracking-widest">ARTICLES</h3>
            <h3 className="text-4xl sm:text-6xl font-bold">Our latest post.</h3>
          </div>

          <div className="flex flex-wrap ">
            {posts.map((post) => {
              return <PostCard post={post} key={post.slug} />;
            })}
          </div>
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
