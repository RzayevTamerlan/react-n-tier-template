import SectionHeading from '@presentation/common/SectionHeading';
import PostsWidget from '@presentation/widgets/post/PostsWidget.tsx';

const PostsSection = () => {
  return (
    <section>
      <SectionHeading position="center">Check out our latest posts</SectionHeading>
      <PostsWidget />
    </section>
  );
};

export default PostsSection;
