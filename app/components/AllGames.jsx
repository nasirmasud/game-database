import { FetchRawgData } from '../lib/rawgFetch';
import HeroSlider from './HeroSlider';

const AllGames = async () => {
  // স্লাইডারগুলোর জন্য ডাটা ফেচ করা হচ্ছে
  const heroGames = await FetchRawgData("games", {
    params: { page_size: 5 },
  });

  // ডামি ফ্রেন্ডস ডাটা (আপাতত ডিজাইনের জন্য)
  const friends = [
    { id: 1, name: "Gamer_Boy_99", status: "Playing Cyberpunk 2077", avatar: "🎮", online: true },
    { id: 2, name: "Alex_Valkyrie", status: "Online", avatar: "🎯", online: true },
    { id: 3, name: "Slayer_X", status: "Offline", avatar: "💀", online: false },
  ];

  return (
    <div className="w-full max-w-[1400px] p-4">
      {/* 🛠️ পরিবর্তন: মেইন গ্রিড ৩ কলাম থেকে ৪ কলাম (grid-cols-4) করা হলো */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ─── বাম পাশের মেইন কন্টেন্ট এরিয়া (🛠️ পরিবর্তন: col-span-2 থেকে col-span-3 করা হলো) ─── */}
        <div className="lg:col-span-3 space-y-10">
          {/* হিরো স্লাইডার এখন আগের চেয়ে অনেক বেশি ওয়াইড দেখাবে */}
          <HeroSlider games={heroGames?.results || []} />
        </div>

        {/* ─── ডান পাশের সাইডবার এরিয়া (১ কলাম জায়গা নিয়ে থাকবে) ─── */}
        <div className="lg:col-span-1 space-y-6">

          {/* ১. সার্চ বার সেকশন */}
          <div className="rounded-xs shadow-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="w-full bg-[#0b0e14] text-white pl-10 pr-4 py-3 rounded-xs border border-gray-800 focus:outline-none focus:border-[#55a6ff] transition text-sm placeholder-gray-500"
              />
              {/* সার্চ আইকন */}
              <span className="absolute left-3 top-3.5 text-gray-500 text-sm">🔍</span>
            </div>
          </div>

          {/* ২. ফ্রেন্ডস লিস্ট সেকশন */}
          <div className="p-5 rounded-xs shadow-lg bg-[#121620]/40 border border-gray-900">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-bold tracking-wide uppercase text-gray-400 text-xs">Friends Online</h3>
              <span className="bg-[#1e2638] text-xs px-2 py-0.5 rounded-xs text-gray-400">
                {friends.filter(f => f.online).length}
              </span>
            </div>

            {/* ফ্রেন্ডস লিস্ট */}
            <div className="space-y-4">
              {friends.map((friend) => (
                <div key={friend.id} className="flex items-center justify-between group cursor-pointer p-1 rounded-xs hover:bg-white/5 transition">
                  <div className="flex items-center gap-3">
                    {/* অ্যাভাটার বা প্রোফাইল পিকচার */}
                    <div className="w-10 h-10 bg-[#1e2638] rounded-xs flex items-center justify-center text-lg relative">
                      {friend.avatar}
                      {/* অনলাইন গ্রিন ডট */}
                      {friend.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#121620] rounded-xs" />
                      )}
                    </div>
                    {/* নাম ও স্ট্যাটাস */}
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-[#55a6ff] transition">
                        {friend.name}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-1">
                        {friend.status}
                      </p>
                    </div>
                  </div>

                  {/* মেসেজ বা অ্যাকশন বাটন */}
                  <span className="text-gray-600 group-hover:text-gray-400 transition text-xs pr-2">💬</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AllGames;