import React from "react";

const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg">
        <div className="flex justify-evenly">
          <h1 className=" pt-5 text-2xl font-semibold text-center text-white">
            Login <span className="text-blue-400">Chirp</span>Connect
          </h1>
          <img
            src="src\assets\chatimity _ parrot _ logo design.jpeg"
            alt="bird logo"
            className="w-20 h-22"
          />
        </div>
        <form className="pt-5 pb-5">
          <div>
            <label className="label p-2">
              <span className="text-xl text-white label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label pt-5 p-2">
              <span className="text-xl text-white label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <a
            href="#"
            className="text-sm hover-underline hover:text-white mt-6 inline-block"
          >
            Don't have an account?
          </a>
          <div>
            <button className="mt-6 hover:bg-transparent hover:text-white hover:border-transparent font-normal text-white btn btn-xs sm:btn-sm md:btn-md shadow-lg bg-transparent lg:btn-lg">
              Login
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
