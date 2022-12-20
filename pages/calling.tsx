import CallingComponent from "../components/common/Calling";
import {NextPage} from "next";
import WithAuth from "../HOC/withAuth";

const Calling: NextPage = () => {
  return (
    <>
        <CallingComponent />
    </>
  );
}

export default WithAuth(Calling);
