import React from "react";

const ProfileCard = () => {
  return (
    <div className="left-0 w-5/6 mx-auto mt-8">
      <div class=" bg-gray-800 font-sans h-screen w-full flex flex-row justify-center items-center right-0 ">
        <div class="card w-96 mx-auto  bg-gray-800  shadow-xl hover:shadow">
          <img
            class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
            src="https://avatars.githubusercontent.com/u/67946056?v=4"
            alt=""
          />
          <div class="text-center mt-2 text-3xl font-medium">Ajo Alex</div>
          <div class="text-center mt-2 font-light text-sm">@devpenzil</div>
          <div class="text-center font-normal text-lg">Kerala</div>
          <div class="px-6 text-center mt-2 font-light text-sm">
            <p>
              Front end Developer, avid reader. Love to take a long walk, swim
            </p>
          </div>

          <div class="flex p-4">
            <div class="w-1/2 text-center">
              <span class="font-bold">1.8 k</span> Followers
            </div>
            <div class="w-0 border border-gray-300"></div>
            <div class="w-1/2 text-center">
              <span class="font-bold">2.0 k</span> Following
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
