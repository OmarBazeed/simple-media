import Footer from "./Footer";
import Navbar from "./Navbar";
import Posts from "./Posts";
import SearchBar from "./SearchBar";
import SuggestedItems from "./SuggestedItems";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <SuggestedItems />
      <Posts />
      <Footer />
    </>
  );
};

export default Home;
