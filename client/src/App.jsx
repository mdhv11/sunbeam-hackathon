import { ToastContainer } from "react-toastify";
import "./App.css";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { Route, Routes } from "react-router-dom";
import Movie_list from "./pages/movie-list/Movie_list";
import Movie_review from "./pages/movie-list/movie_review";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Movie_list" element= {<Movie_list />} />
        <Route path="Movie_review" element= {<Movie_review />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
