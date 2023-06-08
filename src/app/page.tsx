import Image from 'next/image';
import Description from './Description';
import me from '../../public/walking-me.png';
import Project from './Project';
import RainbowBlob from './RainbowBlob';
import MWP from '../../public/MWP-icon.png';
import HC from '../../public/happy_closet_icon.jpg';
import Weather from '../../public/weather-app-copy.png';

export default function Home() {
  return (
    <div className="mb-10">
      <RainbowBlob />
      <div className="flex flex-col-reverse items-center  sm:flex-row sm:align-middle h-96 my-20 sm:justify-center">
        <div
          id="left-side"
          className="flex flex-col items-center gap-4 justify-center max-w-[400px]"
        >
          <h2 className="sm:text-7xl text-4xl font-bold tracking-wider text-shadow-white z-10 text-center">
            Victoria Mertens
          </h2>
          <div className="flex flex-col items-center">
            <p className="flex justify-items-center sm:text-2xl text-lg p-5 font-bold text-shadow-white z-10">
              Software Engineer
            </p>
            <div className="flex text-center">
              <p className=" md:text-xl text-base text-shadow-white pr-1">
                Building applications that are
              </p>
              <Description />
            </div>
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
      <h3 className="text-4xl tracking-wider p-10 text-center">Projects</h3>
      <div className="flex justify-around flex-wrap ">
        <Project
          img={HC}
          alt="Happy Closet application icon"
          des="A virtual closet application using AWS S3 for image upload."
          url="http://www.happycloset.app"
          name="Happy Closet"
        />
        <Project
          img={MWP}
          alt="Minnesota Women's Press Icon"
          des="Client Project for Minnesota Women's Press, a non-profit in Minneapolis."
          url="https://github.com/pdebuque/MN-Womens-Press-CM"
          name="MWP Content Manager"
        />
        <Project
          img={Weather}
          alt="Weather application icon"
          des="Serverless weather application using AWS Lambda and weather API."
          url="https://github.com/victoriamertens/100days/tree/main/packages/weather-app"
          name="Weather App API"
        />
      </div>
    </div>
  );
}
