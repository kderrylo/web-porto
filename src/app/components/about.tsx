import { useState } from 'react';
import Image from 'next/image';

import background from "../../../public/assets/bg-2.webp";
import Link from "next/link";

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState<string>('webDevelopment');

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="relative w-full h-screen flex">
      <div
        className="absolute inset-0 opacity-70 blur-md"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          zIndex: 1,
        }}
      />

      <main className="relative z-10 flex flex-col justify-center w-full h-full text-light p-10">
        <div className="flex flex-row w-full">
          <div className="w-1/2 p-5">
            <h1 className="text-accent font-bold text-3xl md:text-5xl lg:text-7xl">
              {"About Me"}
            </h1>
            <p className="mt-4 text-lg lg:text-1xl ">
              <b>Derryl Odja</b> is a Computer Science student from Indonesia. He is passionate about data and artificial intelligence, constantly exploring ways to leverage technology for innovative solutions. With a strong foundation in programming and analytics, he is eager to make an impact in the tech industry.
            </p>
            <Link href="/profile">
              <button className="mt-6 border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 flex items-center bg-accent text-black px-4 py-2 rounded-lg shadow transition duration-300 group hover:bg-darkAccent">
                <span><b>View My Profile</b> </span>
                <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
              </button>
            </Link>

          </div>

          <div className="w-1/2 p-5" style={{ height: '500px', overflowY: 'auto' }}>

            <div className="mt-6 border-2 border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50">
              
              <div className="flex flex-row space-x-2">
                <button
                  className={`relative border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 flex-1 py-2 px-4 transition duration-300 overflow-hidden rounded-lg ${selectedCategory === 'dataScience' ? 'text-primary font-bold bg-accent' : 'font-bold text-light bg-transparent border-b-2 border-accent'}`}
                  onClick={() => handleSelect('dataScience')}
                >
                  <span className="relative z-10">AI/Data Science Skill</span>
                  <span className={`absolute inset-0 rounded-full transition-transform duration-300 ${selectedCategory === 'dataScience' ? 'bg-accent h-full w-full scale-100' : 'bg-accent h-0 w-0 scale-0'} hover:h-full hover:w-full hover:scale-100`} />
                </button>

                <button
                  className={`relative border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 flex-1 py-2 px-4 transition duration-300 overflow-hidden rounded-lg ${selectedCategory === 'webDevelopment' ? 'text-primary font-bold bg-accent' : 'font-bold text-light bg-transparent border-b-2 border-accent'}`}
                  onClick={() => handleSelect('webDevelopment')}
                >
                  <span className="relative z-10">Web/App Development Skill</span>
                  <span className={`absolute inset-0 rounded-full transition-transform duration-300 ${selectedCategory === 'webDevelopment' ? 'bg-accent h-full w-full scale-100' : 'bg-accent h-0 w-0 scale-0'} hover:h-full hover:w-full hover:scale-100`} />
                </button>
              </div> 
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
