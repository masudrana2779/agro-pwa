import ChatBox from "../../components/common/Chat";
import withAuth from "../../HOC/withAuth";
import {useEffect, useState} from "react";


const Chat = ({authSession}: any) => {
    const [messages, setMessage] = useState<any[]>([]);
    useEffect(() => {
        getMsg()
    },[]);

    const getMsg = () => {
        let msg = localStorage.getItem('msg');
        msg && setMessage(JSON.parse(msg.toString()))
    }

    console.log(messages)
  return (
    <>
        <ChatBox authSession={authSession} messages={messages} getMsg={getMsg}/>
    </>
  );
}
export default withAuth(Chat)
