import Image from 'next/image';
import Description from './Description';
import me from '../../public/walking-me.png';

export default function Home() {
  return (
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
          <p className="flex flex-1 justify-items-center md:text-xl text-base">
            Designing and building applications that are
          </p>
          <Description />
        </div>
      </div>

      <div
        id="right-side"
        className="flex flex-col items-center max-h-70 -mt-10"
      >
        <Image
          src={me}
          // width={300}
          alt="Cartoon of Victoria holding MacBook and coffee"
          className="sm:w-72 w-52"
        />
      </div>
    </div>
  );
}
