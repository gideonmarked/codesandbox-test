import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_API_URL } from "../constants";
import { FruitsButtons } from "./FruitsButtons";
import { saveFruit, getFruitsByAnimeId } from "../localStorage";
export const AnimeDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [amimeFruitsList, setAnimeFruitsList] = useState([]);

  const fetchAnimeDetails = async (animeId) => {
    const resp = await fetch(`${BASE_API_URL}anime/${animeId}/full`);
    const results = await resp?.json();

    setData(results);

    const savedFruits = await getFruitsByAnimeId(results.data.id);
    setAnimeFruitsList(savedFruits);
  };

  const onAddFruit = (fruitKey: string) => {
    saveFruit(fruitKey, id);
  };

  useEffect(() => {
    fetchAnimeDetails(id);
  }, [id]);
  //This is Anime Details {JSON.stringify(data)}
  return (
    <div>
      <FruitsButtons onAddFruit={onAddFruit} />
    </div>
  );
};
