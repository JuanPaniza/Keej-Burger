"use client"


import Confirm from "@/components/form-login/Confirm"

const  newPassword = ({params}) => {
  const {token} = params


  return (
  
      <>
       <Confirm token={token}/>
      </>
  )
}

export default newPassword