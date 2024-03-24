import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "react-alice-carousel/lib/alice-carousel.css";

const Testimonial = () => {
  return (
    <div className="w-full p-3">
      <h1 className="text-center font-bold font-serif bg-white text-gray-600 text-2xl md:text-3xl py-4">
        Client Testimonials
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={4}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=""
      >
        <SwiperSlide className="flex md:py-10  md:items-center md:justify-center border p-2 gap-4 rounded-md">
          <img
            src="https://charity.w3itexperts.com/xhtml/images/testimonials/pic1.jpg"
            alt=""
            className="size-24 md:size-60 rounded-full"
          />
          <div className="w-[70%]">
            <p className="text-[.8rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident dolore atque nostrum impedit minima distinctio
            </p>
            <h1 className="font-bold text-orange-500">Jannatul Ferdous</h1>
            <h1 className="font-bold">Events Manager</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex md:py-10  md:items-center md:justify-center border p-2 gap-4 rounded-md">
          <img
            src="https://charity.w3itexperts.com/xhtml/images/testimonials/pic1.jpg"
            alt=""
            className="size-24 md:size-60 rounded-full"
          />
          <div className="w-[70%]">
            <p className="text-[.8rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident dolore atque nostrum impedit minima distinctio
            </p>
            <h1 className="font-bold text-orange-500">Jannatul Ferdous</h1>
            <h1 className="font-bold">Events Manager</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex md:py-10  md:items-center md:justify-center border p-2 gap-4 rounded-md">
          <img
            src="https://charity.w3itexperts.com/xhtml/images/testimonials/pic2.jpg "
            alt=""
            className="size-24 md:size-60 rounded-full"
          />
          <div className="w-[70%]">
            <p className="text-[.8rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident dolore atque nostrum impedit minima distinctio
            </p>
            <h1 className="font-bold text-orange-500">Jannatul Ferdous</h1>
            <h1 className="font-bold">Events Manager</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
