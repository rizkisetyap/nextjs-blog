import NextLink from 'next/link';
import type { NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import Post from '../../components/Post';
import fetchPost from '../../hooks/fetchPost';
import ContainerPosts from '../../components/Post/ContainerPosts';
import type { Post as PostsType } from '../../types';

interface Props {
  posts: PostsType[];
}
const Home: NextPage<Props> = ({ posts }) => {
  // console.log(posts);
  return (
    <Container maxW="container.lg" mx="auto">
      <Heading as="h1" size="xl" my={10}>
        Posts
      </Heading>
      <NextLink href="/">
        <a>back to home</a>
      </NextLink>
      <ContainerPosts>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ContainerPosts>
    </Container>
  );
};

export async function getStaticProps() {
  const posts: PostsType[] = await fetchPost();

  return {
    props: {
      posts
    }
  };
}

export default Home;
