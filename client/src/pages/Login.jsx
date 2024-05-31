import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

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
        <form onSubmit={handleSubmit} className="pt-5 pb-5">
          <div>
            <label className="label p-2">
              <span className="text-xl text-white label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/register"
            className="text-sm hover-underline hover:text-white mt-6 inline-block"
          >
            Don't have an account?
          </Link>
          <div>
            <button
              className="mt-6 hover:bg-transparent hover:text-white hover:border-transparent font-normal text-white btn btn-xs sm:btn-sm md:btn-md shadow-lg bg-transparent lg:btn-lg"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
