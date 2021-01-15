import React from 'react';
import { About } from '../components';
import { aboutData } from '../aboutData'


export function AboutContainer() {


  return (
    <About>
      
      <About.Group>
      <About.Title>Hey, I'm Myron Byrnes</About.Title>
      <About.Text>I love solving problems whether big or small</About.Text>
      <About.Text>Creating is everthing to me!</About.Text>
      </About.Group>
      <About.Skills>
        {aboutData.map(item => (
          <About.Skill>
            <About.Subtitle>{item.title}</About.Subtitle>
            {!item.image ? 
              <About.Icon style={{ color: item.color }}>{item.icon}</About.Icon>:
              <About.IconImage src={item.icon}/>
            }
          </About.Skill>
        ))}
      </About.Skills>

    </About>
  )
}