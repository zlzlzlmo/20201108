import React, { useState } from 'react'
import styled from 'styled-components'
//use로 시작하는건 다 리액트 hook이다
const BoxContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #bbb;

  ${({ color }) => `background-color:${color};`}
  ${({ width }) => `width:${width}px;`}
`
// 백틱 안에선 스크립트 쓰려면 $ 필요

// class Box extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   componentDidMount() {
//     console.log('sadas')
//   }
//   render() {
//     return <div>Box</div>
//   }
// }

function Box() {
  const [bgColor, setBgColor] = useState('#efefef')
  const [width, setWidth] = useState(100)
  console.log('bgColor', bgColor)

  const handleBgColor = (e) => {
    setBgColor(e.target.value)
  }

  //useEffect 로 componentDidMount를 대체 할 수 있음
  //함수형 컴포넌트가 100% 클래스 컴포넌트를 대체하는것은 아님.
  return (
    <div>
      <input onChange={handleBgColor}></input>
      <BoxContainer color={bgColor} width={width} />
    </div>
  )
}

export default Box
