import React from 'react';

const projects = [
    {
        title: 'EduPredScore',
        description: 'A simple Machine Learning application that can predict student scores based on several correlated features.',
        thumbnail: '/project-img/THUMB_edu-pred-score.png',
        githubLink: 'https://github.com/kderrylo/EduPredScore',
        deployLink: 'https://ml-project-student-performance.streamlit.app/',
    },
    {
        title: 'Web Lingkungan Maria Goreti',
        description: 'Web Lingkungan Maria Goreti provides comprehensive information about the Maria Goreti community and its activities.',
        thumbnail: '/project-img/THUMB_web-margot.png',
        githubLink: 'https://github.com/PetrusAriaa/web-margot1',
        deployLink: 'https://mariagoretti-matiasrasul.vercel.app/',
    },
    {
        title: 'Project 3',
        description: 'This is the description for project 3.',
        thumbnail: 'path_to_thumbnail3.jpg',
        githubLink: 'https://github.com/username/project3',
        deployLink: 'https://project3.com',
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className="projects-section">
            <h2 className="text-3xl font-bold text-center my-8">Projects</h2>
            <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-6 p-7">
                {projects.map((project, index) => (
                    <div key={index} className="border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 project-tab border p-4">
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="thumbnail w-full h-40 object-cover rounded"
                        />
                        <div className=''>
                            <h3 className="project-title text-xl font-semibold mt-4 shadow-lg">{project.title}</h3>
                            <p className="project-description text-ligh mt-2 text-gray-300">{project.description}</p>
                            <div className="project-links mt-4">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-link text-blue-500 hover:underline mr-4"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.deployLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="deploy-link text-blue-500 hover:underline"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
