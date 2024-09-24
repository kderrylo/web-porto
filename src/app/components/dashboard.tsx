import { useEffect, useRef } from "react";
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
        </div>
      </main>
    </div>
  );
}
