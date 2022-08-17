import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import PrimaryButton from "../Shared/PrimaryButton";

import appointment from "../../assets/images/appointment.png";


export const Support = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "DoctorPortal",
        "template_z5yzx8o",
        form.current,
        "aGSC7EmhR02srlfQA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="bg-primary px-10 py-14 "
    >
      <div className="text-center pb-14 text-white">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary">
          Contact Us
        </p>
        <h1 className="text-4xl">Stay connected with us</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-1 justify-items-center gap-5">
          <input
            required
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="input w-full max-w-md"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-md"
          />
          <textarea
            required
            name="message"
            className="textarea w-full max-w-md"
            placeholder="Your message"
            rows={6}
          ></textarea>
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Support;