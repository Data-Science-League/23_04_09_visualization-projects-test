// src/pages/index.tsx

import Head from 'next/head';
import CommitList from '../components/CommitList';

const Home = () => {
  return (
    <div>
      <Head>
        <title>GitHub Commits</title>
      </Head>
      <main>
        <h1>GitHub Commits</h1>
        <CommitList />
      </main>
    </div>
  );
};

export default Home;