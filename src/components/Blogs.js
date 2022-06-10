import React from "react";
import Footer from "./Protfolio/Footer";
import Typical from "react-typical";
const Blogs = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center h-screen">
        <div class="stats shadow w-80 md:w-96 text-center bg-gradient-to-r from-green-400 to-blue-500 h-48">
          <div class="stat">
            <div class="stat-title">Articles</div>
            <div class="stat-value">Blogs</div>
            <div class="stat-desc">Here we go</div>
            <div class="stat-value">
              <Typical steps={["Coming soon", 1000, "Let's write!", 500]} loop={Infinity} wrapper="p" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
