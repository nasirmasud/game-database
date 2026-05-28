import { FetchRawgData } from '../lib/rawgFetch';
import GameCard from './GameCard';

const AllGames = async () => {
  const gamesData = await FetchRawgData('games', { params: { page_size: 15 } })

  return (
    <div className="bg-[#0b0e14] text-white p-8 min-h-screen font-sans">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-wide">All Games</h2>

        <div className="flex gap-2">
          <button className="bg-[#1a1f29] hover:bg-[#252b37] p-2 rounded-xs text-gray-400 hover:text-white transition">
            &lt;
          </button>
          <button className="bg-[#1a1f29] hover:bg-[#252b37] p-2 rounded-xs text-gray-400 hover:text-white transition">
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gamesData.results?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default AllGames;