import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { setNewPassword } from '../utils/api-utils'
import SuccessModal from './SuccessModal'

type TokenParams = {
  token: string;
}

const NewPassword = () => {
  const { token } = useParams<TokenParams>()
  const history = useHistory()
  
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [success, setSuccess] = useState(false)

  const handleEmailChange = (e: any) => setEmail(e.target.value)
  const handlePassword1Change = (e: any) => setPassword1(e.target.value)
  const handlePassword2Change = (e: any) => setPassword2(e.target.value)

  const handleNewPasswordSubmit = async (e: any) => {
    e.preventDefault()

    // check passwords match
    if (password1 !== password2) return alert('Oops, passwords do not match. Please try again.')

    const updatePassword = await setNewPassword({ email, password: password1 }, token)
    if (updatePassword.status === 500) history.push('/login')

    setSuccess(true)

    // redirect to homepage 
    setTimeout(() => history.push('/'), 2500)
  }

  return (
    <div>
      {
        success
          ? <SuccessModal message={'Your password has been updated.'} optionalMessage={`Redirecting to homepage...`} />
          : <div>
            <h1>Create New Password</h1>
            <form onSubmit={handleNewPasswordSubmit}>
              <label htmlFor="email"><div className='input-label'>Email:</div>
                <input
                  type='email'
                  name="email"
                  placeholder='your@email.com'
                  value={email}
                  required
                  onChange={handleEmailChange} />
              </label>

              <label htmlFor="password-1"><div className='input-label'>Password:</div>
                <input
                  type='password'
                  name="password-1"
                  placeholder='password'
                  value={password1}
                  required
                  onChange={handlePassword1Change} />
              </label>

              <label htmlFor="password-2"><div className='input-label'>Re-Enter Password:</div>
                <input
                  type='password'
                  name="password-2"
                  placeholder='re-enter password'
                  value={password2}
                  required
                  onChange={handlePassword2Change} />
              </label>

              <button>Update Password</button>
            </form>
          </div>
      }
    </div>
  )
}

export default NewPassword
