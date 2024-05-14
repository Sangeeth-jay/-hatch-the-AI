import Logo from "../assets/logo.png";
const LogIn = () => {

  const user = "san";
  const password = "123";

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const enteredUser = formData.get('user');
    const enteredPassword = formData.get('password');
    if (enteredUser === user && enteredPassword === password) {
      window.location.href = "/dashboard";
    } else {
      alert("Invalid username or password");
    }
  }


  return (
    <div className="flex justify-center items-center h-screen bg-[#383A40]">
      <div className=" bg-[#2E3035] w-1/4 h-3/4 flex flex-col justify-center items-center rounded-3xl gap-2">
        <div>
          <img src={Logo} alt="logo" className="w-20" />
          <h1 className="text-white text-2xl font-bold">#hatch</h1>
        </div>
        <h1 className="text-white text-3xl font-bold">Log In</h1>
          <div className="flex flex-col gap-2 w-full justify-center items-center mt-4">
          <input
            type="text"
            name="user"
            id=""
            placeholder="enter mobile number"
            className="w-3/4 h-12 bg-[#383A40] text-white rounded-xl  text-center focus:outline-none focus:ring-1 focus:ring-[#515359]"
          />
          <input
            type="password"
            name=""
            id="password"
            placeholder="enter password"
            className="w-3/4 h-12 bg-[#383A40] text-white rounded-xl  text-center focus:outline-none focus:ring-1 focus:ring-[#515359]"
          />
          <button onClick={handleSubmit} className="w-3/4 h-12 bg-[#55B500] text-white font-bold mt-4 rounded-xl hover:bg-[#8ad449] duration-200 ease-in-out active:scale-95">
            Log In
          </button>
          </div>
        <p className="text-white text-sm">
          Need an account? &nbsp;
          <span className="text-[#55B500] font-bold"><a href="">Sign Up</a></span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
