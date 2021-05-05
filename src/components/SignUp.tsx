import React, { useState } from 'react'
import { signUp } from '../utils/api-utils'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleEmailChange = (e: any) => setEmail(e.target.value)
  const handlePasswordChange = (e: any) => setPassword(e.target.value)

  const handleSignUpSubmit = async (e: any) => {
    e.preventDefault()

    const signUpUser = await signUp({
      email,
      password
    })

    // check for signup errors
    const emailExistsMsg = 'duplicate key value violates unique constraint \"users_email_key\"'
    if (signUpUser.message === emailExistsMsg) {
      alert('Email already exists. Please login.')
      return history.push('/login')
    }
    if (signUpUser.status === 500) {
      alert('Oops! Something went wrong. Please try again.')
      return history.push('/signup')
    }

    // redirect user on successful login
    history.push('/')
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUpSubmit}>
        <label htmlFor="email"><div className='input-label'>Email:</div>
          <input
            type='email'
            name="email"
            placeholder='your@email.com'
            value={email}
            onChange={handleEmailChange} />
        </label>

        <label htmlFor="password"><div className='input-label'>Password:</div>
          <input
            type='password'
            name="password"
            placeholder='password'
            value={password}
            onChange={handlePasswordChange} />
        </label>

        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
