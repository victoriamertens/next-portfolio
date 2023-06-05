import Image from 'next/image';
import Description from './Description';
import me from '../../public/walking-me.png';
import Project from './Project';
import RainbowBlob from './RainbowBlob';

export default function Home() {
  return (
    <div>
      <RainbowBlob />
      <div className="flex flex-col-reverse sm:flex-row align-middle h-96 my-20 justify-center">
        <div
          id="left-side"
          className="flex flex-col items-center gap-4 justify-center z-10"
        >
          <h2 className=" sm:text-7xl text-4xl font-bold tracking-wider text-shadow-white">
            Victoria
          </h2>
          <h2 className="sm:text-7xl text-4xl font-bold tracking-wider text-shadow-white">
            {' '}
            Mertens
          </h2>
          <div className="flex flex-col items-center">
            <p className="flex justify-items-center sm:text-2xl text-lg p-5 font-bold text-shadow-white z-10">
              Software Engineer
            </p>
            <p className=" md:text-xl text-base text-center w-[390px] text-shadow-white ">
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
      <h3 className="text-4xl tracking-wider p-10 text-center">Projects</h3>
      <div className="flex justify-around flex-wrap ">
        <Project
          img="/../public/happy_closet_icon.jpg"
          alt="happy-closet-icon"
          des="A virtual closet application using AWS S3 for image upload."
          url="http://www.happycloset.app"
          name="Happy Closet"
        />
        <Project
          img="/../public/MWP-icon.png"
          alt="happy-closet-icon"
          des="Client Project for Minnesota Women's Press, a non-profit in Minneapolis."
          url="https://github.com/pdebuque/MN-Womens-Press-CM"
          name="MWP Content Manager"
        />
        <Project
          img="/../public/weather-app-copy.png"
          alt="happy-closet-icon"
          des="Serverless weather application using AWS Lambda and weather API."
          url="https://github.com/victoriamertens/100days/tree/main/packages/weather-app"
          name="Weather App API"
        />
      </div>
    </div>
  );
}
