import { Post } from '@core/Post.ts';
import { http } from '@infrastructure/api';

export const getAllPosts = async () => {
  return await http<Post[]>({
    url: '/posts',
    method: 'GET',
  });
};

export const getPostById = async (id: number) => {
  return await http<Post>({
    url: `/posts/${id}`,
    method: 'GET',
  });
};
