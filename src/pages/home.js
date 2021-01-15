import React from 'react';
import { Load, Shapes } from '../components'
import { FeatureContainer } from '../containers/feature'


export default function Home() {

  return (
   <>
      <Load />
      <FeatureContainer/>
      <Shapes>
        <Shapes.SquareSmall></Shapes.SquareSmall>
        <Shapes.Square></Shapes.Square>
      </Shapes>
   </>
  )
}