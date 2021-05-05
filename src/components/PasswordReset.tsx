import React, { useState } from 'react'
import { getPasswordResetLink } from '../utils/api-utils'
import SuccessModal from './SuccessModal'

const PasswordReset = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const handleEmailChange = (e: any) => setEmail(e.target.value)

  const handleResetSubmit = async (e: any) => {
    e.preventDefault()
    const resetLink = await getPasswordResetLink(email)
    if (resetLink.status === 500) alert('Sorry, could not find an email match.')

    setSuccess(true)
  }

  return (
    <div>
      {
        success
          ? <SuccessModal message={'Please check your email for a reset link'} />
          : <div>
            <h1>Reset Password</h1>
            <form onSubmit={handleResetSubmit}>
              <label htmlFor="email"><div className='input-label'>Email:</div>
                <input
                  type='email'
                  name="email"
                  placeholder='your@email.com'
                  value={email}
                  required
                  onChange={handleEmailChange} />
              </label>
              <button>Get Reset Link</button>
            </form>
          </div>
      }
    </div>
  )
}

export default PasswordReset
