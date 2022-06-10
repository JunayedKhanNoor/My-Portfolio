import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyPortfolio from './components/Protfolio/MyPortfolio';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from './components/Protfolio/Navbar';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Protfolio/Projects';
import Contact from './components/Protfolio/Contact';
import ProjectsGallary from './components/Protfolio/ProjectsGallary';
import ImmigrationLab from './components/Protfolio/ImmigrationLab';
import AutoMart from './components/Protfolio/AutoMart';
import TrustAccessories from './components/Protfolio/TrustAccessories';

function App() {
  AOS.init();
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<MyPortfolio></MyPortfolio>}></Route>
      {/* <Route path='/projects' element={<Projects></Projects>}></Route> */}
      <Route path='/projects' element={<ProjectsGallary></ProjectsGallary>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/trust' element={<TrustAccessories></TrustAccessories>}></Route>
      <Route path='/autoMart' element={<AutoMart></AutoMart>}></Route>
      <Route path='/immigration' element={<ImmigrationLab></ImmigrationLab>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
