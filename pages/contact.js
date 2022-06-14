import React from "react";
import Link from "next/link";

function contact() {
  return (
    <>
      <div className="flex flex-col items-center py-16 bg-zinc-900 text-white">
        <h1 className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 text-red font-bold px-4 py-2">
          Contact Us
        </h1>
        <h1 className="text-4xl font-bold pb-8 pt-4">Reach out to us</h1>
        <p className="text-xl">
          Tell us about yourself and we&apos;ll get back to you asap.{" "}
        </p>
        <p className="text-xl">
          Don&apos;t like filling out forms? Mail us then 👇
        </p>
      </div>

      <section className="flex flex-row bg-zinc-900 text-white py-16 gap-8 px-14">
        <div className="flex flex-col">
          <div>{/* Icon */}</div>
          <h3 className="text-2xl font-bold pb-4">Meet in real reality</h3>
          <div>
            <p>
              We are currently in Florida, so hit us up if you want to meet over
              coffee
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>{/* Icon */}</div>
          <h3 className="text-2xl font-bold pb-4">Send us an Email</h3>
          <div>
            <span>hello@coderedacademy.online</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div>{/* Icon */}</div>
          <h3 className="text-2xl font-bold pb-4">Text us on Discord</h3>
          <div>
            <p>
              Feel free to drop us a message on our Code Red Academy Discord
              Server
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="flex flex-col bg-zinc-900 text-white pb-14 items-center justify-center">
          <h1 className="text-4xl font-bold pb-14">Leave us a message 🙋</h1>
          <div className="flex flex-col items-center">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="flex flex-col items-center gap-8 bg-gradient-to-tr from-violet-500 to-fuchsia-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div>
                <input
                  type="text"
                  className="mb-6 shadow-lg border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  maxlenght="256"
                  name="name"
                  data-name="Name"
                  placeholder="Name"
                  id="name"
                ></input>
                <input
                  type="email"
                  className="shadow-lg border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  maxlenght="256"
                  name="email"
                  data-name="Email"
                  placeholder="Email"
                  id="email"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  className="mb-6  shadow-lg border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  maxlenght="256"
                  name="Company"
                  data-name="Company"
                  placeholder="Company Name"
                  id="Company-2"
                ></input>
                <input
                  type="email"
                  className="shadow-lg border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  maxlenght="256"
                  name="Website"
                  data-name="Website"
                  placeholder="Website"
                  id="Website"
                ></input>
              </div>
              <div className="flex flex-col px-36">
                <textarea
                  placeholder="Your message"
                  className="shadow-lg border rounded w-full px-8 pt-8 pb-8  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  maxlenght="5000"
                  id="Message"
                  name="Message"
                  data-name="Message"
                  required
                ></textarea>
                <label className="py-6">
                  <input
                    type="checkbox"
                    name="Acceptance-Checkbox"
                    id="Acceptance-Checkbox"
                    data-name="Acceptance-Checkbox"
                    required
                    styles="opacity:0;position:abolute;z-index:-1"
                  ></input>
                  <span
                    className="text-red-400 font-bold"
                    form="Acceptance-Checkbox"
                  >
                    By submitting, you agree to our Privacy Policy and Terms.
                    We&apos;ll never share your information.
                  </span>
                </label>
                <Link href="/">
                  <input
                    type="submit"
                    value="SEND MESSAGE"
                    data-wait="Please wait..."
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-black shadow-lg font-bold rounded-lg px-40 py-4"
                  ></input>
                </Link>
              </div>
            </form>

            {/* <div className="" role="region" aria-label="Email Form success">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="" role="region" aria-label="Email Form failure">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default contact;
