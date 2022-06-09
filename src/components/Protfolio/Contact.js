import React from "react";

const Contact = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Contact With Me!</h1>
          <p class="py-6">
          I am Mohammad Junayed Khan Noor. I am working on React JS, Node JS, MongoDB, Express JS. Please feel free to communicate.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Send Email</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
