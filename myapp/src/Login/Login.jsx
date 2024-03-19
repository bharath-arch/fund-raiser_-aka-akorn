import React from "react";
import Logo from "../assets/logo.png";
import setBodyColor from "../setBodyColor";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
// import Helmet from 'react-helmet';
function Login() {
  setBodyColor({ color: "gray" });

  return (
    <div>
      {/* <Helmet bodyAttributes={{style: 'background-color : #fff'}}/> */}
      <div className="">
          <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Akron</span>
        </div>

      <div className="flex justify-center text-center items-center mt-[2rem]">
        <div className="bg-slate-50 h-[32rem] w-[25rem] rounded-[39px] ">
          <div className="mt-9 font-bold text-3xl">Get Started</div>
          <div className="mt-10 text-left ml-9 mr-6">
            <p className="text-[0.75rem] font-serif font-light mb-2">
              Email or Mobile number
            </p>
            <form action="#">
              <input
                type="text"
                className=" border-2 rounded-lg w-[100%]  p-2"
                placeholder="Email or Mobile number"
              />
              <p className="text-[0.75rem] mr-4 font-serif font-light mt-2">
                By clicking Continue, you agree to our{" "}
                <span className="text-blue-800">Terms & Conditions</span> and{" "}
                <span className="text-blue-800">Privacy Policy</span> Continue
              </p>
              <div className="flex justify-center items-center  ">
                <button className="mt-3 text-center border-2 rounded-lg w-[100%] p-2 font-arima bg-blue-600 text-white text-xl items-center">
                 <Link to={"/verification"}>Continue </Link> 
                </button>
              </div>
            </form>

            <div class="flex py-5 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">OR</span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <div className="flex justify-between border-2 p-2 rounded-lg text-center items-center">
              <span className="">
                <FcGoogle size={26} />
              </span>
              <span className="mr-16 font-arima">Continue with Google</span>
            </div>
            <div className="text-center items-center text-[0.75rem] mr-4 font-serif font-light  mt-2">
              <p>
                <span>Don’t have an account? </span>{" "}
                <span className="text-blue-800">Sign up instead</span>
              </p>
              <p>
                <span className="text-blue-800">Login as Founder</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;