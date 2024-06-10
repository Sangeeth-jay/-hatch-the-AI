import { useEffect, useRef, useState } from "react"
import { IoSend } from "react-icons/io5";

const ChatText = () => {

const [val, setVal] = useState("");
const textAreaRef = useRef(null);

useEffect(() => {
  textAreaRef.current.style.height = 'auto';
  textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
}, [val])

const handleChange = (e) => {
  setVal(e.target.value);
}

  return (
    <>
        <div className="w-full flex justify-center items-center mt-6 relative">
            <textarea placeholder="Message" rows={1} ref={textAreaRef} name="" id="" className="scrollbar-hide text-white text-lg w-4/6 p-3 px-5 bg-[#2E3035] border border-[#515359] focus:outline-none focus:border-2 rounded-xl" value={val} onChange={handleChange}></textarea>
            <button className="absolute right-60 text-[#55B500] text-3xl"><IoSend /></button>
        </div>
    </>
  )
}

export default ChatText