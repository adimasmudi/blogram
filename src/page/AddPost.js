import React from "react";
import Navigation from "../components/Navigation";

export default function AddPost() {
  return (
    <div>
      <Navigation />
      <div className="mt-20 w-5/6 mx-auto">
        <form action="" method="POST">
          <div class="mb-6">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-black dark:text-black"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              class="block rounded-lg p-2.5 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Your post title"
            />
          </div>
          <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
              <textarea
                id="editor"
                rows="8"
                class="block w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 rounded-lg"
                placeholder="Write a post"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish post
          </button>
        </form>
      </div>
    </div>
  );
}
