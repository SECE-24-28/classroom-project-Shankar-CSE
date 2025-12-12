import { format } from "date-fns";
import { createContext, useEffect, useState } from "react";
import FeedbackApi from "../api/FeedbackApi";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // const [num, setnum] = useState(100)
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const no = list.length ? list.length + 1 : 1;
    const date = format(new Date(), "MMM dd, yyyy");
    const newFeedBack = { no, name, body: feedback, date };
    try {
      const res = await FeedbackApi.post("/feedbacks", newFeedBack);
      const created = res?.data ?? newFeedBack;
      const newList = [...list, created];
      setList(newList);
      setFeedback("");
      setName("");
    } catch (err) {
      console.log(err);
    }
  };


useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await FeedbackApi.get("/feedbacks");
        setList(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = list.filter((li) => {
      const content = `${String(li.no ?? "")} ${li.name ?? ""} ${
        li.body ?? ""
      }`.toLowerCase();
      return content.includes(String(search ?? "").toLowerCase());
    });

    setSearchResult(filtered);
  }, [list, search]);
  



  return (
    <DataContext.Provider
      value={{
        list,
        setList,
        search,
        setSearch,
        searchResult,
        setSearchResult,
        name,
        setName,
        feedback,
        setFeedback,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
