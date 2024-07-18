
const ChatHistry = (props) => {

    const {tit} = props;

  return (
    <>
        <div className="pl-4 flex justify-start items-center w-full py-2 rounded-xl text-gray-400 cursor-pointer hover:bg-[#2E3035] hover:text-gray-300 duration-200">
            <p>{tit}</p>
        </div>
    </>
  )
}

export default ChatHistry