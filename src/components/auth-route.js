import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useUserContext } from './context/user-context'
//auth를 받기 위해 high odd components 사용
//정의된 props는 ...props에 들어가고, auth라는 직접 제작한 props는 auth로
function AuthRoute({ auth, ...props }) {
  const { user } = useUserContext()
  const history = useHistory()
  if (auth && user === null) {
    console.log('로그인 필요')

    //로그인 페이지로 가기
    history.replace('/signin')
    return null
  }
  /*
    인증처리 
    
    
    */
  return <Route {...props} />
}

export default AuthRoute
