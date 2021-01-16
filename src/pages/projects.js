import React from 'react';
import { ProjectContainer } from '../containers/project'
import { SocialsContainer} from '../containers/socials'
import { Load } from '../components'
import { projects } from '../projectsData'

export default function Projects() {
  return (
    <>
      <ProjectContainer projects={projects}/>
      <SocialsContainer />
    </>
  )
}