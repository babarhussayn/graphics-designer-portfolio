"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_mwfq3cf",
          "template_cyjj4no",
          form.current,
          "BjsSSz1m6kfWPTPCx"
        )
        .then(
          () => {
            setSuccessMessage("Email sent successfully!");
            setErrorMessage("");
          },
          (error) => {
            setErrorMessage("Failed to send email. Please try again later.");
            setSuccessMessage("");
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen container mx-auto mt-20"
    >
      <div className="w-full flex justify-center items-center flex-col">
        <div className="flex justify-center items-center">
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
        <div>
          <div className="">
            <h3 className="uppercase font-bold font-oswald md:text-4xl text-2xl ">
              Are you ready to grow online ?
            </h3>
          </div>
        </div>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 md:text-4xl text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white font-oswald">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl font-oswald">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="" ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold font-oswald text-gray-900 dark:text-gray-300"
              >
                Your name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-bold font-oswald text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="block p-3 w-full font-bold font-oswald text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 font-bold font-oswaldfont-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                className="block p-2.5 w-full font-bold font-oswald text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <Button
              type="submit"
              className="py-3 px-5 text-sm font-bold font-oswald text-center text-white rounded-full bg-[#2979FF] sm:w-fit hover:bg-[#638fda] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
