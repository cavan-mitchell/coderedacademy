import React from "react";
import Image from "next/image";

function courses() {
  return (
    <>
      <section className="flex flex-row items-center justify-center bg-zinc-900">
        <div>
          <Image
            src="https://cdn.pixabay.com/photo/2016/05/11/13/20/keyboard-1385706_960_720.jpg"
            alt=""
            width="1680px"
            height="550px"
          />
        </div>
        <div className="flex flex-col absolute w-full h-auto text-white items-center">
          {/* Flexible item */}
          <h1 className=" text-4xl font-bold">Start learning now</h1>
          <h3 className=" text-lg pt-20 font-bold">
            Havent enrolled in a course yet? This is the perfect place to start.
          </h3>
          <h3>Choose any of our courses and start learning new skills.</h3>
        </div>
      </section>

      <section className="flex flex-row bg-zinc-900 text-white py-14">
        <div className="flex flex-col w-1/2 items-center">
          <h2 className="font-bold text-3xl">Code Red Membership</h2>
          <div className="font-bold text-lg pt-6 pb-10">
            Access to all courses and more
          </div>
          <div>
            <button className="rounded-lg bg-orange-400 text-black px-4 py-2 font-bold">
              Become a member! $25/month
            </button>
          </div>
        </div>

        <div className="flex flex-col w-1/2 gap-10 px-16">
          <div className="flex flex-row">
            <div className="flex justify-center w-1/4">
              <Image
                src="https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095_960_720.jpg"
                alt=""
                width="115px"
                height="65px"
              />
            </div>
            <div className="w-1/2">
              Getting started with C# for absolute beginers
            </div>
            <div className="w-1/4">$129</div>
          </div>

          <div className="flex flex-row ">
            <div className="flex justify-center w-1/4">
              <Image
                src="https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095_960_720.jpg"
                alt=""
                width="115px"
                height="65px"
              />
            </div>
            <div className="w-1/2">Getting started with AR Development</div>
            <div className="w-1/4">$199</div>
          </div>
          <div className="flex flex-row">
            <div className="flex justify-center w-1/4">
              <Image
                src="https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095_960_720.jpg"
                alt=""
                width="115px"
                height="65px"
              />
            </div>
            <div className="w-1/2">Getting started with VR Development</div>
            <div className="w-1/4">$199</div>
          </div>
        </div>
      </section>

      <div className="flex flex-row justify-center bg-zinc-900 text-3xl font-bold text-white pb-10">
        <h2> Our Courses</h2>
      </div>
      <section className="flex flex-row bg-zinc-900">
        <div className="text-white text-lg w-1/4">
          <aside className="pl-14">
            <div>all</div>
            <div>Not enrolled</div>
            <div>newest</div>
            <div>popular</div>
            <div>free</div>

            <div>
              <div>CATEGORIES</div>
              <div>AR Development</div>
              <div>C# Development</div>
              <div>Unity Development</div>
              <div>VR Development</div>
            </div>
          </aside>
        </div>

        <div className="grid grid-cols-3 w-3/4 gap-10 text-white">
          <div>
            <Image
              src="https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095_960_720.jpg"
              alt=""
              width="260px"
              height="150px"
            />
            <h3 className="text-white text-lg font-bold pt-5 pb-4">
              Getting started with: C# for absolute beginners
            </h3>
            <div className="">
              In this course, you will learn the fundamentals of C# programming
              for Unity development
            </div>

            <div className="flex flex-row justify-center ">
              <button className="bg-orange-400 text-black rounded-xl py-2 px-4 mb-14 mt-8 ">
                Enroll
              </button>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095_960_720.jpg"
                alt=""
                width="260px"
                height="150px"
              />
              <h3 className="text-white text-lg font-bold pt-5 pb-4">
                Getting started with: C# for absolute beginners
              </h3>
              <div>
                In this course, you will learn the fundamentals of C#
                programming for Unity development
              </div>
            </div>
            <div className="flex flex-row justify-center ">
              <button className="bg-orange-400 text-black rounded-xl py-2 px-4 mb-14 mt-8 ">
                Enroll
              </button>
            </div>
          </div>

          <div>
            <div>
              <Image
                src="https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095_960_720.jpg"
                alt=""
                width="260px"
                height="150px"
              />
              <h3 className="text-white text-lg font-bold pt-5 pb-4">
                Getting started with: C# for absolute beginners
              </h3>
              <div>
                In this course, you will learn the fundamentals of C#
                programming for Unity development
              </div>
            </div>
            <div className="flex flex-row justify-center ">
              <button className="bg-orange-400 text-black rounded-xl py-2 px-4 mb-14 mt-8 ">
                Enroll
              </button>
            </div>
          </div>

          <div>
            <div>
              <Image
                src="https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095_960_720.jpg"
                alt=""
                width="260px"
                height="150px"
              />
              <h3 className="text-white text-lg font-bold pt-5 pb-4">
                Getting started with: C# for absolute beginners
              </h3>
              <div>
                In this course, you will learn the fundamentals of C#
                programming for Unity development
              </div>
            </div>
            <div className="flex flex-row justify-center ">
              <button className="bg-orange-400 text-black rounded-xl py-2 px-4 mb-14 mt-8 ">
                Enroll
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default courses;
