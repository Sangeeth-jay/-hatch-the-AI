/* eslint-disable react/prop-types */
const TextFiled = (props) => {
  const { text, width, type, name, value, onChange } = props;

  return (
    <>
      <div className={width}>
        <label className="relative">
          <input
            required
            type={type}
            className="w-full h-10 px-3 py-2 bg-[#383A40] text-white rounded-lg focus:outline-none focus:border focus:border-[#515359] peer"
            name={name}
            value={value}
            onChange={onChange}
          />
          <span className="absolute left-0 top-0 px-3 text-md text-gray-400 peer-focus:text-[#b9bbc1] pointer-events-none duration-200 peer-focus:text-xs peer-focus:-translate-y-5 peer-focus:px-2 peer-focus:bg-[#2E3035] peer-focus:rounded-lg peer-valid:text-xs peer-valid:-translate-y-5">
            {text}
          </span>
        </label>
      </div>
    </>
  );
};

export default TextFiled;
