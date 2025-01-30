import { Refetch } from '@business/common/types/refetch.ts';
import { GetAllPostsDto } from '@business/dto/posts/getAllPostsDto.ts';
import { HttpError } from '@infrastructure/api/HttpError.ts';
import { getAllPosts } from '@infrastructure/posts/getAllPosts.ts';
import { useQuery } from '@tanstack/react-query';

type UseGetPosts = {
  data: GetAllPostsDto | undefined;
  error: HttpError | null;
  isLoading: boolean;
  isError: boolean;
  refetch: Refetch<GetAllPostsDto>;
};

const useGetPosts = (): UseGetPosts => {
  const { data, error, isLoading, isError, refetch } = useQuery<GetAllPostsDto, HttpError>({
    queryKey: ['posts'], // Ключ для кэширования
    queryFn: getAllPosts, // Запрос для получения данных
  });

  return {
    data,
    error,
    isLoading,
    isError,
    refetch, // Функция для повторного запроса
  };
};

export default useGetPosts;
