import Layout from 'components/Layout';
import Banner from 'components/Banner';
import Aboutus from 'components/Aboutus';
import Service from 'components/service/page';
import Digital from 'components/Digital';
// import Manage from 'components/Manage';
// import FAQ from 'components/FAQ';
import Testimonials from 'components/Testimonials';
import Joinus from 'components/Joinus';

export default function Home() {
  return (
    <Layout>
      <main>
        <Banner />
        <Aboutus />
        <Service />
        <Digital />
        {/* <Manage /> */}
        {/* <FAQ /> */}
        <Testimonials />
        <Joinus />
      </main>
    </Layout>
  );
}
