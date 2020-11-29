import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from 'react'

//createContext를 사용하여 상태값을 담을 박스 생성 -> 그 박스의 이름을 지정(Context)
const Context = createContext()

//reducer가 변화를 일으키는 주체

const reducer = (state, action) => {
  //action안에 있는 type에 따라 데이터를 어케 변화시킬지
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload,
      }
    }
  }
}

//action이 데이터의 변화를 요청

//상위 컴포넌트에 UserContextProvider 컴포넌트를 감싸기 위한 설정
export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    user: JSON.parse(localStorage.getItem('user') || null),
  })

  //글로벌하게 관리하고 싶은 상태값 지정

  //user에 변화가 일어나면 로컬에 저장
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || null))

  const { user } = state
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      //로그아웃때 setUser(null)을 이용해 지워서 else로 빠지고 그리고 리무브 localStorage
      localStorage.removeItem('user')
    }
  }, [user])

  const actions = {
    setUser: (user) => {
      //dispatch가 변화를 일으킴ㄷ
      dispatch({
        type: 'SET_USER',
        payload: user,
      })
    },
  }

  return (
    //변수명.Provider 문법으로 그 범위 안에있는 컴포넌트한테 값을 공유할 수 있음
    //value값에 전송할 props 넣기 속성명(value)는 임의변경 불가
    <Context.Provider
      value={{
        ...state,
        ...actions,
      }}
    >
      {children}
    </Context.Provider>
  )
}

//이걸 이용해서 value에 있는 값에 접근 할 수 있다.
//예를들어 const {user} = useUserContext(); 를 하면 user상태값을 빼올 수 있음
export function useUserContext() {
  return useContext(Context)
}
