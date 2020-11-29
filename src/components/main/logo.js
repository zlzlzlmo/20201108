import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px 0;
`

const Image = styled.img`
  width: 165px;
  margin: 0 auto;
  display: block;
`

function Logo() {
  return (
    <Container>
      <Image src="https://s.pstatic.net/static/www/m/2019/img_logo_main_home.png" />
    </Container>
  )
}

export default Logo
