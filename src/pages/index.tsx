import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NeutroPak Frontend</title>
        <meta name="description" content="NeutroPak Frontend Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to NeutroPak</h1>
        <p>Frontend application is ready to deploy.</p>
      </main>
    </>
  );
};

export default Home;
