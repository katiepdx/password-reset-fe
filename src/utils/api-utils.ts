export const signUp = async (userInfo: object) => {
  const res = await fetch('http://localhost:7890/api/v1/auth/signup', {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  })

  if (!res.ok) alert('Error: Unable to sign up.')

  const data = await res.json()

  return data
}

export const login = async (userInfo: object) => {
  const res = await fetch('http://localhost:7890/api/v1/auth/login', {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  })

  if (!res.ok) alert('Invalid username/password. Please try again.')

  const data = await res.json()

  return data
}
