import React from 'react'
import styled from "styled-components"
import { AiFillPlayCircle} from "react-icons/ai"
import {MdOutlineFavoriteBorder} from "react-icons/md"


const App = () => {
  return (
    <Container>
      <Main>
       <Holder>
        <Div>
        <Divsub>
        <Name>St Vincent</Name>

<RealHolder>
<VideoClip>
<Icon size={20}/>
<Br />
</VideoClip>
<Icon2 size={30}/>
   <Br />
<VideoClip>
<Icon size={20}/>
</VideoClip>
<Icon2 size={30}/>
  <Br />
<VideoClip>
<Icon size={20}/>
</VideoClip>
<Icon2 size={30}/>
</RealHolder>
{/* <Content>Content</Content>
<Button>Button</Button> */}
        </Divsub>
        </Div>
       
       </Holder>
      </Main>
    </Container>
  )
}

export default App

const Br = styled.div`
width: 10px;
  height: -10px;
  justify-content: space-between;
  align-items: center;
position: absolute;
top: 0;

`

const Icon2 = styled(MdOutlineFavoriteBorder)`
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding-left: 450px;



`

const RealHolder = styled.div`
  width: 100px;
  height: 100px;
position: absolute;
top:173px;




`

const Icon = styled(AiFillPlayCircle)`
width: 120px;
height:40px;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
padding-left:10px;  
 

:hover{
  color: darkgray;
  transition: all 350ms;
  opacity: calc(30);

}
`

const Divsub = styled.div`
width: 480px;
height: 280px;
background-color: lightblue;
justify-content: space-between;
border: 2px solid green;
border-radius: 20px;


`
const Div = styled.div`
width: 500px;
height: 300px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
border-radius: 25px;
left: 50px;
`;
const VideoClip = styled.div`
width: 150px;
height: 80px;
background-color: blue;
border-radius: 10px;
justify-content:center;
align-items: center;
display: flex;
`
// const Content = styled.div`
// align-items:center;
// color: white;
// background-color: black;
// padding-left: 150px;


// `

// const Button = styled.div``

const Holder = styled.div`
width:700px;
height: 400px;
left: 50px;
padding: 30px;

`

const Name = styled.div`
font-size: 20px;
font-weight: 500;
`

const Main = styled.div`
width: 700px;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
margin-right:20px;
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: darkorange;

`