import {NextPage} from "next";
import withAuth from "../../HOC/withAuth";
const Dashboard: NextPage = () => {
    return (
        <div className="mt-4">
            Kishibid Panel
        </div>
    )
}

export default withAuth(Dashboard);