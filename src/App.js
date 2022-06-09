import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyPortfolio from './components/Protfolio/MyPortfolio';

function App() {
  return (
    <div >
      <MyPortfolio></MyPortfolio>
      <ToastContainer />
    </div>
  );
}

export default App;
