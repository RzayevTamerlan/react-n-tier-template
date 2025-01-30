import { Post } from '@core/Post.ts';
import { http } from '@infrastructure/api';

export const getAllPosts = async () => {
  return await http<Post[]>({
    url: '/posts',
    method: 'GET',
  });
};
