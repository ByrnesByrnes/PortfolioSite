import React from 'react';
import { Project } from '../components'


export function ProjectContainer({ projects }) {

  return (
    <Project>
      {projects.map(project => (
        <Project.Item key={project.id}>
          <Project.Info>
            <Project.Title>{project.title}</Project.Title>
            <Project.Subtitle>{project.technologies.join(', ')}</Project.Subtitle>
            <Project.Text>{project.description}</Project.Text>
            
            <Project.LinkGroup>
              <Project.Link href={project.site} target="_blank">Demo</Project.Link>
              <Project.Link href={project.source} target="_blank">Source Code</Project.Link>
            </Project.LinkGroup>

          </Project.Info>
          <Project.Group>
            <Project.Image src={project.img} />
          </Project.Group>
        </Project.Item>
      ))}

    </Project>
  )
}