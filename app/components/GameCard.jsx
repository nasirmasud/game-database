import Image from 'next/image';

const GameCard = ({ game }) => {
  if (!game) return null;

  return (
    <div className="bg-[#121620] rounded-xs overflow-hidden shadow-lg border border-transparent hover:border-gray-800 transition duration-300 flex flex-col justify-between group">

      <div className="relative h-48 w-full bg-gray-800 overflow-hidden">
        {game.background_image ? (
          <Image
            src={game.background_image}
            alt={game.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      <div className="p-4 grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold line-clamp-1 mb-2 group-hover:text-blue-400 transition cursor-pointer">
            {game.name}
          </h3>
          <p className="text-gray-400 text-xs line-clamp-2 mb-4 leading-relaxed">
            Discover {game.name}, a top-rated title available now in our store.
          </p>
        </div>

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