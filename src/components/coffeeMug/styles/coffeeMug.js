import styled, { keyframes } from 'styled-components'


const mist = keyframes
`
 0% {
  transform: translateY(0) scaleX(1);
  opacity: 0;
 }

 15%{
  opacity: 1;
 }
 50% {
  transform: translateY(-150px) scaleX(5);
  
 }

 95% {
   opacity: 0;
 }
 100% {
  transform: translateY(-300px) scaleX(10);
 }


`

export const Container = styled.div
`
  position: relative;

  & .cup {
    position: relative;
    width: 280px;
    height: 300px;
    background: linear-gradient(to right, #f9f9f9, #d9d9d9);
    border-radius: 0 0 45% 45%;
    z-index: 4;
    left: 50%;
    transform: translateX(-50%);
  }

  & .top {
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(to right, #f9f9f9, #d9d9d9);
    border-radius: 50%;
  }

  & .circle {
    position: absolute;
    top: 5px;
    left: 10px;
    width: calc(100% - 20px);
    height: 50px;
    background: linear-gradient(to left, #f9f9f9, #d9d9d9);
    border-radius: 50%;
    overflow: hidden;
  }

  & .coffee {
    position: absolute;
    top: 20px;
    left: 0;
    height: 100%;
    width: 100%;
    background: brown;
    border-radius: 50%;
  }

  & .handle {
    position: absolute;
    right: -70px;
    top: 20px;
    width: 160px;
    height: 180px;
    border: 25px solid #dcdcdc;
    border-color:  #dcdcdc #dcdcdc transparent transparent;
    border-radius: 50%;
    transform: rotate(45deg);
  }
  & .plate {
    position: absolute;
    left: 50%;
    
    transform: translate(-50%, -70%);
    height: 200px;
    width: 500px;
    background: linear-gradient(to right, #f9f9f9, #e7e7e7);
    border-radius: 50%;
    box-shadow: 0 20px 20px rgba( 0,0,0, 0.2);

    &:before {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      border-radius: 50%;
      background: linear-gradient(to left, #f9f9f9, #e7e7e7);
      filter: blur(2px);
    }

    &:after {
      content: '';
      position: absolute;
      top: 30px;
      left: 30px;
      right: 30px;
      bottom: 30px;
      background: radial-gradient(rgba(0,0,0,0.2) 25%, transparent, transparent);
    }
  }

  & .vapour {
    position: relative;
    display: flex;
    z-index: 1;
    padding: 0 20px;
  }

  & .mist {
    position: relative;
    bottom: 50px;
    display: block;
    margin: 0 2px 50px;
    min-width: 8px;
    height 120px;
    background: #f8f8ff;
    border-radius: 50%;
    opacity: 0;
    filter: blur(8px);
    animation: ${mist} 5s linear infinite;
  }
`