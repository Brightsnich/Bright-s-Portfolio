"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from "./projects.module.css";

interface Project {
    id: number;
    name: string;
    description: string;
    html_url: string;
    demo_url?: string; // Optional field for live demo URL
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const [reposResponse, demoUrlsResponse] = await Promise.all([
                    axios.get<Project[]>('https://api.github.com/users/Brightsnich/repos'),
                    axios.get<{ name: string; demo_url: string }[]>('/demoUrls.json')
                ]);

                const demoUrls = demoUrlsResponse.data;
                const projectsWithDemoUrls = reposResponse.data.map((project) => {
                    const demo = demoUrls.find((demo) => demo.name === project.name);
                    return { ...project, demo_url: demo?.demo_url };
                });

                setProjects(projectsWithDemoUrls);
            } catch (error) {
                setError('Error fetching projects');
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    // Filter projects to include only those with a demo_url
    const filteredProjects = projects.filter(project => project.demo_url);

    return (
        <div className={style.projects}>
            <h1>Projects</h1>
            {error && <p className={style.error}>{error}</p>}
            {filteredProjects.map((project) => (
                <div key={project.id} className={style.project}>
                    <h3>{project.name}</h3>
                    <iframe
                        className={style.demo}
                        src={project.demo_url}
                        title={project.name}
                        sandbox="allow-scripts allow-same-origin"
                        style={{ width: '100%', height: '300px', border: 'none' }}
                    ></iframe>
                    <p>{project.description}</p>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                </div>
            ))}
        </div>
    );
}