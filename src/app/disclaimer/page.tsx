import { NextPage } from 'next';
import Head from 'next/head';

const Disclaimer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Disclaimer - NeutroPak</title>
        <meta name="description" content="NeutroPak Disclaimer" />
      </Head>

      <main className="legal-page">
        <div className="legal-container">
          <h1>Disclaimer</h1>

          <section className="legal-section">
            <h2>General Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only.
              We make no warranties about the accuracy, reliability, completeness, or timeliness of
              any information on this website.
            </p>
          </section>

          <section className="legal-section">
            <h2>Product Information</h2>
            <p>
              Product descriptions, images, and prices are subject to change without notice.
              We endeavor to provide accurate information but are not responsible for errors or omissions.
            </p>
          </section>

          <section className="legal-section">
            <h2>External Links</h2>
            <p>
              This website may contain links to external websites. We are not responsible for the
              content, accuracy, or practices of external websites. Use external websites at your own risk.
            </p>
          </section>

          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL NEUTROPAK BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THIS WEBSITE.
            </p>
          </section>

          <section className="legal-section">
            <h2>Changes to this Disclaimer</h2>
            <p>
              We reserve the right to modify this disclaimer at any time. Changes will be effective
              immediately upon posting to the website.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Disclaimer;
