import useGetPosts from '@business/services/posts/useGetPosts';
import PostCard from '@presentation/dummies/post/PostCard';
import List from '@presentation/ui/List';

import styles from './post-widgets.module.scss';

const PostsWidget = () => {
  const { error, isError, isLoading, data } = useGetPosts();

  if (isError) {
    return <p>Something went wrong! {error && error.statusCode}</p>;
  }

  return (
    <List className={styles['posts__list']}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map(post => (
          <PostCard post={post}>
            <PostCard.Title />
            <PostCard.Body />
            <PostCard.GotoLink />
          </PostCard>
        ))
      )}
    </List>
  );
};

export default PostsWidget;
