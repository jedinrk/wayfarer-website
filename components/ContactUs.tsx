import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import IconEmail from "../public/ic_email.svg";
import IconPhone from "../public/ic_phone.svg";
import IconPin from "../public/ic_pin.svg";
import ContactUsBg from "../public/contact-left-bg.png";
import CustomTextField from "./CustomTextField";
import CustomPhoneInput from "./CustomPhoneInput";
import InterestCheckbox from "./InterestCheckbox";
import Button from "./Button";

import { useForm, ValidationError } from '@formspree/react';


const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    company: "",
    interestedIn: "",
    message: "",
  });

  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [state, handleSubmit] = useForm("xanwkkjr");

  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  const handleChange = (event: { target: { name: any; value: any } }) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const handleSubmit = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();
  //   console.log("Form submitted!", formData);
  //   // Handle form submission logic here (e.g., send data to server)
  // };

  const reCaptchaOnChange = (value: any) => {
    console.log("Captcha value:", value);
    if (value) {
      setSubmitEnabled(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[564px] m-auto flex flex-col gap-7"
    >
      <div className="grid gap-4 contact-us-half-grid grid-cols-2">
        <div className="form-group flex flex-col">
          <CustomTextField
            required
            fullWidth
            name="firstName"
            id="firstName"
            label="First Name"
            variant="standard"
            className="font-text-100 bg-text-100"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group flex flex-col">
          <CustomTextField
            fullWidth
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            label="Last Name"
            variant="standard"
            className="font-text-100 bg-text-100"
          />
        </div>
      </div>
      <div className="form-group flex flex-col">
        <CustomTextField
          fullWidth
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          label="Business Email"
          variant="standard"
          className="font-text-100 bg-text-100"
        />
      </div>
      <div className="form-group flex flex-col">
        <div className="flex">
          <CustomPhoneInput
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group flex flex-col">
        <InterestCheckbox
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleChange}
        />
      </div>
      <div className="form-group flex flex-col">
        <CustomTextField
          fullWidth
          multiline
          name="message"
          id="message"
          label="Message"
          variant="standard"
          className="font-text-100 bg-text-100"
          value={formData.message}
          onChange={handleChange}
          rows={6}
        />
      </div>
      <div className="flex flex-col gap-4">
        <ReCAPTCHA
          sitekey="6LfHYf0pAAAAAM0VVdPSwITD6H98UHJrXh0L0Kln"
          onChange={reCaptchaOnChange}
        />
        <Button
          title="Submit"
          disabled={!submitEnabled}
          icon
          width="w-[100px]"
          height="h-[32px]"
        />
      </div>
    </form>
  );
};

function ContactUs() {
  return (
    <section id="contact-us" className="w-full">
      <div className="w-full max-w-320 m-auto px-4 md:px-5 py-14 md:py-20 xl:py-28">
        <div className="md:flex md:flex-col lg:flex-row items-center gap-16">
          <div className="rounded-3xl overflow-hidden relative">
            <Image
              src={ContactUsBg}
              alt="Contact Us Background"
              className="h-full w-full object-cover z-10"
            />
            <div className="flex flex-col p-4 md:p-7 lg:p-9 pt-[47px] z-20 absolute top-0 left-0 right-0 bottom-0">
              <h2 className="uppercase mb-[.5em] text-theme-text-700 h6">
                Contact Us
              </h2>
              <h3 className="h2 mb-6 font-medium leading-[1.07]">
                Send a message <br /> to our team
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <Image src={IconPin} alt="IconPin" className="pt-2" />
                  <address className="not-italic opacity-80 text-[#1a282b] text-lg font-medium leading-[1.3]">
                    14/153, Ground Floor
                    <br />
                    Vazhakkoottathil Building, Panikkarupady
                    <br />
                    Near Vallarpadam International Port
                    <br />
                    Ernakulam, Kerala, 682508
                  </address>
                </div>
                <div className="flex justify-start">
                  <Image
                    src={IconPhone}
                    alt="IconPhone"
                    className="mr-4 pt-2"
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <a
                        className="opacity-80 text-[#1a282b] text-lg font-medium leading-loose mr-1"
                        href="tel:+919746710770"
                      >
                        +91 9746710770,
                      </a>
                      <a
                        className="opacity-80 text-[#1a282b] text-lg font-medium leading-loose"
                        href="tel:+919567026314"
                      >
                        +91 9567026314
                      </a>
                    </div>
                    <div className="flex flex-row">
                      <a
                        className="opacity-80 text-[#1a282b] text-lg font-medium leading-loose mr-1"
                        href="tel:+919746698889"
                      >
                        +91 9746698889,
                      </a>
                      <a
                        className="opacity-80 text-[#1a282b] text-lg font-medium leading-loose"
                        href="tel:+919746021116"
                      >
                        +91 9746021116
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Image src={IconEmail} alt="IconEmail" />
                  <a
                    className="opacity-80 text-[#1a282b] text-lg font-medium leading-loose"
                    href="mailto:wayfarerlogisticspvtltd@gmail.com"
                  >
                    wayfarerlogisticspvtltd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-1 mt-12 md:mt-16 lg:mt-0">
            <FormComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
