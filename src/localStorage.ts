export const ADDED_FRUITS_KEY = "ADDED_FRUITS_KEY";

export const saveFruit = async (fruitKey, animeId) => {
  const existingFruits =
    JSON.parse(await localStorage.getItem(ADDED_FRUITS_KEY)) || [];

  const findAnimeIndex = existingFruits.findIndex((item) => item.animeId === animeId);

  if (findAnimeIndex !== -1) {
    // If the anime exists, add the new fruit to its fruits array
    existingFruits[findAnimeIndex].fruits.push(fruitKey);
  } else {
    // If the anime doesn't exist, create a new entry for it
    existingFruits.push({ animeId, fruits: [fruitKey] });
  }

  // Save the updated array in localStorage
  window.localStorage.setItem(ADDED_FRUITS_KEY, JSON.stringify(existingFruits));
};

export const getFruitsByAnimeId = async (animeId) => {
  const existingFruits =
    JSON.parse(await localStorage.getItem(ADDED_FRUITS_KEY)) || [];
    
  const findAnime = existingFruits.find((item) => item.animeId === animeId);
  
  if (findAnime) {
    // If the anime exists, return its fruits array
    return findAnime.fruits;
  } else {
    // If the anime doesn't exist, return an empty array
    return [];
  }
};