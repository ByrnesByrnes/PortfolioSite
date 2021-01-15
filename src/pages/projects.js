import React from 'react';
import { ProjectContainer } from '../containers/project'
import { Load } from '../components'
import { projects } from '../projectsData'

export default function Projects() {
  return (
    <>
      <Load />
      <ProjectContainer projects={projects}/>
      
    </>
  )
}