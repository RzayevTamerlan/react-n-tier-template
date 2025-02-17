import { GetPostDto } from '@business/dto/posts/getPostDto.ts';
import LargeButton from '@presentation/common/LargeButton/LargeButton.tsx';
import type { FC, ReactNode } from 'react';
import { createContext, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './post-card.module.scss';

// 1. Создаем контекст
type PostCardContextType = {
  post: GetPostDto;
};

const PostCardContext = createContext<PostCardContextType | undefined>(undefined);

const usePostCard = () => {
  const context = useContext(PostCardContext);

  if (!context) {
    throw new Error('usePostCard must be used within a PostCard');
  }

  return context;
};

// 2. Основной компонент PostCard
type PostCardProps = {
  post: GetPostDto;
  children: ReactNode;
};

type PostCardComponent = FC<PostCardProps> & {
  Title: FC;
  Body: FC;
  GotoLink: FC;
};

const PostCard: PostCardComponent = ({ post, children }) => {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className={styles['post-card']}>{children}</div>
    </PostCardContext.Provider>
  );
};

// 3. Дочерние компоненты
const Title: FC = () => {
  const { post } = usePostCard();

  return <h3 className={styles['post-card__title']}>{post.title}</h3>;
};

const Body: FC = () => {
  const { post } = usePostCard();

  return <p className={styles['post-card__body']}>{post.body}</p>;
};

const GotoLink: FC = () => {
  const { post } = usePostCard();

  return (
    <LargeButton>
      <NavLink to={`/posts/${post.id}`}>Go to post</NavLink>
    </LargeButton>
  );
};

// 4. Привязываем компоненты к PostCard
PostCard.Title = Title;
PostCard.Body = Body;
PostCard.GotoLink = GotoLink;

export default PostCard;
