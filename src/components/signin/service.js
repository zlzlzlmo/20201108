export const fetchLogin = async ({ id, password }) => {
  //1.유저목록을 가져와야함

  //동기형은 await를 쓰면 이게 끝나기전에 아래께 동작을 안함
  // promise는 비동기

  const response = await fetch('http://localhost:8888/users')

  if (response.ok) {
    //서버 통신이 성공적으로 이루어지면 json 값 users에 대입
    const users = await response.json()

    const user = users.find((user) => user.id === id)

    if (!user || user.password !== password) {
      throw new Error('아이디 또는 비밀번호를 정보를 확인해주세요.')
    }

    return user
  }
  throw new Error('일시적인 에러가 발생하였습니다.')
}
