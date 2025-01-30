import PostsWidget from '@presentation/widgets/post/PostsWidget.tsx';

const HomePage = () => {
  return (
    <main
      style={{
        padding: '20px',
      }}
    >
      <PostsWidget />
    </main>
  );
};

export default HomePage;
