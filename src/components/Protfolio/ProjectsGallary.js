import React from "react";
import t from "../../assets/trust.png";
import c from "../../assets/car.png";
import i from "../../assets/immi.png";
import task from "../../assets/to-do.png";
import com from "../../assets/com.png";
import ui from "../../assets/ui.png";

const ProjectsGallary = () => {
  return (
    <div className="mt-20">
      <section className="w-[95%] mx-auto">
        <div
          data-aos="flip-up"
          class="stats bg-gradient-to-r from-cyan-500 to-blue-500 text-primary-content w-[90%] block mx-auto text-center"
        >
          <div class="stat">
            <div class="stat-value">My Projects</div>
            <div class="stat-actions">
              <button class="btn  btn-outline px-12 bg-gradient-to-r from-white to-neutral font-bold text-xl">
                All Projects
              </button>
            </div>
          </div>
        </div>
        <section className="hidden md:block">
          <div className="flex gap-6">
            <div data-aos="zoom-out-down">
              <h1 className="animate-pulse text-center text-4xl  font-bold my-4">To-DO</h1>
              <img src={task} alt="" />
            </div>
            <div data-aos="zoom-out-down">
              <h1 className="animate-pulse text-center text-4xl  font-bold my-4">Next Gen</h1>
              <img src={com} alt="" />
            </div>
          </div>
        </section>
        <section className="hidden md:block">
          <div class="grid grid-rows-3 grid-flow-col gap-8 h-80 my-12 px-6">
            <div data-aos="zoom-out-down" class="row-start-1 row-span-2">
              <h1 className="animate-pulse text-center text-4xl font-bold my-4">
                Trust Accessories
              </h1>
              <img src={t} alt="" />
            </div>
            <div data-aos="zoom-out-down" class="row-start-2 row-span-2">
              <h1 className="animate-pulse text-center text-4xl font-bold my-4">Auto Mart</h1>
              <img src={c} alt="" />
            </div>
            <div data-aos="zoom-out-down" class="row-start-1 row-span-2">
              <h1 className="animate-pulse text-center text-4xl  font-bold my-4">
                Immigration Lab
              </h1>
              <img src={i} alt="" />
            </div>
          </div>
        </section>
        <section className="block md:hidden">
          <div class="grid grid-cols-1 gap-8 my-12 px-6">
            <div data-aos="zoom-out-down">
              <h1 className="animate-pulse text-center text-4xl font-bold my-4">
                Trust Accessories
              </h1>
              <img src={t} alt="" />
            </div>
            <div data-aos="zoom-out-down">
              <h1 className="animate-pulse text-center text-4xl font-bold my-4">Auto Mart</h1>
              <img src={c} alt="" />
            </div>
            <div data-aos="zoom-out-down">
              <h1 className="animate-pulse text-center text-4xl  font-bold my-4">
                Immigration Lab
              </h1>
              <img src={i} alt="" />
            </div>
            <div data-aos="zoom-out-down">
              <h1 className="animate-pulse text-center text-4xl  font-bold my-4">To-DO</h1>
              <img src={task} alt="" />
            </div>
            <div data-aos="zoom-out-down">
              <h1 className="animate-pulse text-center text-4xl  font-bold my-4">Next Gen</h1>
              <img src={com} alt="" />
            </div>
            <div data-aos="zoom-out-down">
              <h1 className="animate-pulse text-center text-4xl  font-bold my-4">Landing Page</h1>
              <img src={ui} alt="" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProjectsGallary;
