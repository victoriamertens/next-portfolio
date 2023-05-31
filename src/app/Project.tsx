import Image from 'next/image';
import ProjectHover from './ProjectHover';

export default function Project(props) {
  console.log(props);
  return (
    <div className=" border border-solid rounded-md m-5">
      <div className="w-52 h-52">
        <Image
          src={props.img}
          width={208}
          height={208}
          className="rounded-md"
          alt={props.alt}
        />
      </div>
      <div className="relative  bg-blue-600 rounded-md  opacity-0 transition duration-300 ease-in-out hover:opacity-100">
        <ProjectHover des={props.des} />
      </div>
    </div>
  );
}
