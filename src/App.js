import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyPortfolio from './components/Protfolio/MyPortfolio';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  AOS.init();
  return (
    <div >
      <MyPortfolio></MyPortfolio>
      <ToastContainer />
    </div>
  );
}

export default App;
