import React from 'react'
import styled from 'styled-components'
import Logo from '../components/main/logo'
import Navbar from '../components/main/navbar'
import SearchBar from '../components/main/search-bar'

const Container = styled.div``
function Main() {
  return (
    <Container>
      <Navbar />
      <Logo />
      <SearchBar />
    </Container>
  )
}

export default Main
