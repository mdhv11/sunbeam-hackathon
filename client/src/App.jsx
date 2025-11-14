import { ToastContainer } from "react-toastify";
import "./App.css";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
