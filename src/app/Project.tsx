import Image from 'next/image';
import ProjectHover from './ProjectHover';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

type propsProject = {
  img: StaticImageData;
  alt: string;
  des: string;
  url: string;
  name: string;
};

export default function Project(props: propsProject) {
  return (
    <div className="m-10">
      <div className=" border border-solid rounded-md w-72 h-72">
        <div className="w-72 h-72">
          <Image
            src={props.img}
            width={288}
            height={288}
            className="rounded-md"
            alt={props.alt}
          />
        </div>
        <div className="relative  bg-blue-600 rounded-md">
          <ProjectHover des={props.des} url={props.url} name={props.name} />
        </div>
      </div>
    </div>
  );
}
