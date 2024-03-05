import Posts from "./Posts";
import SearchBar from "../components/SearchBar";
import SuggestedItems from "../components/SuggestedItems";

const Home = () => {
  return (
    <>
      <SearchBar />
      <SuggestedItems />
      <Posts />
    </>
  );
};

export default Home;
