import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
        <Container>
            <Main>
                <LinkData>
                <MyLink>Product</MyLink>
                <Image>Image</Image>
                <MyLink>About</MyLink>
                <MyLink>Contact</MyLink>
                </LinkData>
            </Main>
        </Container>
    </div>
  )
}

export default Header

const Image = styled.div``

const MyLink = styled.div`
margin: 0 10px;
`

const LinkData = styled.div`
display: flex;
`

const Main = styled.div`
background-color: red;
display: flex;
justify-content: space-between;
min-width: 900px;
align-items: center;
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
height: 90px;
background-color: black;
color: white;

`