import BannerComponent from "../Banner";
import CallChat from "../CallChat";
import FarmingTipsComponent from "../FarmingTips";
import QAComponent from "../QA";

const HomeComponent = () => {
  return (
    <>
      <div className="pb-28">
        <BannerComponent />
        <CallChat />
        <FarmingTipsComponent />
        <QAComponent /> 
      </div>
    </>
  );
};

export default HomeComponent;
