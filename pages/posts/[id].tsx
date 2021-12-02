import NextLink from 'next/link';

import type { NextPage, GetStaticPropsContext } from 'next';
import type { Post as PostType } from '../../types';
import fetchPost, { fetchPostById } from '../../hooks/fetchPost';

interface Props {
  post: PostType;
}
const Post: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <NextLink href="/posts">
        <a>back to post</a>
      </NextLink>
    </div>
  );
};

export async function getStaticPaths() {
  const posts: PostType[] = await fetchPost();
  const paths = posts.map(post => ({ params: { id: String(post.id) } }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const post = await fetchPostById(Number(ctx.params?.id));

  return {
    props: {
      post
    }
  };
}

export default Post;
