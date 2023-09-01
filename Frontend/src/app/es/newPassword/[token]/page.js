"use client"


import RecoverPassword from "@/components/form-login/RecoverPassword"

const  newPassword = ({params}) => {
  const {token } = params


  return (
  
      <>
       <RecoverPassword token={token}/>
      </>
  )
}

export default newPassword