import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'

import { fetchLogin } from './service'
import { useUserContext } from '../context/user-context'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`
//아디 비번 값 받기
//값없으면 disabled
function Form() {
  const { setUser } = useUserContext()
  const history = useHistory()

  const handleSubmit = async () => {
    try {
      const user = await fetchLogin(account)

      //글로벌 변수 user에 셋팅하면 모든 컴포넌트에서 다 사용 가능
      setUser(user)
      history.replace('/')
      console.log('user', user)
    } catch (e) {
      window.alert(e)
    }
  }

  const [account, setAccount] = useState({
    id: '',
    password: '',
  })
  const onChange = (e) => {
    // setAccount({
    //   [e.target.name]: e.target.value,
    // })
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    })
  }

  function hasAccountValue() {
    if (account.id.length === 0 && account.password.length === 0) {
      return true
    }
  }

  return (
    <Container>
      <Input
        id="id"
        name="id"
        placeholder="아이디를 입력해주세요"
        onChange={onChange}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChange}
      />
      <Button disabled={hasAccountValue()} onClick={handleSubmit}>
        로그인
      </Button>
      <Link to="/signup">
        <Button>회원가입</Button>
      </Link>
    </Container>
  )
}

export default Form
