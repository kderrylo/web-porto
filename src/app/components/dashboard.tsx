import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Dashboard() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["a Data Scientist", "a ML Engineer", "an AI Engineer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const background = "/assets/bg-1.jpg";

  return (
    <div className="relative w-full h-screen flex">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
        }}
      />
      <main className="relative z-10 flex flex-col justify-center items-start ml-5 md:ml-10 p-5 h-full text-light">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-5xl">Hi there,</h1>
          <h1 className="text-accent font-bold text-3xl md:text-5xl lg:text-7xl mt-2">
            I&apos;m Derryl Odja
          </h1>
          <h1 className="text-1xl md:text-3xl lg:text-5xl mt-2 md:text-left">
            <span>and I&apos;m </span>
            <span ref={typedRef} className="font-bold" />
          </h1>
          <a href="/CV_Kasimirus_Derryl_Odja.pdf" download="CV_Kasimirus Derryl Odja.pdf" className="w-28 sm:w-28 md:w-60 lg:w-72">
            <button className="bg-primary mt-4 text-accent border border-accent border-b-4 sm:w-28 md:w-60 lg:w-72 shadow-lg shadow-cyan-500/50 text-xs sm:text-sm md:text-base lg:text-lg font-medium overflow-hidden px-3 sm:px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              Download CV
            </button>
          </a>


        </div>
      </main>
    </div>
  );
}
