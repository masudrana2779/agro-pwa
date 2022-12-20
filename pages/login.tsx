import {NextPage} from "next";
import LoginComponent from "../components/auth/Login.component";
const login: NextPage = () => {
    return (
        <div className="mt-4">
            <LoginComponent />
        </div>
    )
}

export default login;