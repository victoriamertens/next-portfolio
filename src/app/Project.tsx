import Image from 'next/image';
import ProjectHover from './ProjectHover';

export default function Project(props) {
  console.log(props);
  return (
    <div className="w-52 h-52 border rounded-md">
      <Image
        src={props.img}
        width={500}
        height={500}
        className="rounded-md"
        alt={props.alt}
      />
      <div className="relative bottom-0 left-0 right-0 top-0 -mt-[206px] h-full w-full overflow-hidden bg-blue-600 rounded-md bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
        <ProjectHover des={props.des} />
      </div>
    </div>
  );
}
