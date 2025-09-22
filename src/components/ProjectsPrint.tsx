import * as Project from '@components/Project';

import { ProjectPrint } from '../types/project';
import { Fragment } from 'react';

type ProjectsPrintProps = {
  projectsPrint: ProjectPrint[];
};

const ProjectsPrint = ({ projectsPrint }: ProjectsPrintProps) => {
  return projectsPrint.map((project, i) => (
    <Project.Wrapper title={project.title} key={`${project.title.replaceAll(' ', '')}-${i}`}>
      <Project.Header date={project.date} />
      {project.items.map((item, j) => (
        <Fragment key={`item-${j}`}>
          <Project.Images imgSrcs={item.images.srcs} imgAlts={item.images.alts} />
          <Project.Description content={item.description} />
        </Fragment>
      ))}
    </Project.Wrapper>
  ));
};

export default ProjectsPrint;
