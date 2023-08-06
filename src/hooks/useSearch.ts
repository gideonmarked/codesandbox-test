import { useState, useEffect, useCallback } from "react";
import { BASE_API_URL } from "../constants";

interface Anime {
  data: {
    mal_id: string;
    url: string;
    title: string;
  }[];
}

const debounce = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};

export const useSearch = () => {
  const [searchResults, setSearchResults] = useState<Anime | undefined>(
    undefined
  );
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchActive, setSearchActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchAnimeList = async () => {
    if (!searchActive) {
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${BASE_API_URL}anime?q=${searchTerm}`, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const results = await response?.json();

      setSearchResults(results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("Something went wrong", e);
    }
  };

  const debouncedSearch = useCallback(debounce(fetchAnimeList), [
    fetchAnimeList
  ]);

  useEffect(() => {
    debouncedSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return {
    searchResults,
    setSearchTerm,
    setSearchActive,
    loading
  };
};
