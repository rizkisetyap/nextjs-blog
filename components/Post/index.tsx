import React from 'react';
import NextLink from 'next/link';
import { VStack, Text, Heading, Link } from '@chakra-ui/react';

interface Props {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

const Post: React.FC<Props> = ({ post: { body, title, id } }) => (
  <VStack
    border="1px"
    borderColor="gray.200"
    borderRadius="md"
    px={3}
    py={4}
    alignItems="center"
    as="section"
    overflow="hidden"
    spacing={2}
  >
    <Heading textAlign="center" textTransform="uppercase" fontSize="lg" as="h4">
      {title}
    </Heading>

    <Text fontSize="sm" color="gray.600">
      {body.substring(0, 100)}...{' '}
      <NextLink href={`/posts/${id}`}>
        <Link colorScheme="blue" isTruncated={false}>
          Read More
        </Link>
      </NextLink>
    </Text>
  </VStack>
);

export default Post;
