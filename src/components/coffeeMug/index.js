import React from 'react';
import { Container} from './styles/coffeeMug'

export default function CoffeeMug({...restProps}) {
  return (
    <Container {...restProps}>
      <div className="cup">
        <div className="top">
          <div className="vapour">
            {Array(20).fill().map((mist, i) => (
              <span key={i} style={{animationDelay: `${((Math.random() * 20) + 1) * -1}s`}} className="mist" ></span>
            ))}
          </div>
          <div className="circle">
            <div className="coffee"></div>
          </div>
        </div>
        <div className="handle"></div>
      </div>
      <div className="plate"></div>
    </Container>
  )
};
