import React from "react";

export default function Comment() {
  return (
    <div class="post-section mt-2 mb-2 ml-2 mr-2 mx-auto min-w-fit pt-4 ">
      <div class="flex flex-row w-40 justify-around items-center">
        <a href="/profil">
          <img
            class="w-8 h-8 rounded-full"
            src="https://source.unsplash.com/gySMaocSdqs/600x300"
            alt="user photo"
          />
        </a>
        <a href="/profil">
          <span class="font-bold">Masmudi</span>
        </a>
      </div>
      <div class="p-5">
        <p class="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
      <div className="flex flex-row mb-4 w-1/3 ml-4">
        <div className="upvote flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-up-fill"
            viewBox="0 0 16 16"
            className="text-white stroke-black cursor-pointer"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
          <span className="ml-2">1324</span>
        </div>
        <div className="downvote flex flex-row items-center ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
            className="text-white stroke-black cursor-pointer"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
          <span className="ml-2">656</span>
        </div>
        <div className="comment flex flex-row items-center ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chat"
            viewBox="0 0 16 16"
            className="cursor-pointer"
          >
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
          </svg>
          <span className="ml-2">3</span>
        </div>
      </div>
    </div>
  );
}
