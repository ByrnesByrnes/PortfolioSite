import React from 'react';
import { Load, Shapes,Contact } from '../components'
import { FeatureContainer } from '../containers/feature'
import { AboutContainer } from '../containers/about'
import { ProjectContainer } from '../containers/project'
import { SocialsContainer} from '../containers/socials'
import { ContactContainer } from '../containers/contact'

import { projects } from '../projectsData'

export default function Home() {

  return (
   <>
      <Load />
      <FeatureContainer/>
      <AboutContainer />
      <ProjectContainer projects={projects} />
      <ContactContainer />
      {/* <Shapes>
        <Shapes.SquareSmall></Shapes.SquareSmall>
        <Shapes.Square></Shapes.Square>
      </Shapes> */}
      <SocialsContainer />
   </>
  )
}