import { useEffect } from "react";
import { usePost } from "../context/postContext";

const PruebaPost = () => {
  const { getPosts, posts } = usePost();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div className=" flex justify-center items-center bg-gray-800 mt-8 ">
          <div className=" bg-slate-900 text-white rounded-lg w-full mx-5 md:w-[40rem]  space-y-6 p-10">
            {/**Header */}
            <div className="flex space-x-4 items-center ">
              
              <div className="w-12 h-12">
                
                <img
                  alt="avatar"
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  className="rounded-full w-full h-full object-cover "
                /> 
                <div></div>
              </div>
              <div className="space-y-2">
                <div className="flex space-x-2 items-center">
                  <h2 className="text-base"> {post.user}</h2>
                  <svg
                    className="h-4 w-4 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="  text-xs text-slate-400">
                    posted an update
                  </div>
                </div>
                <p className=" text-xs text-slate-400">10 Monthes Ago</p>
              </div>
            </div>

            {/**Contenido */}
            <div>
              <p className="text-sm leading-6 text-slate-300">{post.body}</p>
            </div>

            {/**Grid de imagenes */}

            <div className="grid grid-cols-6 col-span-2   gap-2  ">
              <div className=" overflow-hidden rounded-xl col-span-6">
                <img
                  className="h-full w-full object-cover "
                  src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                />
              </div>
            </div>

            {/**Comentarios */}

            <div className="flex justify-between pt-5">
              <svg
                className="h-4 w-4 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                />
              </svg>

              <div className="text-slate-400 text-sm">
                <p>comentarios</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PruebaPost;
