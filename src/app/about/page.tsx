import { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - NeutroPak</title>
        <meta name="description" content="Learn more about NeutroPak" />
      </Head>

      <main className="about-page">
        <div className="about-container">
          <h1>About NeutroPak</h1>

          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              NeutroPak was founded with a mission to provide quality products and exceptional
              customer service. We believe in transparency, reliability, and customer satisfaction.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To deliver premium products at competitive prices while maintaining the highest
              standards of customer service and ethical business practices.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Values</h2>
            <ul>
              <li>Quality: We never compromise on product quality</li>
              <li>Integrity: Honest dealings with our customers</li>
              <li>Innovation: Continuously improving our services</li>
              <li>Community: Building a trusted community of customers</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
