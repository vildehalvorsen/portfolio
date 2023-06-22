import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../../../constants/api";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const projectId = parseFloat(id);

  useEffect(() => {
    if (isNaN(projectId) || projectId > projects.length || projectId === 0) {
      navigate("/");
    }
  }, [navigate, projectId]);
  
  const handleGoBack = () => {
    navigate(-1);
  }
  
  const handleGoNext = () => {
    navigate(`/projects/${projectId + 1}`);
  }

  return (
    <>
    <button onClick={handleGoBack}>previous</button>
    <button onClick={handleGoNext}>next</button>
      {projects.map((project) => {
        if (project.id === projectId) {
          return (
            <div key={project.id}>
              <h1>{project.title}</h1>
              <div>
                {project.images.map((image) => {
                  return <img key={image.id} src={image.src} alt={image.alt} />
                })}
              </div>
              <div>
                <p>{project.description}</p>
              </div>
            </div>
          );
        }
        return true;
      })}
    </>
  );
}
