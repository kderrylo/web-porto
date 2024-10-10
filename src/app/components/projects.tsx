import React from 'react';

import Image from 'next/image';

const projects = [
    {
        title: 'EduPredScore',
        description: 'A simple Machine Learning application that can predict student scores based on several interrelated features. Through the application of regression concepts in machine learning, we aims to provide users with predictions and insights regarding their educational performance.',
        thumbnail: '/project-img/THUMB_edu-pred-score.png',
        tools: 'Tools: Python, Pandas, Matplotlib, Scikit-Learn, Streamlit',
        githubLink: 'https://github.com/Jasson9/ml-project/',
        deployLink: 'https://ml-project-student-performance.streamlit.app/',
    },
    {
        title: 'Web Lingkungan Maria Goreti',
        description: 'Web Lingkungan Maria Goreti provides comprehensive information about the Maria Goreti community and its activities.',
        thumbnail: '/project-img/THUMB_web-margot.png',
        tools: 'Tools: Next.js, TailwindCSS',
        githubLink: 'https://github.com/PetrusAriaa/web-margot1',
        deployLink: 'https://mariagoretti-matiasrasul.vercel.app/',
    },
    {
        title: 'NLP Project - Mental Illness Detection with Sentiment Analysis',
        description: 'Focusing on classifying five key categories: addiction, anxiety, autism, depression, and schizophrenia. I employed a comparative approach, evaluating the effectiveness of various Machine Learing and Deep Learning models.',
        thumbnail: '/project-img/THUMB_nlp-project.png',
        tools: 'Tools: Python, Pandas, Matplotlib, Scikit-Learn, Tensorflow, Keras, Streamlit',
        githubLink: 'https://github.com/kderrylo/Mental-Illness-Detection-LiveDemo',
        deployLink: 'https://mental-illness-detection-nlp.streamlit.app/',
    },
    {
        title: 'Speech Emotion Classification with CNN-LSTM-CLSTM from CREMA-D',
        description: 'Building a CNN, LSTM, CLSTM models to classify 5 categories emotions (angry, disgust, fear, happy, neutral) from CREMA-D .WAV files using feature extraction techniques like MFCC and data augmentation, along with training and evaluating the models on the processed dataset.',
        thumbnail: '/project-img/THUMB_SR-project.jpg',
        tools: 'Tools: Python, Pandas, Matplotlib, Librosa',
        githubLink: 'https://github.com/kderrylo/Speech-Emotion-Classification-with-CNN-LSTM-CLSTM/tree/master',
    },
];

const Projects = () => {
    return (
        <div className="projects-section pt-[30vh] lg:pt-1 md:pt-1 sm:pt-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-accent text-center my-8 ">Projects</h2>
            <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-6 p-7">
                {projects.map((project, index) => (
                    <div key={index} className="border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 project-tab border p-4">
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            width={400}
                            height={160}
                            className="thumbnail object-cover rounded"
                        />
                        <div className=''>
                            <h3 className="project-title text-xl font-semibold mt-4 shadow-lg">{project.title}</h3>
                            <p className="project-description text-ligh mt-2 text-gray-300">{project.description}</p>
                            <p className="tools text-ligh mt-2 mb-2 italic text-gray-500">{project.tools}</p>
                            <div className="project-links mt-4">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-link text-blue-500 hover:underline mr-4"
                                >
                                    GitHub
                                </a>
                                {project.deployLink && (
                                    <a
                                        href={project.deployLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="deploy-link text-blue-500 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
