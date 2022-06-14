import React from "react";
import Link from "next/link";

function Footer() {
  return (
    //  footer-container
    <div className="">
      <div className="flex flex-col p-4 items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <p className="text-2xl font-bold">Speed up your learning curve</p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            {/* <Button buttonStyle="btn--outline">Subscribe</Button> */}
          </form>
        </div>
      </div>

      <div className="grid grid-cols-2 bg-black text-white pl-10 py-4 gap-4 sm:grid sm:grid-cols-4 sm:pt-4 sm:bg-black sm:text-white sm:justify-items-center">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Company</h1>
          <Link href="/courses">
            <a>Courses</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>

          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/community">
            <a>Community</a>
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Legal</h2>
          <Link href="/accessibility">
            <a>Accessibility</a>
          </Link>
          <Link href="/terms">
            <a>Terms and Conditions</a>
          </Link>
          <Link href="/legal">
            <a>Legal Disclosure</a>
          </Link>

          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
          <Link href="/">
            <a>Cookie Policy</a>
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-bold">Social Media</h2>
          <Link href="/">
            <a>Instagram</a>
          </Link>
          <Link href="/">
            <a>Facebook</a>
          </Link>
          <Link href="/">
            <a>Youtube</a>
          </Link>
          <Link href="/">
            <a>Twitter</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
