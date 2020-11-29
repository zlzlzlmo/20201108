import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'
import MainPage from './pages/main'
import SignInPage from './pages/signin'
import MyInfoPage from './pages/my-info'
import SearchPage from './pages/search'
import SignUpPage from './pages/signup'
import ErrorPage from './pages/error'
import GlobalStyles from './components/global-styles'
import Route from './components/auth-route'
import { UserContextProvider } from './components/context/user-context'
const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

function App() {
  return (
    <UserContextProvider>
      <Container>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route path="/signin" component={SignInPage}></Route>
            <Route auth path="/myinfo" component={MyInfoPage}></Route>
            <Route path="/search" component={SearchPage}></Route>
            <Route path="/main" component={MainPage}></Route>
            <Route path="/signup" component={SignUpPage}></Route>
            <Route component={ErrorPage}></Route>
          </Switch>
        </Router>
      </Container>
    </UserContextProvider>
  )
}

export default App
