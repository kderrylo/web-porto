import { useState } from 'react';
import Image from 'next/image';
import background from "../../../public/assets/bg-2.png";
import Link from "next/link";

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState<string>('dataScience');

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
        }}
      />

      <main className="relative flex flex-col justify-center w-full h-full text-light p-10 sm:p-[2vh] md:p-[4vh] lg:p-[9vh]"> {/* Increased padding for larger screens */}
        <div className="flex flex-col md:flex-row w-full mt-16 gap-10"> 
          <div className="w-full md:w-1/2">
            <h1 className="text-accent font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl">
              {"About Me"}
            </h1>
            <p className="mt-4 text-1xl lg:text-1xl ">
              <b>Derryl Odja</b> is a Computer Science student from Indonesia. He is passionate about data and artificial intelligence, constantly exploring ways to leverage technology for innovative solutions. With a strong foundation in programming and analytics, he is eager to make an impact in the tech industry.
            </p>
            <Link href="/profile">
              <button className="mt-6 border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 flex items-center bg-accent text-black px-4 py-2 rounded-lg shadow transition duration-300 group hover:bg-darkAccent">
                <span><b>View My Profile</b> </span>
                <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
              </button>
            </Link>
          </div>

          <div className="w-full md:w-1/2" style={{ height: '500px', overflowY: 'auto' }}>
            <div className="mt-6 border-2 border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50">
              <div className="flex flex-row space-x-2 text-[13px] text-bold">
                <button
                  className={`relative border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 flex-1 py-2 px-4 transition duration-300 overflow-hidden rounded-lg ${selectedCategory === 'dataScience' ? 'text-primary font-bold bg-accent' : 'font-bold text-light bg-transparent border-b-2 border-accent'}`}
                  onClick={() => handleSelect('dataScience')}
                >
                  <span className="relative z-10">Data & ML Skills</span>
                  <span className={`absolute inset-0 rounded-full transition-transform duration-300 ${selectedCategory === 'dataScience' ? 'bg-accent h-full w-full scale-100' : 'bg-accent h-0 w-0 scale-0'} hover:h-full hover:w-full hover:scale-100`} />
                </button>

                <button
                  className={`relative border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 flex-1 py-2 px-4 transition duration-300 overflow-hidden rounded-lg ${selectedCategory === 'webDevelopment' ? 'text-primary font-bold bg-accent' : 'font-bold text-light bg-transparent border-b-2 border-accent'}`}
                  onClick={() => handleSelect('webDevelopment')}
                >
                  <span className="relative z-10">Web/App Development Skills</span>
                  <span className={`absolute inset-0 rounded-full transition-transform duration-300 ${selectedCategory === 'webDevelopment' ? 'bg-accent h-full w-full scale-100' : 'bg-accent h-0 w-0 scale-0'} hover:h-full hover:w-full hover:scale-100`} />
                </button>
              </div>

              <div className='p-4' >

              {selectedCategory === 'dataScience' && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">

                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-blue-900">
                      <Image src="/assets/logo-python2.png" alt="Logo 1" width={24} height={24} />
                      <span className="text-sm font-bold ">Python</span>
                    </div>

                    {/* Skill 2 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <Image src="/assets/logo-pandas.png" alt="Logo 2" width={24} height={24} />
                      <span className="text-sm text-black font-bold">Pandas</span>
                    </div>

                    {/* Skill 3 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-400">
                      <Image src="/assets/logo-numpy.png" alt="Logo 3" width={24} height={24} />
                      <span className="text-sm text-black font-bold">NumPy</span>
                    </div>

                    {/* Skill 4 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <Image src="/assets/logo-matplotlib.png" alt="Logo 4" width={24} height={24} />
                      <span className="text-sm text-black font-bold">Matplotlib</span>
                    </div>

                    {/* Skill 5 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-blue-800">
                      <Image src="/assets/logo-seaborn.png" alt="Logo 5" width={24} height={24} />
                      <span className="text-sm font-bold">Seaborn</span>
                    </div>

                    {/* Skill 6 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <Image src="/assets/logo-scikit-learn.png" alt="Logo 6" width={24} height={24} />
                      <span className="text-sm text-black font-bold">Scikit-learn</span>
                    </div>

                    {/* Skill 7 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-orange-600">
                      <Image src="/assets/logo-tf.png" alt="Logo 7" width={24} height={24} />
                      <span className="text-sm text-black font-bold">TensorFlow</span>
                    </div>

                    {/* Skill 8 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <Image src="/assets/logo-keras.png" alt="Logo 8" width={24} height={24} />
                      <span className="text-sm text-black font-bold">Keras</span>
                    </div>

                    

                    {/* Skill 9 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-yellow-600">
                      <Image src="/assets/logo-opencv.png" alt="Logo 9" width={24} height={24} />
                      <span className="text-sm font-bold">OpenCV</span>
                    </div>



                    {/* Skill 10 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <Image src="/assets/logo-nltk.png" alt="Logo 9" width={24} height={24} />
                      <span className="text-sm text-black font-bold">NLTK</span>
                    </div>

                    {/* Skill 11 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-300">
                      <Image src="/assets/logo-librosa.png" alt="Logo 19" width={24} height={24} />
                      <span className="text-sm text-black font-bold">Librosa</span>
                    </div>
                    
                    {/* Skill 8 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <Image src="/assets/logo-streamlit.png" alt="Logo 8" width={24} height={24} />
                      <span className="text-sm text-black font-bold">Streamlit</span>
                    </div>

                    {/* Skill 8 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <Image src="/assets/logo-tableau.png" alt="Logo 8" width={30} height={30} />
                      <span className="text-sm text-black font-bold">Tableau</span>
                    </div>
                  </div>
                )}

                {selectedCategory === 'webDevelopment' && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-orange-700">
                      <Image src="/assets/logo-html.png" alt="Logo 1" width={24} height={24} />
                      <span className="font-bold text-[15px]">HTML</span>
                    </div>

                    {/* Skill 2 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-blue-900">
                      <Image src="/assets/logo-css.png" alt="Logo 2" width={24} height={24} />
                      <span className="text-sm font-bold">CSS</span>
                    </div>

                    {/* Skill 3 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-yellow-500">
                      <Image src="/assets/logo-js.png" alt="Logo 3" width={24} height={24} />
                      <span className="text-sm text-black font-bold">JavaScript</span>
                    </div>

                    {/* Skill 4 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-700">
                      <Image src="/assets/logo-ts.png" alt="Logo 4" width={24} height={24} />
                      <span className="text-sm font-bold">TypeScript</span>
                    </div>

                    {/* Skill 5 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-orange-600">
                      <Image src="/assets/logo-git.png" alt="Logo 5" width={24} height={24} />
                      <span className="text-sm font-bold">Git</span>
                    </div>

                    {/* Skill 6 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-purple-600">
                      <Image src="/assets/logo-figma.png" alt="Logo 6" width={24} height={24} />
                      <span className="text-sm font-bold">Figma</span>
                    </div>

                    {/* Skill 7 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-500">
                      <Image src="/assets/logo-react.png" alt="Logo 7" width={24} height={24} />
                      <span className="text-sm text-black font-bold">React.Js</span>
                    </div>

                    {/* Skill 8 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <Image src="/assets/logo-nextjs.png" alt="Logo 8" width={24} height={24} />
                      <span className="text-sm text-black font-bold">Next.Js</span>
                    </div>

                    {/* Skill 9 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-700">
                      <Image src="/assets/logo-tw.png" alt="Logo 9" width={24} height={24} />
                      <span className="text-sm font-bold">Tailwindcss</span>
                    </div>



                    {/* Skill 10 */}
                    {/* <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <Image src="/assets/logo-flask.png" alt="Logo 9" width={24} height={24} />
                      <span className="text-sm text-black font-bold">Flask</span>
                    </div> */}

                    {/* Skill 11 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-cyan-200">
                      <Image src="/assets/logo-java.png" alt="Logo 19" width={24} height={24} />
                      <span className="text-sm text-black font-bold">Java</span>
                    </div>

                    {/* Skill 11 */}
                    <div className="flex items-center justify-center space-x-4 p-2 rounded-lg shadow-lg bg-light">
                      <Image src="/assets/logo-sqlite.png" alt="Logo 19" width={24} height={24} />
                      <span className="text-sm text-black font-bold">SQLite</span>
                    </div>
                    {/* Add your skill items here... */}
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
