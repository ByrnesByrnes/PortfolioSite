import React from 'react';
import { About } from '../components';
import { aboutData } from '../aboutData'


export function AboutContainer() {


  return (
    <About>
      {/* <About.Group> */}
        {/* <About.Title>About <span className="accent">Me</span></About.Title> */}
        {/* <About.Text>I love creating websites and drinking coffee while I do it.</About.Text> */}
      {/* </About.Group> */}
      <About.Group>
        <About.Title>My <span className="accent">Skillset</span></About.Title>
        <About.Skills>
          {aboutData.map(item => (
            <About.Skill key={item.id}>
              {!item.image ?
                <About.Icon style={{ color: item.color }}>{item.icon}</About.Icon> :
                <About.IconImage src={item.icon} />
              }
              <About.Subtitle>{item.title}</About.Subtitle>
            </About.Skill>
          ))}
        </About.Skills>
      </About.Group>
    </About>
  )
}