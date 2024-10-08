"use client";
import Link from "next/link";

import Image from "next/image";
import Profile from "../../../public/assets/profile2.png";
import {Footer} from "../components/footer";

export default function profile() {

    return (
        <div className="flex flex-col justify-center items-center">
            
            <main className="flex flex-col justify-center items-center">
                <div className="py-3">
                    <Link href="/">
                        <button className="mt-6 border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 flex items-center bg-accent text-black px-4 py-2 rounded-lg shadow transition duration-300 group hover:bg-darkAccent">
                            <span className="mr-2 transition-transform duration-300 transform group-hover:translate-x-1">←</span>
                            <span><b>Back</b> </span>
                        </button>
                    </Link>



                </div>
                <div className="w-4/5 lg:w-3/5 md:max-w-[75rem] flex flex-col gap-16 md:gap-28 py-28">
                    <div className="md:flex md:flex-row md:items-center">
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h1 className="text-accent font-bold text-2xl md:text-5xl lg:text-7xl">
                                Kasimirus Derryl Odja
                            </h1>
                            <h2 className="text-light font-semibold text-lg md:text-2xl lg:text-3xl">
                                Data Science & ML Engineer
                            </h2>
                        </div>
                        <div className="relative">
                            <div className="relative aspect-square h-56 md:h-64 lg:h-96 m-auto md:m-0">
                                <Image src={Profile} fill alt="profile-pict" priority />
                            </div>
                        </div>
                    </div>


                    <p className="text-light">
                        Hi! I&apos;m a <span className="text-accent">Data Scientist</span>{" "}
                        with a passion for working with data and artificial intelligent using{" "}
                        <span className="text-accent">Python</span>. I mainly use libraries like{" "}
                        <span className="text-accent">Pandas, NumPy</span>{" "}and<span className="text-accent"> {" "}Scikit-learn</span>{" "}
                        for data analysis and machine learning.{" "}
                        I’ve been diving into{" "}
                        <span className="text-accent">TensorFlow</span>{" "} and <span className="text-accent">Keras</span>{" "} for deep learning,{" "}
                        while I explore the exciting fields of <span className="text-accent">Natural Language Processing, Speech Recognition, </span>{" "}and <span className="text-accent">Computer Vision</span>.{" "}
                        <br />
                        <br />
                        Currently, I&apos;m a student of <span className="text-accent">Computer Science</span> {" "} at <span className="text-accent">Bina Nusantara University</span>, Indonesia.{" "}
                        Through my studies, I have gotten hands-on experience in <span className="text-accent">Web App Development, Machine Learning, </span>{" "}and <span className="text-accent">Deep Learning</span>, which sparked my curiosity even further.{" "}


                        I&apos;m especially interested in learning more about NLP and Speech Recognition, and I love experimenting with personal projects in these fields.{" "}          
                        I’m also learning <span className="text-accent">Next.js</span> to strengthen my front-end skills, and I&apos;ve taken some courses on Computer Vision.{" "}  
                        One of my recent projects was writing a paper titled &quot;Detecting Mental Illness with Sentiment Analysis on Social Media&quot;, which I had the opportunity to present at <span className="text-accent">9th International Conference on Computer Science and Computational Intelligence 2024</span>.{" "}
                        <br />
                        <br />
                        I see myself as a lifelong learner who enjoys working with others, and I thrive in <span className="text-accent">teamwork</span> environments. I’m also comfortable with <span className="text-accent">public speaking</span>, and I’m always on the lookout for opportunities to grow and make a meaningful impact in the field of data science.
                        
                        
                    </p>
                </div>
                <Footer/>
            </main>
        </div>
    )
}