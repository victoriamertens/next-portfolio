export default function RainbowBlob() {
  return (
    <div className="relative w-full max-w-lg ">
      <div className="absolute top-72 left-10 w-48 h-48 sm:top-8 sm:left-10 sm:w-72 sm:h-72 md:top-12 md:left-40 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
      <div className="absolute top-40 right-10 w-48 h-48 sm:top-0 sm:-right-5 sm:w-72 sm:h-72 md:top-0 md:-right-28 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-56 left-20 w-48 h-48 sm:-bottom-8 sm:top-28 sm:left-20 sm:w-72 sm:h-72 md:-bottom-8 md:top-28 md:left-72 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000"></div>
      <div className="absolute top-72 right-5 w-48 h-48 sm:-bottom-2 sm:top-16 sm:-right-10 sm:w-72 sm:h-72 md:-bottom-14 md:top-10 md:-right-56 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-7000"></div>
    </div>
  );
}
