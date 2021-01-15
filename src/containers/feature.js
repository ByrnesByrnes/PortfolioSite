import React from 'react';
import * as ROUTES from '../constants/routes'
import { Feature } from '../components'

import { SocialsContainer } from './socials';

export function FeatureContainer() {

  return (
    <Feature>
      <Feature.Group>
        <Feature.Title>myron byrnes</Feature.Title>
        <br/>
        <Feature.Subtitle>Front end Developer</Feature.Subtitle>
        <Feature.Text>I love solving problems. Let me solve yours!</Feature.Text>
        <Feature.Link to={ROUTES.PROJECTS}>Projects</Feature.Link>
      </Feature.Group>
      <Feature.Image src="/imgs/svg/undraw_developer_activity.svg" alt="some" />
      <SocialsContainer />
    </Feature>
  )
}