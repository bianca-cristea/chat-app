import React, { useState } from "react";
import GenderCheckbox from "../components/GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckbox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

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
        <form onSubmit={handleSubmit} className="pt-2 pb-5">
          <div>
            <label className="label pt-1 pl-2">
              <span className="text-l text-white label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full h-10 max-w-xs"
              value={inputs.fullName}
              //mai jos se creeaza un nou obiect care conține toate proprietățile din inputs (prin { ...inputs }) și suprascrie valoarea proprietății fullName
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckbox}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm hover-underline hover:text-white mt-3 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="mt-2 hover:bg-transparent hover:text-white hover:border-transparent font-normal text-white btn btn-xs sm:btn-sm md:btn-md shadow-lg bg-transparent lg:btn-lg"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
