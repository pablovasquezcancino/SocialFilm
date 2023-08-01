import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { usePost } from "../context/postContext.jsx";

const NewPost = () => {
  const { register, handleSubmit } = useForm();
  const { createPost } = usePost();
  const [openPost, setOpenPost] = useState();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (post) => {
    createPost(post);
  });

  return (
    <>
      <form className="relative mx-auto bg-gray-800" onSubmit={onSubmit}>
        <div className=" text-center font-bold text-2xl m-5   text-gray-300">
          New Post
        </div>

        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <input
            className="title bg-gray-800  border border-gray-300 p-2 mb-4 rounded-lg outline-none"
            spellcheck="false"
            placeholder="Title"
            type="text"
            name="Nuevo Post"
            onClick={() => setOpenPost(!openPost)}
          />

          {openPost && (
            <div className="w-full z-40 sticky bg-gray-800  mx-auto editor flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
              <input
                className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                spellcheck="false"
                placeholder="Title"
                type="text"
                name="title"
                {...register("title", { required: true })}
              />
              <textarea
                className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                spellcheck="false"
                placeholder="Describe everything about this post here"
                id="body"
                name="body"
                {...register("body", { required: true })}
              ></textarea>
              <input
                className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                placeholder="picturePath"
                type="text"
                name="picturePath"
                {...register("picturePath", { required: true })}
              />
              <div className="flex w-full h-full">
                <button type="submit">
                  <div  className="btn border w-16 my-4 border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
                    Post
                  </div>
                </button>
              </div>
              
                <div onClick={() => setOpenPost(!openPost)} className="btn border w-16  border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
                  Close
                </div>
              
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default NewPost;
