import React from 'react';
import tr1 from "../../assets/Immigration/im1.png";
import tr2 from "../../assets/Immigration/im2.png";
import tr3 from "../../assets/Immigration/im3.png";
import Footer from "./Footer";
const ImmigrationLab = () => {
    return (
        <div className="mt-20">
      <div className="">
        <div className="max-w-7xl mx-auto my-3">
          <h1 className="text-3xl font-bold">
          Immigration-Lab{" "}
            <span className="text-lg text-secondary">(Immigration consultancy website) </span>
          </h1>
          <div className="flex gap-3">
            <span
              onClick={() => window.open("https://immigration-lab.web.app/")}
              className="my-5  text-lg  flex hover:text-blue-500"
              role="button"
            >
              <div className="mr-2 underline">Live Site</div>
            </span>
            <span
              onClick={() =>
                window.open("https://github.com/JunayedKhanNoor/Immigration-Lab-independent-service-provider")
              }
              className="my-5  text-lg  flex hover:text-blue-500"
              role="button"
            >
              <div className="mr-2 underline">Code</div>
            </span>
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div
                className="border-2 p-6"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img className="object-cover hover:scale-150 duration-1000" src={tr1} alt="" />
              </div>
              <div>
                <div
                  className="border-2 p-6 mb-6"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img className="object-cover hover:scale-150 duration-1000" src={tr2} alt="" />
                </div>
                <div
                  className="border-2 p-6"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <img className="object-cover hover:scale-150 duration-1000" src={tr3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-secondary">Description: </h1>
          <ul className="list-disc my-3">
            <li>
            It's an immigration consultancy website for immigration consultant, Single Page web application.
            </li>
            <li>
            User can see what service provides by consultants.
            </li>
            <li>
            Google Authentication (Sign In | Sign Up), Sign in with GitHub implemented.
            </li>
          </ul>
          <h1 className="text-3xl font-bold text-secondary my-3">Technologies: </h1>
          <h3 className="text-md font-bold  my-3">
          HTML, CSS, Bootstrap, React, Firebase Authentication, React Router
          </h3>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default ImmigrationLab;