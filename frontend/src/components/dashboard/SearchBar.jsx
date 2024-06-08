import { RiSearch2Line } from "react-icons/ri";

const SearchBar = () => {
  return (
    <>
      <div className="relative w-full">
      <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="input input-bordered w-full pl-12 py-1 rounded-full bg-[#2E3035] text-lg text-white focus:outline-none focus:border focus:border-[#515359] placeholder:text-gray-500"
          />
          <div className=" absolute top-1/2 right-3 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white">
            <RiSearch2Line/>
          </div>
      </div>
    </>
  );
};

export default SearchBar;
