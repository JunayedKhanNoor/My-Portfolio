import React from "react";
import Footer from "./Footer";
import Typical from "react-typical";
import tr from "../../assets/Video/tr.mp4";
import cr from "../../assets/Video/cr.mp4";
import im from "../../assets/Video/im.mp4";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate =  useNavigate();
  return (
    <div className="bg-neutral p-12">
      <div className="text-white text-4xl font-bold text-center mb-12">
        <Typical steps={["My Projects", 1000, "Here It Is", 1000]} loop={Infinity} wrapper="p" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 justify-items-center">
        <div className="card w-full bg-base-100 shadow-xl">
          <video autoPlay={true} src={tr} loop muted></video>
          <div className="card-body">
            <h2 className="card-title">
              Trust Accessories!
            </h2>
            <div className="badge badge-secondary p-3">Manufacture Management</div>
            <p>Web application for managing Stocks of a industry with amazing Dashboard.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">React JS</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">Tailwind CSS</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">Express JS</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">Node JS</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">MongoDB</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">Firebase Authentication</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">JWT Token</div>
            </div>
            <button onClick={()=>navigate('/trust')} className="btn mt-2">Project Details</button>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <video autoPlay={true} src={cr} loop muted></video>
          <div className="card-body">
            <h2 className="card-title">
            Auto-Mart!
            </h2>
            <div className="badge badge-secondary p-3">Inventory Management</div>
            <p>Web application for managing automobile store and dealers.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">React JS</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">JWT web token</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">Express JS</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">Node JS</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">MongoDB</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">Firebase Authentication</div>
            </div>
            <button onClick={()=>navigate('/autoMart')} className="btn mt-2">Project Details</button>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <video autoPlay={true} src={im} loop muted></video>
          <div className="card-body">
            <h2 className="card-title">
            Immigration Lab!
            </h2>
            <div className="badge badge-secondary p-3">Individual Service Provider</div>
            <p>It's a immigration consultancy website for immigration consultant.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">React JS</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">Bootstrap</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">Vanilla CSS</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">React Router</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">React Firebase Hooks</div>
              <div className="badge badge-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold p-3">Firebase</div>
            </div>
            <button onClick={()=>navigate('/immigration')} className="btn mt-2">Project Details</button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
