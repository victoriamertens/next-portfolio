export const metadata = {
  title: 'About',
  description: 'Generated by create next app',
};

import me from '../../../public/walking-me.png';
import victoriamain from '../../../public/victoria-main.jpeg';
import photome from '../../../public/about-fun.jpeg';
import Image from 'next/image';
import RainbowBlob from '../RainbowBlob';

export default function About() {
  return (
    <div>
      <RainbowBlob />
      <div className="flex flex-col-reverse sm:flex-row align-middle my-20 justify-center">
        <div
          id="left-side"
          className="flex flex-col items-center gap-4 justify-center"
        >
          <h2 className=" sm:text-5xl text-4xl tracking-wider w-[450px] text-shadow-white text-center leading-loose z-10">
            Hi, my name is{' '}
            <span className="sm:text-5xl font-bold text-4xl tracking-widest p-10">
              Victoria
            </span>
          </h2>

          <div className="flex flex-col items-center w-80 sm:w-96 z-10">
            <p className="flex justify-items-center sm:text-xl text-center text-shadow-white text-lg p-5 ">
              I think I am pretty cool, but I am a bit biased.
            </p>

            <a
              href="./resume.pdf"
              className="w-40 md:text-lg text-base text-center text-blue-700 border border-blue-700 bg-blue-100 rounded-md p-1 z-10"
            >
              view my resume
            </a>
          </div>
        </div>

        <div
          id="right-side"
          className="flex flex-col items-center max-h-70 -mr-10 z-10"
        >
          <Image
            src={me}
            // width={300}
            alt="Cartoon of Victoria holding MacBook and coffee"
            className="sm:w-80 w-52"
            priority={true}
          />
        </div>
      </div>
      <div id="About-Card" className="p-10">
        {/* <div>
          <h2 className="text-5xl text-white py-10 border bg-blue-500 -ml-14 w-72 rounded-r-full pl-5 font-bold tracking-wider">
            About Me
          </h2>
        </div> */}
        <div className="flex flex-col sm:flex-row justify-evenly items-center my-10 gap-10">
          <Image
            src={photome}
            alt="Victoria with sunglasses on"
            // width={200}
            // height={300}
            className="object-cover h-60  w-60 basis-60 grow-0 shrink-0 overflow-hidden rounded-full"
          />

          <p className=" text-lg max-w-xl">
            At my core, I am a creator and a learner. I love to build things,
            whether they are stored in 8-bit, use a drill bit, or are just a bit
            of my imagination. My projects often push me to learn new things and
            develop new skills so that I never stop learning.
          </p>
        </div>

        <div id="more-about-me" className="flex flex-col">
          <h3 className="my-10 text-3xl">More about me...</h3>
          <div className="flex justify-around flex-wrap ">
            <div
              id="author-illustrator-box"
              className="m-10 p-4 border shadow-2xl rounded-lg w-96 flex flex-col justify-center items-center hover:bg-gradient-to-r from-indigo-500/50 via-purple-500/50- to-yellow-300/50"
            >
              <div className="flex ">
                <div
                  className=" flex flex-col justify-center"
                  aria-hidden={true}
                >
                  &#9999;
                </div>

                <h3 className="text-xl font-bold p-2">
                  I am an Author / Illustrator!
                </h3>
                <div
                  className="flex flex-col justify-center"
                  aria-hidden={true}
                >
                  &#128397;&#65039;
                </div>
              </div>
              <p className="p-5">
                My very first dream was to be a writer. At 12 years old I wrote
                my first book (and yes, it is embarassingly funny) and now I am
                working on a graphic novel.
              </p>
              <p>
                {' '}
                <a
                  href="https://medium.com/@victoria.mertens44"
                  className="inline underline text-blue-700"
                >
                  Check out my blog!
                </a>
              </p>
            </div>

            <div
              id="rock-climbing-box"
              className="m-10 p-4 border shadow-2xl rounded-lg w-96 flex flex-col justify-center items-center hover:bg-gradient-to-r from-yellow-500/50 via-purple-500/50- to-pink-500/50"
            >
              <div className="flex">
                <div
                  className="flex flex-col justify-center"
                  aria-hidden={true}
                >
                  &#x1f9d7;
                </div>
                <h3 className="text-xl font-bold p-2">I am a Rock Climber!</h3>
              </div>
              <p className="p-5">
                Whether it is top-rope climbing or bouldering, I love to climb
                colorful walls. It is like a puzzle for your body! I enjoy the
                cognitive and physical challenge of it.
              </p>
            </div>

            <div
              id="research-box"
              className="m-10 p-4 border shadow-2xl rounded-lg w-96 flex flex-col justify-center items-center hover:bg-gradient-to-r from-pink-500/50 via-purple-500/50- to-yellow-300/50"
            >
              <div className="flex">
                <div
                  className="flex flex-col justify-center"
                  aria-hidden={true}
                >
                  {' '}
                  &#128300;
                </div>
                <h3 className="text-xl font-bold p-2">I am a Researcher!</h3>
              </div>
              <p className="p-5">
                In college, I completed a research study on mental health and
                absolutely loved the experience. Now, I research for fun, often
                going on deep dives into topics like food science and design.
              </p>
            </div>

            <div
              id="sewing-box"
              className="m-10 p-4 border shadow-2xl rounded-lg w-96 flex flex-col justify-center items-center hover:bg-gradient-to-r from-yellow-500/50 via-purple-500/50- to-indigo-500/50"
            >
              <div className="flex">
                <div
                  className="flex flex-col justify-center"
                  aria-hidden={true}
                >
                  {' '}
                  &#129697;
                </div>
                <h3 className="text-xl font-bold p-2">I am a Creator!</h3>
                <div
                  className="flex flex-col justify-center"
                  aria-hidden={true}
                >
                  &#128296;
                </div>
              </div>
              <p className="p-5">
                I love making all different kinds of things! I design my own
                clothes and upcycle vintage pieces into something uniquely me. I
                enjoy woodworking and restoring old furniture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//
