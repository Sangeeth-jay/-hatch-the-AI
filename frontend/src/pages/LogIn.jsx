import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import CommonBtn from "../components/CommonBtn";
import TextFiled from "../components/TextFiled";

const LogIn = () => {
  const user = "san";
  const password = "123";

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (user === formData.email && password === formData.password){
      navigate('/dashboard');
    } else {
      alert('Incorrect email or password');
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#383A40]">
        <div className=" bg-[#2E3035] w-1/4 h-3/4 flex flex-col justify-center items-center rounded-3xl gap-2">
          <div>
            <img src={Logo} alt="logo" className="w-20" />
            <h1 className="text-white text-2xl font-bold">#hatch</h1>
          </div>
          <h1 className="text-white text-3xl font-bold">Log In</h1>
          <div className="flex flex-col gap-3 w-full justify-center items-center mt-4">
            <TextFiled type={"text"} width={"w-3/4"} text={"Enter email"} name="email" value={formData.email} onChange={handleChange} />
            <TextFiled type={"password"} width={"w-3/4"} text={"Enter password"} name="password" value={formData.password} onChange={handleChange} />
            <CommonBtn
              width="w-3/4"
              text="Log In"
              onClick={handleSubmit}
            />
          </div>
          <p className="text-white text-sm">
            Need an account? &nbsp;
            <span className="text-[#55B500] font-bold">
              <a href={"/signup"}>Sign Up</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
