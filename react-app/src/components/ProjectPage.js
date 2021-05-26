import React, { useState, useEffect } from "react";
// import ScrollBanner from './ScrollBanner';
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

const ProjectPage = () => {
    const [project, setProject] = useState({});
    const { projectId } = useParams();
    console.log(projectId)
    useEffect(() => {
        if (!projectId) {
            return
        }
        (async () => {
            const response = await fetch(`/api/project/${projectId}`);
            const proj = await response.json();
            console.log(proj)
            setProject(proj);
        })();
    }, [projectId]);

    if (!project) {
        return null;
    }

    return (
      <ul>
        <li>
          <strong>Project Title</strong> {project.title}
        </li>
        <li>
          <strong>Project Description</strong> {project.description}
        </li>
        <li>
          <strong>Goal</strong> {project.goal}
        </li>
      </ul>
    );
}

export default ProjectPage
