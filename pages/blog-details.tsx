import BlogDetailsComponent from "../components/common/BlogDetails";
import InnerHeaderComponent from "../components/common/InnerHeader";
import Layout from "../components/Layouts";

const BlogPage = () => {
  return (
    <>
      <Layout title="Blog">
        <>
          <InnerHeaderComponent />
          <BlogDetailsComponent />
        </>
      </Layout>
    </>
  );
};

export default BlogPage;
