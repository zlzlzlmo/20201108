import React from 'react'
import styled from 'styled-components'
import Logo from '../components/main/logo'
import Navbar from '../components/main/navbar'
import SearchBar from '../components/main/search-bar'
import Webtoons from '../components/main/webtoon'
import { useUserContext } from '../components/context/user-context'

const Container = styled.div``
function Main() {
  const { user } = useUserContext()

  return (
    <Container>
      <Navbar />
      <Logo />
      <SearchBar />
      <Webtoons />
    </Container>
  )
}

export default Main
