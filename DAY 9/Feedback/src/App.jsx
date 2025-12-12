import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import Home from "./Home";
import NavBar from "./NavBar";
import Card from "./UI/Card";
import AddFeedback from "./Components/AddFeedback";

function App() {
  return (
    <>
      <DataProvider>
        {/* <Home /> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<AddFeedback />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
