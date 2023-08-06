import { useSearch } from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const {
    setSearchTerm,
    searchResults,
    setSearchActive,
    loading
  } = useSearch();
  const navigate = useNavigate();
  return (
    <div>
      <input
        onFocus={() => setSearchActive(true)}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {loading ? (
        <div>Saerching....</div>
      ) : (
        <ul>
          {searchResults?.data?.map((item) => (
            <li
              key={item.mal_id}
              onClick={() => navigate(`anime/${item.mal_id}`)}
            >
              {item?.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
