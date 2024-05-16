import React from "react";
import GenderCheckbox from "../components/GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto my-auto">
      <div className="w-full p-6 rounded-lg shadow-lg">
        <div className="flex justify-evenly">
          <h1 className=" pt-5 text-xl font-semibold text-center text-white">
            SignUp <span className="text-blue-400">Chirp</span>Connect
          </h1>
          <img
            src="src\assets\chatimity _ parrot _ logo design.jpeg"
            alt="bird logo"
            className="w-16 h-18 bird-logo"
          />
        </div>
        <form className="pt-2 pb-5">
          <div>
            <label className="label pt-1 pl-2">
              <span className="text-l text-white label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full h-10 max-w-xs"
            />
          </div>
          <div>
            <label className="label pt-1 pl-2">
              <span className="text-l text-white label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full h-10 max-w-xs"
            />
          </div>
          <div>
            <label className="label pt-1 pl-2">
              <span className="text-l text-white label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full h-10 max-w-xs"
            />
          </div>
          <div>
            <label className="label pt-1 pl-2">
              <span className="text-l text-white label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full h-10 max-w-xs"
            />
          </div>
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover-underline hover:text-white mt-3 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="mt-2 hover:bg-transparent hover:text-white hover:border-transparent font-normal text-white btn btn-xs sm:btn-sm md:btn-md shadow-lg bg-transparent lg:btn-lg">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
