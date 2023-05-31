import Image from 'next/image';
import ProjectHover from './ProjectHover';

type propsProject = {
  img: string;
  alt: string;
  des: string;
  url: string;
  name: string;
};

export default function Project(props: propsProject) {
  console.log(props);
  return (
    <div className=" border border-solid rounded-md m-5">
      <div className="w-72 h-72">
        <Image
          src={props.img}
          width={288}
          height={288}
          className="rounded-md"
          alt={props.alt}
        />
      </div>
      <div className="relative  bg-blue-600 rounded-md  opacity-0 transition duration-300 ease-in-out hover:opacity-100">
        <ProjectHover des={props.des} url={props.url} name={props.name} />
      </div>
    </div>
  );
}
