import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Account() {
    const [userName,setUserName] = useState("")
    useEffect(()=>{
        if(localStorage.getItem("existingUser")){
            setUserName(JSON.parse(localStorage.getItem("existingUser")).username)
        }
    },[])
  return (
    <div>
    <div className='text-center vh-100 bg-dark ' style={{paddingTop:'100px'}}>
      <h3 className='text-white mt-5'>Account</h3>
      <h4 className='text-white'>Username : <span>{userName}</span></h4>
    </div>
    </div>
  )
}

export default Account