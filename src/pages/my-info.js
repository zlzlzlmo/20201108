import React from 'react'
import { useUserContext } from '../components/context/user-context'
import { useHistory } from 'react-router-dom'

function MyInfo() {
  const { user, setUser } = useUserContext()
  const history = useHistory()

  //user의 id와 name을 해체할당
  const { id, name } = user

  const logout = () => {
    //Context user 값 초기화
    //완료후 다시 메인페이지로 이동
    setUser(null)
    history.replace('/')
  }
  return (
    <div>
      <h1>
        로그인 된 유저 : {id}, 이름:{name}
      </h1>
      <button onClick={logout}>로그아웃</button>
    </div>
  )
}

export default MyInfo
