import Img from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import { TbSettingsFilled } from "react-icons/tb";

const SideBar = () => {
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
              <hr className="mt-2" />
            </div>
          </div>

          <div></div>

          <div>
            <hr className="mb-2" />
            <div className="flex flex-col justify-center items-center py-2 rounded-xl bg-[#2E3035] ">
              <button className="text-4xl text-gray-500">
                <TbSettingsFilled />
              </button>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
