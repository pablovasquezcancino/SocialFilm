import React from "react";
import Navbar from "../components/Navbar.jsx";
import NewPost from "../components/NewPost.jsx";
import PruebaPost from "../components/PruebaPost.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import LeftSide from "../components/LeftSide.jsx";

const Feed = () => {
  return (
    <div className=" bg-slate-900">
      <Navbar />

      <div className="flex w-11/12 ">
        <LeftSide />
        <div className="container  w-5/6  bg-gray-800 gap-8">
          <NewPost />
          <PruebaPost />
        </div>
      </div>
    </div>
  );
};

export default Feed;
