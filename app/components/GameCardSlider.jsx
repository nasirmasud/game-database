"use client";

import { useRef } from "react";
import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GameCard from "./GameCard";

// Swiper CSS ইম্পোর্ট করা জরুরি
import "swiper/css";
import "swiper/css/navigation";

const GameCardSlider = ({ games }) => {
  const swiperRef = useRef(null);

  if (!games || games.length === 0) return null;

  return (
    <div className="bg-[#0b0e14] text-white p-8 font-sans">
      {/* হেডার এবং কাস্টম অ্যারো বাটন */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-wide">Trending now</h2>

        {/* বাটন দুটির সাথে Swiper এর রিলেশন জুড়ে দেওয়া হয়েছে */}
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="bg-[#1a1f29] hover:bg-[#252b37] px-3 py-2 rounded text-gray-400 hover:text-white transition font-bold"
          >
            &lt;
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="bg-[#1a1f29] hover:bg-[#252b37] px-3 py-2 rounded text-gray-400 hover:text-white transition font-bold"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Swiper স্লাইডার কনফিগারেশন */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Mousewheel]}
        mousewheel={{
          forceToAxis: true
        }}
        spaceBetween={24} // কার্ডগুলোর মাঝের গ্যাপ (Tailwind এর gap-6 এর সমান)
        slidesPerView={1}  // ডিফল্টভাবে (মোবাইলে) ১টি কার্ড দেখাবে
        breakpoints={{
          640: { slidesPerView: 2 },  // স্মল স্ক্রিনে ২টি
          1024: { slidesPerView: 3 }, // মিডিয়াম স্ক্রিনে ৩টি
          1280: { slidesPerView: 4 }, // বড় স্ক্রিনে (আপনার স্ক্রিনশটের মতো) ৪টি কার্ড
        }}
        className="mySwiper"
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
            {/* আপনার আগের তৈরি করা রি-ইউজেবল GameCard */}
            <GameCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameCardSlider;