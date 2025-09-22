import * as Project from '@components/Project';

import { TProjectPrint } from '../types/project';
import { Fragment } from 'react';

type PrintProjectsProps = {
  printProjects: TProjectPrint[];
};

const PrintProjects = ({ printProjects }: PrintProjectsProps) => {
  return printProjects.map((printProject, i) => (
    <Project.Wrapper title={printProject.title} key={i}>
      <Project.Header date={printProject.date} />
      {printProject.items.map((item, j) => (
        <Fragment key={`item-${j}`}>
          <Project.Images imgSrcs={item.images.srcs} imgAlts={item.images.alts} />
          <Project.Description>{item.description}</Project.Description>
        </Fragment>
      ))}
    </Project.Wrapper>
  ));
};

export default PrintProjects;
