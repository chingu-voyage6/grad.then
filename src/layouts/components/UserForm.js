import React from 'react'

const UserForm = () => {
  return (
    <div>
      <form>
        Username:
        <input type="text" />
        Email:
        <input type="email" />
        Password
        <input type="password" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default UserForm
