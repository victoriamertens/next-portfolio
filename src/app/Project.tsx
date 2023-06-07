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
    <div className=" border border-solid rounded-md m-5 w-72 h-72">
      <div className="w-72 h-72">
        <Image
          src={props.img}
          width={288}
          height={288}
          className="rounded-md"
          alt={props.alt}
        />
      </div>
      <div className="relative  bg-blue-600 rounded-md transition duration-300 ease-in-out ">
        <ProjectHover des={props.des} url={props.url} name={props.name} />
      </div>
      <div className="-mt-10 text-center">
        <a
          role="link"
          href={props.url}
          tabIndex={0}
          className="text-center border border-solid p-2 px-5 rounded-3xl m-4 text-white bg-blue-700 opacity-0 focus:opacity-100"
        >
          Go to Project
        </a>
      </div>
    </div>
  );
}
