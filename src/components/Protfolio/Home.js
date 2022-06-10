import React from "react";
import Footer from "./Footer";
import Typical from "react-typical";
import tr from "../../assets/Video/tr.mp4";
import cr from "../../assets/Video/cr.mp4";
import im from "../../assets/Video/im.mp4";
const Home = () => {
  return (
    <div className="bg-neutral p-12">
      <div className="text-white text-4xl font-bold text-center mb-12">
        <Typical steps={["My Projects", 1000, "Here It Is", 1000]} loop={Infinity} wrapper="p" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 justify-items-center">
        <div class="card w-full bg-base-100 shadow-xl">
          <video autoPlay={true} src={tr} loop muted></video>
          <div class="card-body">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div class="card w-full bg-base-100 shadow-xl">
          <video autoPlay={true} src={cr} loop muted></video>
          <div class="card-body">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div class="card w-full bg-base-100 shadow-xl">
          <video autoPlay={true} src={im} loop muted></video>
          <div class="card-body">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
