import React, { useEffect } from "react";
import { usePost } from "../context/postContext";

/**   
 * Acabo de traer todos los post. Me falta estilizarlo un poco, pero todo bien.
 * 
 */

const Post = () => {
  const { getPosts, posts } = usePost();
  
  useEffect(() => {
    getPosts()
  }, []);
  return (
    <>
     
      {posts.map((post) => 
        (<div post={post} key={posts._id} className="w-full bg-gray-700 p-4 justify-center items-center m-auto container" >
          <h1 className="text-2xl font-bold mb-6 text-center text-white">{post.title}</h1>
          <p>{post.user}</p>
          <p className="text-black">{post.body}</p>
          <img src="{post.picturePath}" alt="no funciono" />
        </div>)
      )}
    </>
  );
};

export default Post;
