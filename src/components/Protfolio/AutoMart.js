import React from "react";
import tr2 from "../../assets/Car/car1.png";
import tr1 from "../../assets/Car/car2.png";
import tr3 from "../../assets/Car/car3.png";
import Footer from "./Footer";

const AutoMart = () => {
  return (
    <div className="mt-20">
      <div className="">
        <div className="max-w-7xl mx-auto my-3">
          <h1 className="text-3xl font-bold">
            Auto-Mart{" "}
            <span className="text-lg text-secondary">(automobile warehouse management) </span>
          </h1>
          <div className="flex gap-3">
            <span
              onClick={() => window.open("https://auto-mart-45993.web.app/")}
              className="my-5  text-lg  flex hover:text-blue-500"
              role="button"
            >
              <div className="mr-2 underline">Live Site</div>
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://github.com/JunayedKhanNoor/auto-mart-automobile-warehuse-management-client-app"
                )
              }
              className="my-5  text-lg  flex hover:text-blue-500"
              role="button"
            >
              <div className="mr-2 underline">Client Side Code</div>
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://github.com/JunayedKhanNoor/auto-mart-automobile-warehuse-management-server-side-app-"
                )
              }
              className="my-5  text-lg  flex hover:text-blue-500"
              role="button"
            >
              <div className="mr-2 underline">Server Side Code</div>
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
              It's an inventory management web application for managing automobile store and dealers
            </li>
            <li>Single Page web application, Google Authentication (Sign In | Sign Up)</li>
            <li>
              Dealers can update and manage their stokes, Responsive for Desktop and Mobile Screen
            </li>
          </ul>
          <h1 className="text-3xl font-bold text-secondary my-3">Technologies: </h1>
          <h3 className="text-md font-bold  my-3">
            HTML, CSS, Bootstrap, React, Firebase Authentication, Express, MongoDB, Heroku, React
            Hook Form
          </h3>
        </div>
        {/* <img className="max-w-3xl mx-auto" src={t} alt="" /> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AutoMart;
