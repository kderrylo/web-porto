
import { useEffect, useRef } from "react";
import background from "../../../public/assets/bg-1.jpg";
import Typed from "typed.js";

export default function Dashboard() {

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["a Data Scientist", "an AI Engineer", "a ML Engineer"],
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

  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 opacity-70 "
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          zIndex: 1,
        }}
      />
      <main className="relative z-10 flex flex-col justify-center ml-10 p-5 h-full text-light">
        <div className="flex flex-col ">
          <h1 className="text-xl md:text-3xl lg:text-5xl">Hi there,</h1>
          <h1 className="text-accent font-bold text-3xl md:text-5xl lg:text-7xl mt-2">
            I&apos;m Derryl Odja
          </h1>
          <h1 className="text-xl md:text-3xl lg:text-5xl mt-2">
            <span>and I&apos;m </span>
            <span ref={typedRef} className="font-bold" />
          </h1>
        </div>
      </main>
    </div>
  );
}
