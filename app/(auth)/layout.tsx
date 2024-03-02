import React from 'react'
import Logo from './componets/Logo'

interface AuthLayoutProps{
    children: React.ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div className='h-full  flex-col flex items-center justify-center space-y-7'>
<Logo/>
        {children}
    </div>
  )
}

export default AuthLayout