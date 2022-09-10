import React from 'react';
import { Feature, CoffeeMug } from '../components'

export function FeatureContainer() {

  return (
    <Feature>
   
      <Feature.Group>
        <Feature.Title><span className="accent">myron</span> Byrnes</Feature.Title>
        <br />
        <Feature.Subtitle>Front end Developer</Feature.Subtitle>
        <Feature.Text>I love solving problems. Let me help solve yours!</Feature.Text>
        <Feature.Link
          activeClass="active"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          to="projects">Projects
          </Feature.Link>
        {/* <a className="resume" href="resume/resume-1.pdf" target="_blank" >View CV</a> */}
        {/* <Feature.Link style={{ marginLeft: "15px" }} href="resume/resume.pdf" open>Download CV</Feature.Link> */}
      </Feature.Group>
      
  
      <Feature.ImageContainer>
        <Feature.Image src="imgs/svg/undraw_developer_activity.svg" alt="animted person working on a laptop" />
        <div>
          <CoffeeMug />
        </div>
      </Feature.ImageContainer>
      <Feature.ScrollDown />
    </Feature>
  )
}