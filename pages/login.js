import React from "react";

import LoginImage from "../assets/images/login.svg";

const Login = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-12 bg-green-50 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <div className="text-2xl tracking-wide ml-2 font-semibold">
              blockify
            </div>
          </div>
        </div>
        <div className="mt-6 px-12 sm:px-24 md:px-48 lg:px-12 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-2xl font-display font-semibold lg:text-left xl:text-4xl
                    xl:text-bold"
          >
            Log in
          </h2>
          <div className="mt-12">
            <form>
              <div>
                <div className=" font-bold text-gray-700 tracking-wide">
                  Email Address
                </div>
                <input
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type=""
                  placeholder="mike@gmail.com"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                </div>
                <input
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type=""
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-10">
                <button className="bg-green-500 text-white uppercase p-4 w-full rounded-full font-semibold hover:bg-green-600">
                  Log In
                </button>
              </div>
            </form>
            <div className="mb-12 lg:mb-0 mt-12 font-display font-semibold text-gray-700 text-center">
              Don't have an account ?{" "}
              <a className="cursor-pointer text-green-500 hover:text-green-600">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-green-50 flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <img src={LoginImage} />
        </div>
      </div>
    </div>
  );
};

export default Login;
