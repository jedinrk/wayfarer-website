import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import BgTrackForest from "../public/bg-truck-forest.jpeg";
import IconEmail from "../public/ic_email.svg";
import IconPhone from "../public/ic_phone.svg";
import IconPin from "../public/ic_pin.svg";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    interestedIn: "",
    message: "",
  });

  const [submitEnabled, setSubmitEnabled] = useState(false);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Form submitted!", formData);
    // Handle form submission logic here (e.g., send data to server)
  };

  const reCaptchaOnChange = (value: any) => {
    console.log("Captcha value:", value);
    if (value) {
      setSubmitEnabled(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:items-center lg:items-stretch"
    >
      <div className="flex justify-between gap-4">
        <div className="form-group flex flex-col">
          <label htmlFor="firstName">First Name:<span className="text-red-600 text-sm leading-tight"> *</span></label>
          <input
            className="w-[274px] h-12 p-3 bg-white rounded border border-stone-300"
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="lastName">Last Name:<span className="text-red-600 text-sm leading-tight"> *</span></label>
          <input
            className="w-[274px] h-12 p-3 bg-white rounded border border-stone-300"
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="form-group flex flex-col">
          <label htmlFor="email">Email:<span className="text-red-600 text-sm leading-tight"> *</span></label>
          <input
            className="w-[274px] h-12 p-3 bg-white rounded border border-stone-300"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group flex flex-col">
          <label htmlFor="phoneNumber">Phone Number:<span className="text-red-600 text-sm leading-tight"> *</span></label>
          <input
            className="w-[274px] h-12 p-3 bg-white rounded border border-stone-300"
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group flex flex-col max-w-[564px] w-full">
        <label htmlFor="company">Company:</label>
        <input
          className="w-full h-12 p-3 bg-white rounded border border-stone-300"
          type="text"
          name="company"
          id="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className="form-group flex flex-col max-w-[564px] w-full">
        <label htmlFor="interestedIn">I&apos;m interested in:<span className="text-red-600 text-sm leading-tight"> *</span></label>
        <select
          className="h-12 p-3 bg-white rounded border border-stone-300"
          name="interestedIn"
          id="interestedIn"
          value={formData.interestedIn}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          {/* Add your dropdown options here */}
          <option value="option1">Container Transporting</option>
          <option value="option2">Refrigerated container Transportation</option>
          <option value="option3">
            Heavy Machinery & Equipment Transportation
          </option>
          <option value="option4">Container Sale</option>
          <option value="option5">Bulk cargo movement</option>
          <option value="option6">Project cargo Transportation</option>
        </select>
      </div>
      <div className="form-group flex flex-col max-w-[564px] w-full">
        <label htmlFor="message">Message:</label>
        <textarea
          className="h-[180px] bg-white rounded border border-stone-300"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col max-w-[564px] w-full gap-4">
        <ReCAPTCHA
          sitekey="6LfHYf0pAAAAAM0VVdPSwITD6H98UHJrXh0L0Kln"
          onChange={reCaptchaOnChange}
        />
        <button
          type="submit"
          className="w-[147px] h-12 px-8 py-2 bg-lime-700 rounded text-white disabled:opacity-70"
          disabled={!submitEnabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

function ContactUs() {
  return (
    <section id="contact-us" className="w-full">
      <div className="w-full max-w-320 m-auto px-4 md:px-5 py-14 md:py-20 xl:py-28">
        <div className="lg:flex md:flex-row gap-8">
          <div className="lg:flex-1">
            <h2 className="uppercase mb-[.5em] h6 ">Contact Us</h2>
            <h3 className="h2 mb-6 ">
              Our friendly team would love to hear from you.
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Image src={IconEmail} alt={"IconEmail"} />
                <label>wayfarerlogisticspvtltd@gmail.com</label>
              </div>
              <div className="flex gap-4">
                <Image src={IconPhone} alt={"IconPhone"} />
                <label>+91 9746710770</label>
              </div>
              <div className="flex gap-4">
                <Image src={IconPin} alt={"IconPin"} />
                <label>
                  GROUND FLOOR, 14/153, VAZHAKKOOTTATHIL BUILDING, Azheekkal,
                  Vypin, Kerala, 682508
                </label>
              </div>
              <Image src={BgTrackForest} alt={""} className="w-full" />
            </div>
          </div>
          <div className="lg:flex-1 lg:mt-0 md:mt-16">
            <FormComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
