import React from "react";
import Footer from "./Footer";
import myImage from "../../assets/Junayed.jpg";
const AboutMe = () => {
  return (
    <div className="mt-20">
      <div>
        <div class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg m-full md:max-w-3xl mx-auto my-12">
          <span class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div class="justify-between sm:flex">
            <div>
              <h5 class="text-2xl font-bold text-gray-900">MERN Stack software developer</h5>
              <p class="mt-1 text-lg font-medium text-gray-600">Mohammad Junayed Khan Noor</p>
              <p class="mt-1 text-sm font-medium text-gray-600">Green University of bangladesh</p>
              <p class="mt-1 text-sm font-medium text-gray-600">CSE Department</p>
              <p class="mt-1 text-sm font-medium text-gray-600">2021</p>
            </div>

            <div class="flex-shrink-0 hidden ml-3 sm:block">
              <img class="object-center w-28 h-28 rounded-lg shadow-sm" src={myImage} alt="" />
            </div>
          </div>

          <div class="mt-4 sm:pr-8">
            <p class="text-sm text-gray-500">
              My Goal: InshAllah, I will complete programming hero web development course on time
              after that I will focus other opportunities provided by Programming Hero and also take
              preparation for Job interview and keep searching Job and keep applying. I will also
              focus on backend development, problem solving in LeetCode and also keep trying to
              improve skill as a frontend developer.
            </p>
          </div>

          <dl class="flex mt-6">
            <div class="flex flex-col-reverse">
              <dt class="text-sm font-medium text-gray-600">HTML, CSS, React JS, Express JS, Node JS, MongoDB, Tailwind CSS, Bootstrap, Firebase Authentication, React Hook Form, React Query</dt>
              <dd class="text-lg text-gray-500">Technologies</dd>
            </div>

          </dl>
          <dl class="flex mt-6">
            <div class="flex flex-col-reverse">
              <dt class="text-sm font-medium text-gray-600">Reading, Book Collecting, Traveling, Football, Cricket, Badminton, Sleeping</dt>
              <dd class="text-lg text-gray-500">What I Likes!</dd>
            </div>
          </dl>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutMe;
