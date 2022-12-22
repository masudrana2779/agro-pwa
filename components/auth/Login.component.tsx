import * as Yup from "yup";
import {LoginType} from "./types";
import {Form, Formik} from "formik";
import FormikControl from "../controls/FormikControl";
import {User} from "../../apiTypes";
import {config} from "../../config";
import {setCookie} from "cookies-next";
import {useRouter} from "next/router";
import {UserType} from "../../enum";
import {SocketIO} from "../../designPattern/SocketIO";

const users: User[] = [
    {
        phoneNumber: '01717677540',
        name: 'Mahadi Hasan',
        address: 'Dhaka',
        rule: 1,
    },
    {
        phoneNumber: '01710575743',
        name: 'Ahmed Reza',
        address: 'Dhaka',
        rule: 7,
    }
]

const LoginComponent = () => {
    const router = useRouter();

    const validationSchema = Yup.object({
        phoneNumber: Yup.string()
            .max(11, "Must enter max 11 characters")
            .min(11, "Must enter min 11 characters")
            .required("Mobile Number is Required"),
    });

    const initialValues: LoginType = {
        phoneNumber: "",
        deviceId: '',
        channel: "web",
        userType: "user",
    };

    const onSubmit = async (values: any, { setSubmitting, resetForm}: any) => {
        values.deviceId = values.phoneNumber;
        const user = await users.find(item => item.phoneNumber === values.phoneNumber);

        if (user){
            await setCookie(config.cookieName, JSON.stringify(user),
                {
                    path: "/",
                    maxAge: 2628000, // Expires after 1 month
                    sameSite: 'strict',
                });
            const socket = SocketIO.getInstance();
            socket && socket.connection(user);

            await router.push(user.rule === UserType.KISHI_BID ? '/kishibid' : '/')
        }
        resetForm()

        await setSubmitting(false);
    };


    return (
        <>
           <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
               {
                   ({
                       values, errors, handleChange, isSubmitting, isValid
                   }) => (
                       <Form className="p-4 mt-[200px] rounded-2xl shadow-lg">
                           <p className="mt-3 mb-3 tracking-wider font-semibold text-center text-green-700 underline">Agro Login</p>
                           <div>
                               <FormikControl
                                   label={"Mobile Number"}
                                   control="input"
                                   name={"phoneNumber"}
                                   id={"phoneNumber"}
                                   value={values.phoneNumber}
                                   type={"text"}
                                   placeholder={"Mobile Number"}
                                   className={"border-solid border-2 border-sky-600 p-1 rounded w-full"}
                                   handleChange={handleChange}
                               />
                               <p className="text-custom_red-400 font-sans text-sm">{errors.phoneNumber}</p>
                           </div>
                           <div>
                               <button className="bg-blue-500 pt-2 pb-2 pl-4 pr-4 mt-3 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" disabled={isSubmitting || !isValid} type="submit">
                                   {isSubmitting ? "Processing..." : "Login"}
                               </button>
                           </div>
                       </Form>
                   )
               }
           </Formik>
        </>
    )
}
export default LoginComponent;