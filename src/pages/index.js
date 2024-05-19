import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

import styles from 'styles/pages/Home.module.scss';
import Banner from 'components/Banner';
import Aboutus from 'components/Aboutus';
import Digital from 'components/Digital';
import Manage from 'components/Manage';
import FAQ from 'components/FAQ';
import Testimonials from 'components/Testimonials';
import Joinus from 'components/Joinus';
import Articles from 'components/Articles';
import Service from 'components/service/diffServices';

export default function Home({ posts, pagination }) {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      {/* <WebsiteJsonLd siteTitle={title} /> */}
      {/* <Header>
        <h1
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </Header> */}

      {/* <Section>
        <Container>
          <h2 className="sr-only">Posts</h2>
          <ul className={styles.posts}>
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </Container>
      </Section> */}

      <main>
        <Banner />
        <Aboutus />
        {/* <Dedicated /> */}
        <Service />
        <Digital />
        {/* <Beliefs /> */}
        {/* <Wework /> */}
        {/* <Ourteam /> */}
        {/* <Featured /> */}
        <Manage />
        <FAQ />
        <Testimonials />
        <Articles />
        <Joinus />
        {/* <Insta /> */}
      </main>
    </Layout>
  );
}

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