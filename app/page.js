// app/page.js
import AllGames from "./components/AllGames";
import GameCardSlider from "./components/GameCardSlider";
import { FetchRawgData } from "./lib/rawgFetch";

const HomePage = async () => {
  const trendingGames = await FetchRawgData("games", {
    params: { page_size: 10 },
  });

  return (
    <main className='min-h-screen bg-[#0b0e14] text-white p-6 font-sans'>
      <AllGames />
      {/* ট্রেন্ডিং স্লাইডার */}
      <GameCardSlider
        games={trendingGames?.results || []}
        title='Trending now'
      />
    </main>
  );
};

export default HomePage;
