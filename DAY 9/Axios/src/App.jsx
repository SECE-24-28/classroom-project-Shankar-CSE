import { useEffect, useState } from "react";
import stu_api from "./api/stu_api";

function App() {
  const [list, setList] = useState([]);


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await stu_api.get("/student");
        setList(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {
          list.map((x) => 
            <li key={x.sid}>{x.sid} - {x.name} - {x.marks}</li>
          )
        }
      </ul>
    </>
  );
}

export default App;
