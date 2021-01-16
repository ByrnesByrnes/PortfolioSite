import React from 'react';
import { About } from '../components';
import { aboutData } from '../aboutData'


export function AboutContainer() {


  return (
    <About>
      
      <About.Group>
      <About.Title>About</About.Title>
      <About.Text>I have a passion for making beautiful, responsive websites and web applications. Technology has always been a major interest in my life, and to combine modern web technology with an attention to detail is the best way to gaurentee a beautiful modern website.</About.Text>
      <About.Text></About.Text>
      </About.Group>
      <About.Skills>
        {aboutData.map(item => (
          <About.Skill>
            {!item.image ? 
              <About.Icon style={{ color: item.color }}>{item.icon}</About.Icon>:
              <About.IconImage src={item.icon}/>
            }
            <About.Subtitle>{item.title}</About.Subtitle>
          </About.Skill>
        ))}
      </About.Skills>

    </About>
  )
}