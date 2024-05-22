import Link from 'next/link';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';
import { TiArrowLeft } from 'react-icons/ti';

import styles from 'styles/pages/Error.module.scss';

export default function Custom500() {
  return (
    <Layout>
      <Helmet>
        <title>500 - Internal Error</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Section>
        <Container className={styles.center}>
          <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">505</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl ">Internal Server Error</p>
                <p className="mb-4 text-lg font-light text-gray-500 mb-10">
                  Sorry, we can&apos;t process your request. You&apos;ll find lots to explore on the home page.
                </p>
                <Link
                  href="/"
                  className="inline-flex text-white bg-black hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-centermy-4  whitespace-nowrap
                  items-center"
                >
                  <TiArrowLeft className="mr-2" /> Back to Homepage
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </Section>
    </Layout>
  );
}

// Next.js method to ensure a static page gets rendered
export async function getStaticProps() {
  return {
    props: {},
  };
}
