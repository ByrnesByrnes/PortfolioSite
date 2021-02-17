import React from 'react';
import * as ROUTES from '../constants/routes'
import { Feature } from '../components'

export function FeatureContainer() {

  return (
    <Feature>
      <Feature.Group>
        
          <Feature.Title><span className="accent">myron</span> Byrnes</Feature.Title>
          <br />
          <Feature.Subtitle>Front end Developer</Feature.Subtitle>
          <Feature.Text>I love solving problems. Let me help solve yours!</Feature.Text>
          <Feature.Link to={ROUTES.PROJECTS}>Projects</Feature.Link>
          <Feature.Link style={{marginLeft: "15px"}} to={ROUTES.PROJECTS}>Download CV</Feature.Link>
        
      </Feature.Group>
      <Feature.Image src="imgs/svg/undraw_developer_activity.svg" alt="" />
    </Feature>
  )
}