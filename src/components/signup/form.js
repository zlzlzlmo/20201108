import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'
import { requestSignup } from './service'
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
  const history = useHistory()

  const handleSubmit = async () => {
    try {
      if (
        await requestSignup({
          id,
          password,
          name,
        })
      ) {
        window.alert('회원가입이 완료되었습니다.')
        history.push('/')
      } else {
        window.alert('일시적인 오류로 회원가입에 실패하였습니다.')
      }
    } catch (e) {
      window.alert(e)
    }
  }

  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
    rePassword: '',
    name: '',
  })
  const handleFormValues = (e) => {
    // setAccount({
    //   [e.target.name]: e.target.value,
    // })
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const { id, password, rePassword, name } = formValues

  //같으면 true, 다르면 false
  const inMatchedPassword = password && rePassword && password === rePassword

  //이렇게 다 입력된 상태면 회원가입 가능
  const isSubmittable = inMatchedPassword && id && name

  function hasAccountValue() {
    console.log(isSubmittable)
    if (isSubmittable === false) {
      return true
    } else {
      return false
    }
  }

  return (
    <Container>
      <Input
        id="id"
        name="id"
        placeholder="아이디를 입력해주세요"
        onChange={handleFormValues}
      />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={handleFormValues}
      />
      <Input
        name="rePassword"
        type="password"
        placeholder="비밀번호를 다시 입력해주세요"
        onChange={handleFormValues}
      />
      <Input
        name="name"
        placeholder="이름을 입력해주세요"
        onChange={handleFormValues}
      />
      <Button disabled={hasAccountValue()} onClick={handleSubmit}>
        회원가입
      </Button>
    </Container>
  )
}

export default Form
