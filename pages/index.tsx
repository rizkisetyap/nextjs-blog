import NextLink from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <NextLink href="/posts">
        <a>Post</a>
      </NextLink>
    </div>
  );
};

export default Home;
