import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import me from '../../assets/Junayed.jpg';
import Typical from 'react-typical';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j8kn29d', 'template_v5i5kg8', form.current, 'tMOELrBbtkOHfsHCu').then(
      (result) => {
        console.log(result.text);
        toast.success('Thanks for email!');
      },
      (error) => {
        console.log(error.text);
        toast.error('Send failed!');
      }
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.description.value);
    e.target.reset();
    toast('Thanks for email!');
  };
  return (
    <div className="hero min-h-screen bg-base-200 mt-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={me} alt="" className="rounded-full h-60 w-60 border-4" />
          <div className="text-5xl font-bold text-primary">
            <Typical
              steps={['Contact With Junayed!', 4000, 'Software Quality Assurance Engineer', 4000]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
          <p className="py-6">
            I am Mohammad Junayed Khan Noor from Dhaka, Bangladesh. Highly motivated software
            engineer in test with experience in manual and automated testing and also full stack
            software development knowledge, as well as time management and collaboration abilities.
          </p>
          <p className="py-2">Call: +1 (561) 913-6060</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* <form onSubmit={handleSubmit}>
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
          </form> */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="card-body">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              {/* <label>Name</label> */}
              <input type="text" name="user_name" className="input input-bordered" />
              {/* <label>Email</label> */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="user_email" className="input input-bordered" />
              {/* <label>Message</label> */}
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea name="message" className="textarea textarea-bordered" />
              <input type="submit" value="Send" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
