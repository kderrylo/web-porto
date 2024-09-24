import { useState } from 'react';

import background from "../../../public/assets/bg-2.webp";
import Link from "next/link";

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState('webDevelopment');

  const handleSelect = (category) => {
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





              <div className='p-3 '>
                {selectedCategory === 'webDevelopment' && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {/* Skill 1 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-orange-700">
                      <img src="/assets/logo-html.png" alt="Logo 1" className="w-6 h-6" />
                      <span className="text-sm font-bold ">HTML</span>
                    </div>

                    {/* Skill 2 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-blue-900">
                      <img src="/assets/logo-css.png" alt="Logo 2" className="w-6 h-6" />
                      <span className="text-sm font-bold">CSS</span>
                    </div>

                    {/* Skill 3 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-yellow-500">
                      <img src="/assets/logo-js.png" alt="Logo 3" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">JavaScript</span>
                    </div>

                    {/* Skill 4 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-700">
                      <img src="/assets/logo-ts.png" alt="Logo 4" className="w-6 h-6" />
                      <span className="text-sm font-bold">TypeScript</span>
                    </div>

                    {/* Skill 5 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-orange-600">
                      <img src="/assets/logo-git.png" alt="Logo 5" className="w-6 h-6" />
                      <span className="text-sm font-bold">Git</span>
                    </div>

                    {/* Skill 6 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-purple-600">
                      <img src="/assets/logo-figma.png" alt="Logo 6" className="w-6 h-6" />
                      <span className="text-sm font-bold">Figma</span>
                    </div>

                    {/* Skill 7 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-500">
                      <img src="/assets/logo-react.png" alt="Logo 7" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">React.Js</span>
                    </div>

                    {/* Skill 8 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <img src="/assets/logo-nextjs.png" alt="Logo 8" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">Next.Js</span>
                    </div>

                    {/* Skill 9 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-700">
                      <img src="/assets/logo-tw.png" alt="Logo 9" className="w-6 h-6" />
                      <span className="text-sm font-bold">Tailwindcss</span>
                    </div>



                    {/* Skill 10 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <img src="/assets/logo-flask.png" alt="Logo 9" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">Flask</span>
                    </div>

                    {/* Skill 11 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-200">
                      <img src="/assets/logo-java.png" alt="Logo 19" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">Java</span>
                    </div>

                    {/* Skill 11 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <img src="/assets/logo-sqlite.png" alt="Logo 19" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">SQLite</span>
                    </div>



                  </div>

                )}

                {selectedCategory === 'dataScience' && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {/* Skill 1 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-blue-900">
                      <img src="/assets/logo-python2.png" alt="Logo 1" className="w-6 h-6" />
                      <span className="text-sm font-bold ">Python</span>
                    </div>

                    {/* Skill 2 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <img src="/assets/logo-pandas.png" alt="Logo 2" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">Pandas</span>
                    </div>

                    {/* Skill 3 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-400">
                      <img src="/assets/logo-numpy.png" alt="Logo 3" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">NumPy</span>
                    </div>

                    {/* Skill 4 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <img src="/assets/logo-matplotlib.png" alt="Logo 4" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">Matplotlib</span>
                    </div>

                    {/* Skill 5 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-blue-800">
                      <img src="/assets/logo-seaborn.png" alt="Logo 5" className="w-6 h-6" />
                      <span className="text-sm font-bold">Seaborn</span>
                    </div>

                    {/* Skill 6 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <img src="/assets/logo-scikit-learn.png" alt="Logo 6" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">Scikit-learn</span>
                    </div>

                    {/* Skill 7 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-orange-600">
                      <img src="/assets/logo-tf.png" alt="Logo 7" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">TensorFlow</span>
                    </div>

                    {/* Skill 8 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <img src="/assets/logo-keras.png" alt="Logo 8" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">Keras</span>
                    </div>

                    {/* Skill 9 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-yellow-600">
                      <img src="/assets/logo-opencv.png" alt="Logo 9" className="w-6 h-6" />
                      <span className="text-sm font-bold">OpenCV</span>
                    </div>



                    {/* Skill 10 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <img src="/assets/logo-nltk.png" alt="Logo 9" className="w-5 h-5" />
                      <span className="text-sm text-black font-bold">NLTK</span>
                    </div>

                    {/* Skill 11 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-300">
                      <img src="/assets/logo-librosa.png" alt="Logo 19" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">Librosa</span>
                    </div>

                    {/* Skill 11 */}
                    {/* <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <img src="/assets/logo-sqlite.png" alt="Logo 19" className="w-6 h-6" />
                      <span className="text-sm text-black font-bold">IPython</span>
                    </div> */}



                  </div>

                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
