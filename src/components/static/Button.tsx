import React from 'react'
import styled from 'styled-components'

const Button = () => {
  return (
    <div>
        <Container cc='black' bg='darkorange' b="">
            <Main>Button</Main>
        </Container>
    </div>
  )
}

export default Button

const Main = styled.div``
const Container = styled.div<{bg:string, cc:string, b:string}>`
width: 200px;
height: 60px;
display: flex;
border: ${({ b }) => (b ? "1px solid silver" : "")};
border-radius: 3px;
justify-content: center;
align-items: center;
background-color: ${({ bg })=> bg};
color: ${({ cc }) => cc};
cursor: pointer;
transition:  all 300ms;
text-transform: uppercase;
font-weight:bolder;

:hover {
    transform: scale(1.02);
   
}
`