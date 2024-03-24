import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "react-alice-carousel/lib/alice-carousel.css";
const Trust = () => {
  return (
    <section className="w-full px-2 ">
      <h1 className="text-center font-bold bg-white text-gray-600 text-2xl md:text-3xl py-4">
        Trust Gallery..
      </h1>
      {/* <div className="w-[90%] m-auto grid items-center justify-center gap-4 grid-cols-[90%] md:grid-cols-[50%,50%] lg:grid-cols-[30%,30%,30%]">
        <div className="h-[35vh] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/1.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://htmldemo.net/trust/trust/assets/img/gallery/1.jpg')] duration-300 bg-cover bg-no-repeat"></div>

        <div className="h-[35vh] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/3.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://htmldemo.net/trust/trust/assets/img/gallery/3.jpg')] duration-300 bg-cover bg-no-repeat"></div>

        <div className="h-[35vh] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/6.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://htmldemo.net/trust/trust/assets/img/gallery/6.jpg')] duration-300 bg-cover bg-no-repeat"></div>

        <div className="h-[35vh] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/4.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://htmldemo.net/trust/trust/assets/img/gallery/4.jpg')] duration-300 bg-cover bg-no-repeat"></div>

        <div className="h-[35vh] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/2.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://htmldemo.net/trust/trust/assets/img/gallery/2.jpg')] duration-300 bg-cover bg-no-repeat"></div>

        <div className="h-[35vh] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/5.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://htmldemo.net/trust/trust/assets/img/gallery/5.jpg')] duration-300 bg-cover bg-no-repeat"></div>
      </div> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={4}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="w-[30%] h-48 md:h-62 md:w-[20%] bg-red-400 bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/1.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://htmldemo.net/trust/trust/assets/img/gallery/1.jpg')] duration-300 bg-cover bg-no-repeat">
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[30%] h-48 md:h-62 md:w-[20%] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/3.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://htmldemo.net/trust/trust/assets/img/gallery/3.jpg')]  duration-300 bg-cover bg-no-repeat">
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[30%] h-48 md:h-62 md:w-[20%] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/6.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://htmldemo.net/trust/trust/assets/img/gallery/6.jpg')] duration-300 bg-cover bg-no-repeat">
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[30%] h-48 md:h-62 md:w-[20%] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/4.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://htmldemo.net/trust/trust/assets/img/gallery/4.jpg')] duration-300 bg-cover bg-no-repeat">
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[30%] h-48 md:h-62 md:w-[20%] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/2.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://htmldemo.net/trust/trust/assets/img/gallery/2.jpg')] duration-300 bg-cover bg-no-repeat">
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[30%] h-48 md:h-62 md:w-[20%] bg-[url(https://htmldemo.net/trust/trust/assets/img/gallery/5.jpg)]  hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://htmldemo.net/trust/trust/assets/img/gallery/5.jpg')] duration-300 bg-cover bg-no-repeat">
          <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Trust;
