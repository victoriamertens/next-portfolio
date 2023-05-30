import Image from 'next/image';
import Description from './Description';
import me from '../../public/walking-me.png';
import Project from './Project';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row align-middle h-96 my-20 justify-center">
        <div
          id="left-side"
          className="flex flex-col items-center gap-4 justify-center"
        >
          <h2 className=" sm:text-7xl text-4xl font-bold tracking-wider">
            Victoria
          </h2>
          <h2 className="sm:text-7xl text-4xl font-bold tracking-wider">
            {' '}
            Mertens
          </h2>
          <div className="flex flex-col items-center">
            <p className="flex justify-items-center sm:text-2xl text-lg p-5 font-bold">
              Software Engineer
            </p>
            <p className=" md:text-xl text-base text-center w-[390px]">
              Building applications that are <Description />
            </p>
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
      <div className="flex justify-around">
        <Project
          img="/../public/happy_closet_icon.jpg"
          alt="happy-closet-icon"
          des="A virtual closet application using AWS S3 for image upload."
        />

        {/* <Project /> */}
        {/* <Project /> */}
      </div>
    </div>
  );
}
