export const metadata = {
  title: 'About',
  description: 'Generated by create next app',
};

import me from '../../../public/walking-me.png';
import photome from '../../../public/about-fun.jpeg';
import Image from 'next/image';
import RainbowBlob from '../projects/RainbowBlob';

import Link from 'next/link';

export default function About() {
  return (
    <div>
      <RainbowBlob />
      <div className="flex flex-col-reverse sm:flex-row align-middle  my-20 justify-center">
        <div
          id="left-side"
          className="flex flex-col items-center gap-4 justify-center "
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
          className="flex flex-col items-center max-h-70 -mr-10"
        >
          <Image
            src={me}
            // width={300}
            alt="Cartoon of Victoria holding MacBook and coffee"
            className="sm:w-72 w-52"
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
            At my core, I am a creator and a learner. I love to build and create
            things, whether they are stored in 8-bit, use a drill bit, or are
            just a bit of my imagination. My projects often push me to learn new
            things and develop new skills so that I never stop learning.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="my-10 text-3xl">I build applicaitons that are...</h3>
          <div className="flex justify-around">
            <div className="border border-black w-40 h-40">
              <h3 className="border border-black bg-blue-600 -mt-2 -ml-2 w-5">
                1
              </h3>
              <h3 className="text-xl font-bold">Accesible</h3>
              <p>
                Accessibility is a moving target, one that we should constantly
                be striving for.
              </p>
            </div>
            <div className="border border-black w-40 mt-10 h-40">
              <h3 className="border border-black bg-blue-600 -mt-2 -ml-2 w-5">
                2
              </h3>
              <h3 className="text-xl font-bold">Responsive</h3>
              <p>
                Responsive applications make a better experience for users of
                all abilities and needs.
              </p>
            </div>
            <div className="border border-black w-40 mt-20 h-40">
              <h3 className="border border-black bg-blue-600 -mt-2 -ml-2 w-5">
                3
              </h3>
              <h3 className="text-xl font-bold">Engaging</h3>
              <p>
                Building engaging applications means connecting with users,
                designing a highly usable product, and making an impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//
