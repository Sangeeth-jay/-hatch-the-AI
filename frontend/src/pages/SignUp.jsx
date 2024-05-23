import Logo from "../assets/logo.png";
import TextFiled from "../components/TextFiled";
import CommonBtn from "../components/CommonBtn";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    retype: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }


  const handleSubmit = () => {
    console.log('name:', formData.userName);
    console.log('email:', formData.email);
    console.log('password:', formData.password);
    console.log('retype:', formData.retype);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#383A40]">
        <div className=" bg-[#2E3035] w-1/4 h-3/4 flex flex-col justify-center items-center rounded-3xl gap-2">
          <div>
            <img src={Logo} alt="logo" className="w-20" />
            <h1 className="text-white text-2xl font-bold">#hatch</h1>
          </div>
          <h1 className="text-white text-3xl font-bold">Sign up</h1>
          <div className="flex flex-col gap-3 w-full justify-center items-center mt-4">
            <TextFiled
              type={"text"}
              width={"w-3/4"}
              text={"Your Name"}
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
            <TextFiled
              type={"text"}
              width={"w-3/4"}
              text={"Email"}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextFiled
              type={"password"}
              width={"w-3/4"}
              text={"Password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <TextFiled
              type={"password"}
              width={"w-3/4"}
              text={"Password-retype"}
              name="retype"
              value={formData.retype}
              onChange={handleChange}
            />
            <CommonBtn width="w-3/4" text="Sign up" onClick={handleSubmit} />
          </div>
          <p className="text-white text-sm">
            Need an account? &nbsp;
            <span className="text-[#55B500] font-bold">
              <a href="/login">Log in</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
