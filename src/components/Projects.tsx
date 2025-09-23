import * as Project from '@components/Project';

import { Project as ProjectType } from '../types/project';

type ProjectsProps = {
  projects: ProjectType[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return projects.map((project, index) => (
    <Project.Wrapper title={project.title} key={`${project.title.replaceAll(' ', '')}-${index}`}>
      <Project.Header date={project.date} technologies={project.technologies} />
      <Project.Images url={project.url} imgSrcs={project.imgSrcs} />
      <Project.Description content={project.description} />
      {project.extras ? <Project.Extras imgSrc={project.extras.imgSrc}>{project.extras.caption}</Project.Extras> : null}
    </Project.Wrapper>
  ));
};

export default Projects;
