import React from "react";
import { toast } from "react-toastify";
import me from '../../assets/Junayed.jpg'
const Contact = () => {
  const handleSubmit=e=>{
    e.preventDefault();
    e.target.reset();
    toast('Thanks!')
  }
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <img src={me} alt="" className="rounded-full h-60 w-60 border-4"/>
          <h1 class="text-5xl font-bold">Contact With Junayed!</h1>
          <p class="py-6">
          I am Mohammad Junayed Khan Noor  from Dhaka, Bangladesh. I am working on React JS, Node JS, MongoDB, Express JS. Please feel free to communicate.
          </p>
          <p class="py-2">
            Call: +8801303021131
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit}>
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" class="input input-bordered" required/>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" required/>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea class="textarea textarea-bordered" placeholder="Bio" required></textarea>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" type="submit">Send Email</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
