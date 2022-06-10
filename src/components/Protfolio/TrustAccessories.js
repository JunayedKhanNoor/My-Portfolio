import React from "react";
import tr1 from "../../assets/Trust/tr1.png";
import tr2 from "../../assets/Trust/tr2.png";
import tr3 from "../../assets/Trust/tr3.png";
import Footer from "./Footer";
const TrustAccessories = () => {
  return (
    <div className="mt-20">
      <div class="">
        <div className="max-w-7xl mx-auto my-3">
          <h1 className="text-3xl font-bold">
            Trust-Accessories{" "}
            <span className="text-lg text-secondary">(manufacture management) </span>
          </h1>
          <div className="flex gap-3">
            <span
              onClick={() => window.open("https://trust-accessories.web.app/")}
              className="my-5  text-lg  flex hover:text-blue-500"
              role="button"
            >
              <div className="mr-2 underline">Live Site</div>
            </span>
            <span
              onClick={() =>
                window.open("https://github.com/JunayedKhanNoor/Trust-Accessories-Client")
              }
              className="my-5  text-lg  flex hover:text-blue-500"
              role="button"
            >
              <div className="mr-2 underline">Client Side Code</div>
            </span>
            <span
              onClick={() =>
                window.open("https://github.com/JunayedKhanNoor/Trust_Accessories-Server")
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
              This application is a manufacturer management application for tools manufacturer.
            </li>
            <li>
              Where tools manufacturer can upload their products and update and manage their stokes.
            </li>
            <li>
              They can limit minimum purchase quantity for vendors. Dashboard designed for admin and
              user.
            </li>
          </ul>
          <h1 className="text-3xl font-bold text-secondary my-3">Technologies: </h1>
          <h3 className="text-md font-bold  my-3">
            HTML, CSS, Tailwind CSS, React, Firebase Authentication, Express, MongoDB, Heroku, React
            Hook Form, React Query, Stripe
          </h3>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TrustAccessories;
