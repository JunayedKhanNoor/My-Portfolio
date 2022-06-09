import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyPortfolio from './components/Protfolio/MyPortfolio';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from './components/Protfolio/Navbar';

function App() {
  AOS.init();
  return (
    <div >
      <Navbar></Navbar>
      <MyPortfolio></MyPortfolio>
      <ToastContainer />
    </div>
  );
}

export default App;
