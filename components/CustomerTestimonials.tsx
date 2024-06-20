import Testimonial, { Testimony } from "./Testimonial";

const CustomerTestimonials: React.FC<{
  testimonies: Testimony[];
}> = ({ testimonies }) => {
  return (
    <section id="testimonials" className="w-full max-w-320 m-auto px-4 md:px-5 py-14 md:py-20 xl:py-28 flex flex-col">
      <div className="w-full max-w-320 m-auto">
        <h2 className="uppercase text-theme-text-700 h6 mb-[.5em]">Customer testimonials</h2>
        <h3 className="h2">
          Client Stories: <br />Our Impact in Action
        </h3>
        <div className="mt-8 md:mt-12 xl:mt-20 flex justify-between gap-[64px]">
          {testimonies.map((testimony, index) => (
            <Testimonial key={index} testimony={testimony} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
