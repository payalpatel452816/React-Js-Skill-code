import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div class="container px-4  my-10 mx-auto">
        <div class="max-w-lg mx-auto">
          <div class="text-center mb-6">
            <h2 class="text-3xl md:text-4xl ">Login</h2>
          </div>
          <form action="">
            <div class="mb-6">
              <label class="block mb-2 " for="">
                Email
              </label>
              <input
                class="inline-block w-full p-4 leading-6 text-lg   placeholder-gray-400 bg-white shadow border-2 border-indigo-900 rounded"
                type="email"
                placeholder="Email*"
              />
            </div>
            <div class="mb-6">
              <label class="block mb-2 " for="">
                Password
              </label>
              <input
                class="inline-block w-full p-4 leading-6 text-lg  placeholder-gray-400 bg-white shadow border-2 border-indigo-900 rounded"
                type="password"
                placeholder="pasword*"
              />
            </div>
            <div class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div class="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label for="">
                  <input type="checkbox" />
                  <span class="ml-1 font-extrabold">Remember me</span>
                </label>
              </div>
              <div class="w-full lg:w-auto px-4">
                <a class="inline-block font-extrabold hover:underline" href="#">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="flex">
            <button
              class="ml-auto w-[200px] bg-gray-800 text-white  p-2 rounded font-semibold hover:bg-gray-900"
              type="submit"
            >
              Log In
            </button>
            <p class="text-center  mt-2  hover:text-red-500 underline font-black">
              New Custmer ? Create your account{" "}
            </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
