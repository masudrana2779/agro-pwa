import InnerHeaderComponent from "../components/common/InnerHeader";
import InnerSliderComponent from "../components/common/InnerSlider";
import Layout from "../components/Layouts";

const BlogPage = () => {
  return (
    <>
      <Layout title="Blog">
        <>
          <InnerHeaderComponent />
          <InnerSliderComponent />
          <p>Blog</p>
        </>
      </Layout>
    </>
  );
};

export default BlogPage;
