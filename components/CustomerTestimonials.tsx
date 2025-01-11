import Testimonial, { Testimony } from "./Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const CustomerTestimonials: React.FC<{
  testimonies: Testimony[];
}> = ({ testimonies }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section
      id="testimonials"
      className="bg-white w-full  m-auto  flex flex-col"
    >
      <div className="w-full max-w-320 px-4 md:px-5 py-14 md:py-20 xl:py-28 m-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="uppercase text-theme-text-700 h6 mb-[.5em]"
        >
          Customer testimonials
        </motion.h2>
        <motion.h3
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h2"
        >
          Client Stories: <br />
          Our Impact in Action
        </motion.h3>
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
              },
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
