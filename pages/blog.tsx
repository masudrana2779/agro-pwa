import InnerHeaderComponent from "../components/common/InnerHeader";
import InnerSliderComponent from "../components/common/InnerSlider";
import TabMenuComponent from "../components/common/TabMenu";
import Layout from "../components/Layouts";

const BlogPage = () => {
  return (
    <>
      <Layout title="Blog">
        <>
          <InnerHeaderComponent />
          <InnerSliderComponent />
          <TabMenuComponent />
        </>
      </Layout>
    </>
  );
};

export default BlogPage;
