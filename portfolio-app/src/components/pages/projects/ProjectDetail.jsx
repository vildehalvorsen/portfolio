import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../../../constants/api";
import { StyledH1, StyledH2 } from "../../styledComponents/Typography";
import {
  StyledProjectContainer,
} from "../../styledComponents/Containers";
import NavButtons from "../../layout/NavButtons";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const projectId = parseFloat(id);

  useEffect(() => {
    if (isNaN(projectId) || projectId > projects.length || projectId === 0) {
      navigate("/projects");
    }
  }, [navigate, projectId]);

  const handleGoBack = () => {
    navigate(`/projects/${projectId - 1}`);
  };

  const handleGoNext = () => {
    navigate(`/projects/${projectId + 1}`);
  };

  return (
    <>
      <NavButtons prev={handleGoBack} next={handleGoNext} prevDesc={"previous project"} nextDesc={"next project"} />
      {projects.map((project) => {
        if (project.id === projectId) {
          return (
            <StyledProjectContainer key={project.id}>
              <StyledH1>{project.title}</StyledH1>
              <StyledH2>{project.subTitle}</StyledH2>
              <div className="project--tech">
                <p>{project.tech}</p>
              </div>

              <div className="project--description">
                <div className="project--links">
                  <a href={project.github_url}>GitHub</a>
                  {project.website_url ? (
                    <>
                      {" | "}
                      <a href={project.website_url}>Website</a>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <p>{project.description}</p>
                </div>
              </div>

              <div className="project--images">
                {project.images.map((image) => {
                  return (
                    <>
                      {image.mobile ? (
                        <img
                          key={image.id}
                          src={image.src}
                          alt={image.alt}
                          className="mobile"
                        />
                      ) : (
                        <img key={image.key} src={image.src} alt={image.alt} />
                      )}
                    </>
                  );
                })}
              </div>
            </StyledProjectContainer>
          );
        }
      })}
    </>
  );
}
