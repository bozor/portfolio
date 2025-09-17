import * as Project from '@components/Project';

import { TProject } from '../types/project';

type ProjectsProps = {
  projects: TProject[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return projects.map((project, index) => (
    <Project.Wrapper title={project.title} key={index}>
      <Project.Header date={project.date} technologies={project.technologies} />
      <Project.Images url={project.url} imgSrcs={project.imgSrcs} />
      <Project.Description>{project.description}</Project.Description>
      {project.extras ? <Project.Extras imgSrc={project.extras.imgSrc}>{project.extras.caption}</Project.Extras> : null}
    </Project.Wrapper>
  ));
};

export default Projects;
