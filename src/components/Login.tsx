import React, { useState } from 'react'
import { login } from '../utils/api-utils'
import { useHistory, Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleEmailChange = (e: any) => setEmail(e.target.value)
  const handlePasswordChange = (e: any) => setPassword(e.target.value)

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault()

    const loginUser = await login({
      email,
      password
    })

    // check for login errors
    if (loginUser.status === 500) return history.push('/login')

    // redirect user on successful login
    history.push('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email"><div className='input-label'>Email:</div>
          <input
            type='email'
            name="email"
            placeholder='your@email.com'
            value={email}
            required
            onChange={handleEmailChange} />
        </label>

        <label htmlFor="password"><div className='input-label'>Password:</div>
          <input
            type='password'
            name="password"
            placeholder='password'
            value={password}
            required
            onChange={handlePasswordChange} />
        </label>

        <button>Login</button>
      </form>
      <Link to="/password-reset">Forgot Password</Link>
    </div>
  )
}

export default Login
