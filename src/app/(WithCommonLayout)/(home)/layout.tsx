const layout = ({
  children,
  recentPosts,
}: {
  children: React.ReactNode;
  recentPosts: React.ReactNode;
}) => {
  return (
    <>
      {children}
      {recentPosts}
    </>
  );
};

export default layout;
