// app/components/HeroSlider.jsx
"use client";

import Image from "next/image";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = ({ games }) => {
  if (!games || games.length === 0) return null;

  return (
    <div className="w-full rounded-xs overflow-hidden mb-8 relative group">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Mousewheel]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        mousewheel={{ forceToAxis: true }}
        loop={true}
        className="heroSwiper h-[450px] md:h-[500px]"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className="relative w-full h-full">

            {/* ব্যাকগ্রাউন্ড ইমেজ চেক */}
            <div className="absolute inset-0 bg-gray-900">
              {/* এখানে চেক করা হচ্ছে game.background_image আসলেই আছে কি না */}
              {game.background_image && game.background_image !== "" ? (
                <Image
                  src={game.background_image}
                  alt={game.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              ) : (
                // ইমেজ না থাকলে ব্যাকগ্রাউন্ডে একটা ডার্ক কালার আর নো ইমেজ টেক্সট থাকবে
                <div className="w-full h-full flex items-center justify-center text-gray-600 bg-[#121620]">
                  No Background Image Available
                </div>
              )}
              {/* ডার্ক গ্রেডিয়েন্ট ওভারলে */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/60 to-transparent" />
            </div>

            {/* কন্টেন্ট ওভারলে (বামে) */}
            <div className="relative h-full flex flex-col justify-center px-12 max-w-2xl space-y-6 z-10">
              {/* জনরা ট্যাগস */}
              <div className="flex gap-2">
                {game.genres?.slice(0, 3).map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1 rounded-xsuppercase tracking-wider font-semibold"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* টাইটেল */}
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {game.name}
              </h1>

              {/* ডেসক্রিপশন */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
                {game.name} is a top-rated experience with a rating of {game.rating}/5.
                Explore vast worlds and immersive gameplay in this masterpiece.
                Available now for multiple platforms.
              </p>

              {/* বাটন সেকশন */}
              <div className="flex items-center gap-4 pt-4">
                <button className="bg-[#55a6ff] hover:bg-[#4386d1] text-[#0b0e14] font-bold px-8 py-3 rounded-xstransition duration-300">
                  Buy now
                </button>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xsflex items-center gap-2">
                  <span className="text-white font-bold">$24.00</span>
                  <span className="text-gray-400 line-through text-sm">$35.00</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .heroSwiper .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .heroSwiper .swiper-pagination-bullet-active {
          background: #55a6ff !important;
          opacity: 1;
          width: 25px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;