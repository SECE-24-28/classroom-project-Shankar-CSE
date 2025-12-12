import { useContext, useEffect } from "react";
import GetTable from "./Components/GetTable";
import FeedbackApi from "./api/FeedbackApi";
import AddFeedback from "./Components/AddFeedback";

import DataContext, { DataProvider } from "./Context/DataContext";

const  Home = () => {
 

  
  return (
  
      <div className="flex justify-center items-center min-h-200 gap-5 flex-col">
        <GetTable />
      </div>
 
  );
}

export default Home;
