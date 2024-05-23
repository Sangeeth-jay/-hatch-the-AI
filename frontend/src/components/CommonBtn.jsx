
const CommonBtn = (props) => {

const { width, text, onClick } = props

  return (
    <>
      <button onClick={onClick} className={`${width} h-12 bg-[#55B500] text-white font-bold mt-4 rounded-xl hover:bg-[#8ad449] duration-200 ease-in-out active:scale-95`}>{text}</button>
    </>
  )
}

export default CommonBtn