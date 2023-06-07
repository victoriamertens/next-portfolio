type propsHover = {
  name: string;
  des: string;
  url: string;
};

export default function ProjectHover(props: propsHover) {
  return (
    <div
      tabIndex={0}
      className="absolute bottom-0 flex flex-col  p-4 w-72 h-72 rounded-md bg-blue-600 opacity-0 focus:opacity-100 hover:opacity-100"
    >
      <div className="flex flex-col justify-center  h-72">
        <h3 className="text-2xl text-white p-2 text-center ">{props.name}</h3>
        <dfn className="text-center  text-lg text-white opacity-100 z-10">
          {props.des}
        </dfn>
        <a
          role="link"
          href={props.url}
          className="text-center border border-solid p-2 px-5 rounded-3xl m-4 text-blue-300"
          aria-hidden={true}
        >
          <span>Go to Project</span>
        </a>
      </div>
    </div>
  );
}
