import Image from 'next/image';

export default function AboutCard(props) {
  let cardBackground = 'flex flex-col m-10 my-20 p-5 rounded-md ' + props.color;

  return (
    <div className={cardBackground}>
      <div className="flex items-center">
        <div id="top-left-about-card">
          <Image
            src={props.url}
            // width={300}
            alt="Image of Victoria"
            className="sm:w-72 w-52 rounded-full"
            priority={true}
          />
        </div>
        <div id="top-right-about-card" className="w-40 sm:w-auto px-5 ">
          <p>
            This is where a description of my Software Engineering experience
            would go, with a lot of fun buzzwords.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="m-5 p-5 w-36 border border-black rounded-md ">
          <p>Testing box Idea</p>
        </div>
        <div className="m-5 p-5 w-36 border border-black rounded-md ">
          <p>Testing box Idea</p>
        </div>
        <div className="m-5 p-5 w-36 border border-black rounded-md ">
          <p>Testing box Idea</p>
        </div>
      </div>
    </div>
  );
}
