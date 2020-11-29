export const requestSignup = async (user) => {
  const response = await fetch('http://localhost:8888/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    //user의 데이터를 보낸다
    body: JSON.stringify(user),
  })

  return response.ok
}
