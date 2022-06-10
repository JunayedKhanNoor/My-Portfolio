import React from "react";
import t from "../../assets/trust.gif";
import c from "../../assets/car.gif";
import i from "../../assets/immi.gif";
const Projects = () => {
  return (
    <div>
      <section>
        <div className="stats bg-primary text-primary-content max-w-3xl mx-auto block my-6">
          <div className="stat">
            <div className="stat-value text-center">My Projects</div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1   gap-4 ">
          <div className="">
            <div className="max-w-3xl mx-auto my-3">
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
              <h1 className="text-3xl font-bold text-secondary">Description: </h1>
              <ul className="list-disc my-3">
                <li>
                  This application is a manufacturer management application for tools manufacturer.
                </li>
                <li>
                  Where tools manufacturer can upload their products and update and manage their
                  stokes.
                </li>
                <li>
                  They can limit minimum purchase quantity for vendors. Dashboard designed for admin
                  and user.
                </li>
              </ul>
              <h1 className="text-3xl font-bold text-secondary my-3">Technologies: </h1>
              <h3 className="text-md font-bold  my-3">
                HTML, CSS, Tailwind CSS, React, Firebase Authentication, Express, MongoDB, Heroku,
                React Hook Form, React Query, Stripe
              </h3>
            </div>

            <img className="max-w-3xl mx-auto" src={t} alt="" />
          </div>
          <div className="">
            <div className="max-w-3xl mx-auto my-3">
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
              <h1 className="text-3xl font-bold text-secondary">Description: </h1>
              <ul className="list-disc my-3">
                <li>
                  This application is a manufacturer management application for tools manufacturer.
                </li>
                <li>
                  Where tools manufacturer can upload their products and update and manage their
                  stokes.
                </li>
                <li>
                  They can limit minimum purchase quantity for vendors. Dashboard designed for admin
                  and user.
                </li>
              </ul>
              <h1 className="text-3xl font-bold text-secondary my-3">Technologies: </h1>
              <h3 className="text-md font-bold  my-3">
                HTML, CSS, Tailwind CSS, React, Firebase Authentication, Express, MongoDB, Heroku,
                React Hook Form, React Query, Stripe
              </h3>
            </div>
            <img className="max-w-3xl mx-auto" src={c} alt="" />
          </div>
          <div className="">
            <div className="max-w-3xl mx-auto my-3">
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
              <h1 className="text-3xl font-bold text-secondary">Description: </h1>
              <ul className="list-disc my-3">
                <li>
                  This application is a manufacturer management application for tools manufacturer.
                </li>
                <li>
                  Where tools manufacturer can upload their products and update and manage their
                  stokes.
                </li>
                <li>
                  They can limit minimum purchase quantity for vendors. Dashboard designed for admin
                  and user.
                </li>
              </ul>
              <h1 className="text-3xl font-bold text-secondary my-3">Technologies: </h1>
              <h3 className="text-md font-bold  my-3">
                HTML, CSS, Tailwind CSS, React, Firebase Authentication, Express, MongoDB, Heroku,
                React Hook Form, React Query, Stripe
              </h3>
            </div>
            <img className="max-w-3xl mx-auto" src={i} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
