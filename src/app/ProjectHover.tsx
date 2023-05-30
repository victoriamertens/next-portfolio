export default function ProjectHover(props) {
  return (
    <div className="absolute bottom-0 flex flex-col items-center p-4 w-52 h-52 rounded-md bg-blue-600">
      <p className="text-center  text-lg text-white opacity-100 z-10">
        {props.des}
      </p>
      <button className="border border-solid p-2 px-5 rounded-3xl m-4 text-blue-300">
        Go to Project
      </button>
    </div>
  );
}
