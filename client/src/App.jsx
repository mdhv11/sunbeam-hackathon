import { ToastContainer } from "react-toastify";
import "./App.css";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { Route, Routes } from "react-router-dom";
import Movie_list from "./pages/movie-list/Movie_list";
import All_review from "./pages/movie-list/All_review";
import My_review from "./pages/movie-list/My_review";
import Movie_review from "./pages/movie-list/movie_review";
import Share_with_me from "./pages/movie-list/Share_with_me copy";
// import Share_with_me from "./pages/movie-list/Share_with_me";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Movie_list" element= {<Movie_list />} />
        <Route path="Movie_review" element= {<Movie_review />} />
        <Route path="My_review" element= {<My_review />} />
        <Route path="Share_with_me" element= {<Share_with_me />} />
        <Route path="All_review" element= {<All_review />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
