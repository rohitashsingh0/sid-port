import Layout from 'components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const about = () => {
  return (
    <>
      <Layout>
        <section>
          <div className="bg-darkblue">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">
                A big Hello to Everyone
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">
                Welcome to my Portfolio! Explore my work and projects.
              </p>
              <div className="flex flex-wrap justify-center">
                {/* <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
                >
                  Get started
                </button> */}
                <Link href="/mywork">
                  <button
                    type="button"
                    className="min-w-60 joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue px-6 lg:px-12 "
                  >
                    my work
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <img
            src="/images/team/teamimg.png"
            alt=""
            className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg lg:-mt-40"
          />
        </section>

        <div className="min-h-60 bg-gray-100 py-10">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-4 md:p-10">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">Sidharth</h1>
                <h2 className="text-xl md:text-2xl text-gray-600 mt-2 mb-5">
                  Digital Marketer, Website Designer, & Hosting Provider
                </h2>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Hello! I'm Sidharth, a passionate digital marketer, skilled website designer, and reliable hosting
                  provider. With years of experience in the industry, I specialize in creating stunning, user-friendly
                  websites that help businesses grow online. My expertise in digital marketing ensures that your
                  business not only looks good but also reaches its target audience effectively.
                </p>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  From crafting bespoke website designs to offering top-notch hosting solutions, I provide a
                  comprehensive range of services to meet all your online needs. My goal is to empower businesses by
                  enhancing their online presence and driving meaningful engagement with their audience.
                </p>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Let's work together to take your online presence to the next level. Whether you're looking for a new
                  website, digital marketing strategy, or reliable hosting, I'm here to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default about;
