import Img from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import { TbSettingsFilled } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import ChatHistry from "./ChatHistry";

const SideBar = () => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({ rotate: 90 });
  };

  const handleMouseLeave = () => {
    controls.start({ rotate: 0 });
  };

  return (
    <>
      <aside className="h-screen w-1/6">
        <nav className="h-full flex flex-col px-4 justify-between bg-[#262626] border-r border-r-slate-700 py-4">
          <div className=" pb-2 flex flex-col gap-2 justify-center items-center">
            <div className="flex w-full gap-2 bg-[#2E3035] px-4 py-1 rounded-xl">
              <img src={Img} alt="" className="w-14" />
              <div className="flex flex-col text-white">
                <span className="text-lg font-semibold pt-1">The</span>
                <p className="text-2xl font-bold font-serif pr-2">#hatch</p>
              </div>
            </div>
            <div className="">
              <SearchBar />
              <hr className="mt-2 border-[#515359]" />
            </div>
            <div className="w-full flex flex-col justify-center items-center py-2 rounded-xl bg-[#2E3035] ease-in-out duration-200 hover:bg-[#393a3c] active:scale-95 cursor-pointer text-gray-500 hover:text-white">
              <button className="flex justify-center items-center gap-2 font-semibold">
                <FaPlus />
                <p>New Chat</p>
              </button>
            </div>
          </div>

          <div className="h-2/4 flex flex-col gap-1 py-2 px-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-slate-700 scrollbar-track-slate-300">
            <ChatHistry tit={"day 01"} />
            <ChatHistry tit={"day 02"} />
            <ChatHistry tit={"day 03"} />
            <ChatHistry tit={"day 03"} />
            <ChatHistry tit={"day 03"} />
            <ChatHistry tit={"day 03"} />
            <ChatHistry tit={"day 03"} />
            <ChatHistry tit={"day 03"} />
            <ChatHistry tit={"day 03"} />
          </div>

          <div>
            <hr className="mb-2 border-[#515359]" />{" "}
            <motion.div
              className="text-gray-500 hover:text-white flex flex-col justify-center items-center py-2 rounded-xl bg-[#2E3035] ease-in-out duration-200 hover:bg-[#393a3c] active:scale-95 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.button
                animate={controls}
                transition={{ duration: 0.5 , delay: 0.2}}
                className="text-4xl "
              >
                <TbSettingsFilled />
              </motion.button>
            </motion.div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
