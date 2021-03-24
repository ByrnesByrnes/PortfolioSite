import React from 'react';
import { Project } from '../components'
import { CarouselContainer } from './carousel'
import { MdPerson } from 'react-icons/md'
export function ProjectContainer({ projects }) {



  return (
    <Project>
      <h1 style={{ textAlign: "center" }}>My <span className="accent">Portfolio</span></h1>
      {projects.map(project => (
        <Project.Item key={project.id}>
          <Project.Info>
            <Project.Title>{project.title}</Project.Title>
            <Project.Subtitle>{project.technologies.join(', ')}</Project.Subtitle>
            {project.client && <Project.Text>Client Work <MdPerson /></Project.Text>}
            <Project.Text>{project.description}</Project.Text>

            <Project.LinkGroup>
              <Project.Link href={project.site} target="_blank">{project.client ? 'Live Site' : 'Demo Site'}</Project.Link>
              <Project.Link href={project.source} target="_blank">Source Code</Project.Link>
            </Project.LinkGroup>
          </Project.Info>
        
          <CarouselContainer slides={project.imgs} alt={project.title} />

        </Project.Item>
      ))}

    </Project>
  )
}