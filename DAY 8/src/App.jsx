import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Gallary from "./Gallary";
import Posts from "./Posts";


function App() {
    return (
      <div className="App">

      <ul className="flex justify-end gap-10 p-10 bg-black text-white font-bold text-2xl"  >
        <li><Link to="/" >home</Link></li>
        <li><Link to="/gallary" >Gallary</Link></li>
        <li><Link to="/posts" >Posts</Link></li>
      </ul>


      <Routes>
  <Route path="/" element={<Home />} />

  <Route path="/gallary" element={<Gallary />} />

  <Route path="/posts" element={<Posts />}>
      <Route path=":id" element={<Posts />} />
  </Route>
</Routes>
      </div>
    );
  }
  
  export default App;