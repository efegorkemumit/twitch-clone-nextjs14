import React from 'react'

interface AuthLayoutProps{
    children: React.ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className='h-full flex items-center justify-center '>

        {children}
    </div>
  )
}

export default AuthLayout