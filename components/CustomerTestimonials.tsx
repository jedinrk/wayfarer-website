import Testimonial, { Testimony } from "./Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CustomerTestimonials: React.FC<{
  testimonies: Testimony[];
}> = ({ testimonies }) => {
  return (
    <section
      id="testimonials"
      className="w-full max-w-320 m-auto px-4 md:px-5 py-14 md:py-20 xl:py-28 flex flex-col"
    >
      <div className="w-full max-w-320 m-auto">
        <h2 className="uppercase text-theme-text-700 h6 mb-[.5em]">
          Customer testimonials
        </h2>
        <h3 className="h2">
          Client Stories: <br />
          Our Impact in Action
        </h3>
        <div className="mt-8 md:mt-12 xl:mt-20">
          <Swiper
            spaceBetween={64}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 64,
              }
            }}
          >
            {testimonies.map((testimony, index) => (
              <SwiperSlide key={index}>
                <Testimonial testimony={testimony} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
