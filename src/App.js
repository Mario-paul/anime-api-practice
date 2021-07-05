import Header from "./components/Header";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const  [animeList, SetAnimeList]  = useState([]);
  const  [topAnime, setTopAnime ] = useState([]);
  const  [search, SetSearch]  = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    ).then((res) => res.json()); // fetch from api server, then store that info in a json inside temp

    setTopAnime(temp.top.slice(0, 5)); // get data in temp and slice the first 5 elements, then put into topAnime
  };

  useEffect(() => {
    GetTopAnime();

  }, []);
  //console.log(topAnime);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
