import React from "react";
import { toast } from "react-toastify";
import me from "../../assets/Junayed.jpg";
import Typical from "react-typical";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.description.value);
    e.target.reset();
    toast("Thanks for email!");
  };
  return (
    <div className="hero min-h-screen bg-base-200 mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={me} alt="" className="rounded-full h-60 w-60 border-4" />
          <div className="text-5xl font-bold">
            <Typical
              steps={["Contact With Junayed!", 1000, "JavaScript Developer", 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
          <p className="py-6">
            I am Mohammad Junayed Khan Noor from Dhaka, Bangladesh. I am working on React JS, Node
            JS, MongoDB, Express JS. Please feel free to communicate.
          </p>
          <p className="py-2">Call: +8801303021131</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered"
                  placeholder="Bio"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Send Email
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
