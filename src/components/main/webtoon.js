import React, { useEffect, useState } from 'react'
import { fetchWebtoons, fetchRecommendWebtoons } from './service'
import styled from 'styled-components'
import { useUserContext } from '../context/user-context'
const ScrollContainer = styled.div`
  padding: 20px;
  white-space: nowrap;
  overflow-x: auto;
`

const WebtoonContainer = styled.div`
  display: inline-block;
  width: 45%;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`
const Image = styled.img`
  width: 100%;
  vertical-align: top;
`
const Title = styled.div`
  margin-top: 9px;
  font-weight: bold;
`
const Author = styled.div`
  color: #797b84;
  margin-top: 4px;
  font-size: 14px;
`

function Webtoons() {
  const [webtoons, setWebtoons] = useState([])
  const [recommendWebtoons, setRecommendWebtoons] = useState([])
  const { user } = useUserContext()

  //useEffect는 async를 지원하지않기때문에
  //즉시실행함수나 함수를 새로 만들어서 사용한다.
  //user가 변할때마다 동작해야함(로그인이 되면 추천웹툰이 나와야하기땜)
  useEffect(() => {
    //   (async()=>{
    //     fetchWebtoons()
    //   }())

    async function fetchAndSetWebtoons() {
      setWebtoons(await fetchWebtoons())

      if (user) {
        setRecommendWebtoons(await fetchRecommendWebtoons())
      }
    }
    fetchAndSetWebtoons()
  }, [user])

  //아무것도 안그려져있으면 아무것도 안내뱉기
  if (!webtoons.length) {
    return null
  }
  return (
    <div>
      <ScrollContainer>
        {webtoons.map(({ id, title, image, author }) => {
          return (
            <WebtoonContainer key={title}>
              <Image src={image} />
              <Title>{title}</Title>
              <Author>{author}</Author>
            </WebtoonContainer>
          )
        })}
      </ScrollContainer>
      {recommendWebtoons.length > 0 && (
        <ScrollContainer>
          {recommendWebtoons.map(({ id, title, image, author }) => {
            return (
              <WebtoonContainer key={title}>
                <Image src={image} />
                <Title>{title}</Title>
                <Author>{author}</Author>
              </WebtoonContainer>
            )
          })}
        </ScrollContainer>
      )}
    </div>
  )
}
export default Webtoons
