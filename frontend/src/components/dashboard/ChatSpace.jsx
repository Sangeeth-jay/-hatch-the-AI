import { FaUser } from "react-icons/fa";
import Chat from "./Chat";
import ChatTextArea from "./ChatTextArea";
const ChatSpace = () => {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <div className="w-full h-12 border-b-2 border-b-[#262626] flex flex-row-reverse justify-items-end items-center px-4 py-4">
          <div className="border-2 border-gray-500 rounded-full p-1 hover:border-gray-300 cursor-pointer duration-300 active:scale-95 text-gray-500 hover:text-gray-300">
            <FaUser className="" />
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <Chat/>
          <ChatTextArea/>
        </div>
      </div>
    </>
  );
};

export default ChatSpace;
