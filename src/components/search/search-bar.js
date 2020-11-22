import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const horizontalCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const Container = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 2px solid #0bde8b;
  background-color: #fff;
  padding: 20px 60px;
  box-sizing: border-box;
`

const ArrowIcon = styled(Link)`
  ${horizontalCenter}
  left: 18px;
  display: block;
  width: 21px;
  height: 18px;
  background-position: -164px -343px;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`

const SearchIcon = styled.span`
  ${horizontalCenter}
  right: 18px;
  width: 24px;
  height: 24px;
  background-position: -356px -260px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: middle;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`

const RemoveIcon = styled.span`
  ${horizontalCenter}
  right: 0px;
  width: 20px;
  height: 20px;
  background-position: -389px -29px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`

const InputContainer = styled.div`
  position: relative;
`

const Input = styled.input`
  width: 100%;
  background-color: #fff;
  font-weight: 700;
  font-size: 20px;
  box-sizing: border-box;

  ${({ active }) =>
    active &&
    `
    padding-right: 25px; 
  `}
`

function SearchBar({ onAddKeyword }) {
  // 1. 검색어를 state 로 다루도록 변경
  // 2. 이벤트 연결
  // 3. Link to 설명

  //form을 다룰때는 2-way 데이터 바인딩을 하는게 좋음.(input 의 value에 state를 넣는 것)
  const [keyword, setKeyword] = useState('')

  const handleKeyword = (e) => {
    setKeyword(e.target.value)
  }
  const handleEnter = (e) => {
    if (keyword && e.keyCode === 13) {
      //엔터일때 부모의 addkeyword에 전달
      onAddKeyword(keyword)
      setKeyword('')
    }
  }

  const handleClearKeyword = () => {
    setKeyword('')
  }

  //느낌표로 키워드를 갖고있냐 없냐로 boolean 형태로 나옴
  //키워드를 가지고 있다면 active가 발생하여 padding이 발생함. // 패딩이 없으면 x 아이콘까지 글자가 침법하기 때문
  const hasKeyword = !!keyword

  return (
    <Container>
      <ArrowIcon to="/" />
      <InputContainer>
        <Input
          placeholder="검색어를 입력해주세요"
          active={hasKeyword}
          value={keyword}
          onChange={handleKeyword}
          onKeyDown={handleEnter}
        />

        {keyword && <RemoveIcon onClick={handleClearKeyword} />}
      </InputContainer>
      <SearchIcon />
    </Container>
  )
}

export default SearchBar
