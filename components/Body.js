import React from "react";
import Link from "next/link";
import Image from "next/image";

function Body() {
  return (
    <>
      <div className="flex flex-col h-auto px-10 py-28 bg-neutral-900 text-white font-bold">
        <section className="flex flex-row justify-around">
          <div>BEGINNER FRIENDLY</div>
          <div>PRIVATE DISCORD COMMUNITY</div>
          <div>UP TO DATE</div>
          <div>TOP INSTRUCTORS</div>
        </section>
      </div>

      <section className="sm:flex sm:flex-col lg:flex lg:flex-row bg-neutral-900 text-white px-12 py-20">
        <div className="w-1/2 pr-10">
          <Image
            src="https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095_960_720.jpg"
            alt=""
            width="350px"
            height="350px"
          />
        </div>
        <div>
          <h3 className="pb-4 text-lg font-bold">We have Been There Too</h3>
          <h1 className="pb-6 text-4xl font-bold">
            Getting into the AR/VR industry can be stressfull and overwhelming
          </h1>

          {/* 2 column of UL */}
          <div className="flex flex-row justify-start">
            <div>
              <p className="mb-4">Lots of new and unknown skills needed</p>
              <p>Bootcamps are quite expensive $10,000+</p>
            </div>
            <div className="pl-8">
              <p className="mb-4">
                Constantly new software and hardware updates
              </p>
              <p>No clear roadmap</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-zinc-900">
        <div className="flex flex-row items-center">
          <Image
            src="https://cdn.pixabay.com/photo/2017/03/10/06/49/san-francisco-2131951_960_720.jpg"
            alt=""
            width="1400px"
            height="400px"
          />

          <div className="flex w-full h-auto absolute text-white text-4xl z-10 font-bold justify-center">
            <p>AR and VR will create the Metaverse and millions of jobs</p>
          </div>
        </div>
      </section>

      {/* Meet your instructor */}
      <section className="py-8 bg-zinc-900 flex flex-row w-full">
        {/* 2 images */}
        <div className="flex flex-col w-1/2 items-center">
          <div className="pb-6 pr-12">
            <Image
              src="https://cdn.pixabay.com/photo/2019/04/29/07/04/software-development-4165307_960_720.jpg"
              alt=""
              width="300px"
              height="200px"
            />
          </div>
          <div className="pl-12">
            <Image
              src="https://cdn.pixabay.com/photo/2019/02/10/09/21/lecture-3986809_960_720.jpg"
              alt=""
              width="300px"
              height="200px"
            />
          </div>
        </div>

        <div className="w-1/2 text-white py-4">
          <h3 className="text-lg font-bold pb-6">MEET YOUR INSTRUCTOR</h3>
          <h1 className="text-4xl font-bold pb-6">
            We are here to help you to get into AR/VR
          </h1>
          <p className="text-lg pb-6">
            Cavan Mitchell has been eating, drinking and breathing immersive
            technologies (Augmented Reality, Virtual Reality) for more than 5
            years. Today, he uses his experience to pave the way for upcoming
            professionals by teaching them how to create immersive experiences
            on his YouTube channel and Code Red Academy, his online education
            platfo
          </p>
          <Link href="/">
            <button className="bg-orange-400 rounded-full font-bold px-4 py-2">
              GET ACCESS
            </button>
          </Link>
        </div>
      </section>

      <section className="flex flex-col bg-zinc-900 text-white">
        <div className="flex flex-col items-center">
          <span className="text-4xl">Subscribing to Code Red Academy</span>
          <br></br>
          <span>Its as easy as 1, 2, 3 ...</span>
        </div>
        <div className="flex flex-row pt-16 gap-10 px-14">
          <div>
            <p className="font-bold text-lg pb-4">
              Enroll in our exclusive membership
            </p>
            <p className="text-sm">
              We constantly update our courses, research and develop new ways of
              interactions that we share with you and host regular events to
              bring you to the next level.
            </p>
          </div>
          <div>
            <p className="font-bold text-lg pb-4">
              Get full and unlimited access to all courses
            </p>
            <p className="text-sm">
              We are fully committed to AR/VR Creation. At the moment, we offer
              beginner courses for AR/VR Development. And yes, we will also
              teach you to create multiuser AR/VR experiences in the future.
              Stay tuned!
            </p>
          </div>
          <div>
            <p className="font-bold text-lg pb-4">
              Enjoy a confident new version of yourself
            </p>
            <p className="text-sm">
              Our ultimate goal is to make you a capable and professional AR/VR
              Developer or Designer. If you follow along youll have the
              essential skills you need to thrive in the AR/VR industry.
            </p>
          </div>
        </div>
      </section>

      <div className="flex w-full justify-center bg-zinc-900 py-16">
        <Link href="/">
          <button className="bg-orange-500 text-white font-bold rounded-full px-4 py-2">
            GET ACCESS
          </button>
        </Link>
      </div>

      <section className="bg-zinc-900 text-white">
        <div className="flex flex-col items-center pb-12">
          <span className="font-bold text-4xl pb-8">
            Youre in the right hands{" "}
          </span>
          <p>
            We too were frustrated by the learning experience that many
            platforms offer.
          </p>
          <p>Thats why we created Code Red Academy.</p>
        </div>

        <div className="grid grid-cols-3 pb-14 gap-10 px-14">
          <div>
            <p className="font-bold text-lg pb-4">
              We value quality over quantity
            </p>
            <p>
              We constantly update our courses, research and develop new ways of
              interactions that we share with you and host regular events to
              bring you to the next level.
            </p>
          </div>
          <div>
            <p className="font-bold text-lg pb-4">
              Youll learn from industry experts
            </p>
            <p>
              You can be confident that the skills we teach will prepare you for
              the real world. Your mentors will be industry professionals with
              years of hands-on experience in Design, Development and Business.
            </p>
          </div>
          <div>
            <p className="font-bold text-lg pb-4">
              Your gateway into the XR industry
            </p>
            <p>
              Our network is your network. Whether you are looking for like
              minded peers or your future dream job, meeting the right people is
              absolutely crucial. As part of our platform we will help you have
              a voice in the XR field and meet the people you need to succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 text-white pb-14">
        <div className="flex justify-center">
          <p className="text-4xl font-bold pb-16">What we offer</p>
        </div>

        <div className="flex justify-around">
          <div>
            <div className="flex flex-col items-center bg-orange-400 text-black py-6">
              <h1 className="font-bold text-lg">Individual Courses</h1>
              <p>SINGLE PURCHASE</p>
            </div>

            <div className="flex flex-col bg-zinc-800 items-center">
              <p>129-199 one-time</p>
              <div>See course details for exact prices</div>
              <div className="pb-6 px-8">
                <ul>
                  <li>Lifetime access</li>
                  <li>All handmade 3D assets included</li>
                  <li>Access to Resource Library</li>
                  <li>Access to project repository</li>
                </ul>
              </div>
              <Link href="/">
                <button className="rounded-md font-bold border-2 px-6 py-3">
                  GET ACCESS
                </button>
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center bg-orange-400 text-black py-6">
              <h1 className="font-bold text-lg">Code Red Academy</h1>
              <p>MEMBERSHIP</p>
            </div>

            <div className="flex flex-col bg-zinc-800 items-center">
              <p>26 €/month</p>

              <div className="pb-6 px-8">
                <ul>
                  <li>Access to all courses</li>
                  <li>Access to all project repositories</li>
                  <li>Access to private Discord channel</li>
                  <li>Access to Resource Library</li>
                  <li>Cancel anytime</li>
                </ul>
              </div>
              <Link href="/">
                <button className="rounded-md font-bold border-2 px-6 py-3">
                  GET ACCESS
                </button>
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center bg-orange-400 text-black py-6">
              <h1 className="font-bold text-lg">Exclusive</h1>
              <p>CONSULTING</p>
            </div>

            <div className="flex flex-col bg-zinc-800 items-center">
              <p>4000 €/month</p>

              <div className="pb-6 px-8">
                <ul>
                  <li>All membership benefits plus:</li>
                  <li>Intense 1 on 1 coaching</li>
                  <li>Custom project support</li>
                  <li>High priority email support</li>
                  <li>Cancel anytime</li>
                </ul>
              </div>
              <Link href="/">
                <button className="rounded-md font-bold border-2 px-6 py-3">
                  APPLY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 pb-14 text-white">
        <div className="flex justify-center font-bold text-3xl pb-14">
          <p>Code Red Academy with your words</p>
        </div>

        <div className="grid grid-cols-3 gap-10 px-14">
          <div className="py-10 bg-zinc-800 px-8">
            <div>image here</div>
            <p>
              Code Red Academy is filling the gap between the demand for XR
              professionals and the supply of trained XR developers. Love the
              fact that finally we have complete XR courses available.
            </p>
            <p className="pt-10">Jeremy Hernandez</p>
          </div>
          <div className="py-10 bg-zinc-800 px-8">
            <div>image here</div>
            <p>
              Code Red Academy is filling the gap between the demand for XR
              professionals and the supply of trained XR developers. Love the
              fact that finally we have complete XR courses available.
            </p>
            <p className="pt-10">Jeremy Hernandez</p>
          </div>
          <div className="py-10 bg-zinc-800 px-8">
            <div>image here</div>
            <p>
              Code Red Academy is filling the gap between the demand for XR
              professionals and the supply of trained XR developers. Love the
              fact that finally we have complete XR courses available.
            </p>
            <p className="pt-10">Jeremy Hernandez</p>
          </div>
        </div>
      </section>

      <section className="flex flex-row bg-zinc-900 text-white">
        <div className="flex flex-col items-center w-1/3">
          <Image
            src="https://cdn.pixabay.com/photo/2017/07/31/14/45/code-2558220_960_720.jpg"
            alt=""
            width="250px"
            height="150px"
          />

          <p>
            <strong>Final Price</strong>
          </p>
          <p>
            <strong>$26/Month</strong>
          </p>
        </div>
        <div className="w-2/3">
          <div className="font-bold pb-4">
            ORDER DETAILS: SUBSCRIPTION (3 COURSES)
          </div>
          <h2 className="font-bold pb-4">Code Red Academy membership</h2>
          <p className="font-bold pb-3">
            Code Red Academy is a membership platform, where you can learn to
            create powerful AR/VR applications. The platform is built for
            developers, UI/UX designers, sound designers, and people who want to
            get into or grow in this new upcoming industry.
          </p>
          <div className="font-bold pb-14">
            <div>COURSES INCLUDED</div>
            <div>Getting started with: VR Development</div>
            <div>Getting started with: C# for absolute beginners</div>
            <div>Getting started with: AR Development</div>
          </div>
        </div>
      </section>

      <section className="flex flex-row bg-zinc-900 text-white">
        <div className="w-1/3 pl-8">
          <h1>01.</h1>
          <h3 className="text-xl font-bold">Sign up</h3>
        </div>
        <div className="w-2/3 ">
          <div className="flex flex-col w-1/3 ">
            <label form="name">* WHATS YOUR NAME?</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="flex flex-col w-1/3">
            <label form="password">* YOUR PASSWORD?</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label form="email">* WHATS YOUR E-MAIL?</label>
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>
          <div className="flex flex-col w-1/3">
            <label form="country">COUNTRY</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
            />
          </div>
          <div className="pt-10">
            Do you already have an account? <Link href="/">Log in</Link> here.
          </div>
        </div>
      </section>

      <section className="flex flex-row bg-zinc-900 text-white pt-14 pb-14">
        <div className="w-1/3 pl-8">
          <h1>02.</h1>
          <h3 className="text-xl font-bold">Payment Method</h3>
        </div>

        <div className="w-2/3">
          <div className="flex flex-col w-1/3">
            <label form="card">CARD NUMBER</label>
            <input
              type="text"
              id="card"
              name="card"
              placeholder="1234 1234 1234 1234"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label form="date">EXPIRATION DATE</label>
            <input type="text" id="date" name="date" placeholder="MM/YY" />
          </div>
          <div className="flex flex-col w-1/3">
            <label form="cvc">CVC</label>
            <input type="text" id="cvc" name="cvc" placeholder="CVC" />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-1/3">
              <label form="coupon">HAVE A COUPON?</label>
              <input type="text" id="coupon" name="coupon" placeholder="" />
            </div>

            <div className="flex justify-end pl-8">
              <button className="rounded-2xl bg-orange-400 text-black font-bold px-4 py-2">
                Redeem
              </button>
            </div>
          </div>
          <div>
            I would like to receive news, tips and tricks, and other promotional
            material
          </div>
        </div>
      </section>

      <section className="flex flex-row bg-zinc-900 text-white pb-14">
        <div className="w-1/3 pl-8">
          <h1>03.</h1>
          <h3 className="text-xl font-bold">Check out</h3>
        </div>

        <div className="flex flex-col text-white w-2/3">
          <div>Subscription Fee: $25/month</div>
          <div>
            <button className="rounded-2xl bg-orange-400 text-black font-bold px-40 py-4">
              Buy
            </button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 text-white pb-14">
        <div className="flex flex-col items-center">
          <h1>
            GUARANTEED SECURITY USING ONE OF THE MOST ADVANCED ENCRYPTED SYSTEMS
            ON THE MARKET.
          </h1>
          <p>
            The information in this page is being processed and encrypted
            securely using industry-leading encryption and fraud prevention
            tools.
          </p>
        </div>
      </section>
    </>
  );
}

export default Body;
