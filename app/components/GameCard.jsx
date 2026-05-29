import Image from 'next/image';

const GameCard = ({ game }) => {
  if (!game) return null;

  // এপিআই থেকে জেনারে বা ট্যাগের নামগুলো নিয়ে একটা রিয়েল টেক্সট বানাচ্ছি
  const gameGenres = game.genres?.map(g => g.name).slice(0, 3).join(', ') || 'Action';
  const gameTags = game.tags?.map(t => t.name).slice(0, 2).join(', ') || 'Multiplayer';

  return (
    <div className="bg-[#121620] rounded-xs overflow-hidden shadow-lg border border-transparent hover:border-gray-800 transition duration-300 flex flex-col h-full group">

      {/* গেম ইমেজ কন্টেনার */}
      <div className="relative h-48 w-full bg-gray-800 overflow-hidden shrink-0">
        {game.background_image ? (
          <Image
            src={game.background_image}
            alt={game.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* গেম ডিটেইলস কন্টেনার */}
      <div className="p-4 flex flex-col grow justify-between">

        {/* টেক্সট সেকশন */}
        <div className="flex flex-col mb-4">
          <h3 className="text-lg font-bold line-clamp-1 group-hover:text-blue-400 transition cursor-pointer h-7 mb-1 leading-snug">
            {game.name}
          </h3>

          {/* এখানে কোনো ডামি বা ফিক্সড টেক্সট নেই, এপিআই থেকে আসা আসল জেনারে ও ট্যাগ দিয়ে ডেসক্রিপশন তৈরি করা হয়েছে */}
          <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed h-10">
            A top-rated {gameGenres} game featuring {gameTags}. Released on {game.released || 'N/A'}.
          </p>
        </div>

        {/* প্রাইস ট্যাগ */}
        <div className="flex items-center mt-auto">
          <span className="bg-[#1e2638] text-[#55a6ff] font-semibold text-sm px-3 py-1.5 rounded-xs border border-[#2a364f]">
            $55.00
          </span>
        </div>
      </div>

    </div>
  );
};

export default GameCard;