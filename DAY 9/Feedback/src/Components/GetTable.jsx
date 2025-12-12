import { useContext } from "react";
import Search from "../Search";
import Card from "../UI/Card";
import DataContext from "../Context/DataContext";

const GetTable = () => {

  const { search, setSearch, list, searchResult } = useContext(DataContext);

  const items = String(search).trim() ? searchResult : list;

  return (
    <div className="flex min-h-200 flex-col flex-wrap justify-center items-center ">
      <Search search={search} setSearch={setSearch} />
      <div className="flex flex-wrap justify-center items-center">
        {items.map((item) => (
          <Card key={item.no} list={item} />
        ))}
      </div>
    </div>
  );
};

export default GetTable;
