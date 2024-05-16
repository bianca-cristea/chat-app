import React from "react";
import Sidebar from "../components/Sidebar";
import MessageContainer from "../components/MessageContainer";

const Home = () => {
  return (
    <>
      <div className="w-1/4 h-full rounded-lg shadow-lg">
        <Sidebar />
      </div>
      <div className="w-3/4 h-full rounded-lg shadow-lg">
        <MessageContainer />
      </div>
    </>
  );
};

export default Home;
