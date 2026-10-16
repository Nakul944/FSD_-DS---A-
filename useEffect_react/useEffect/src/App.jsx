import React, { useState } from 'react'

const form = () => {
  const [formData, setFromData] = useState({
    name:"",
    email:"",
    password:""
  })
  return (
    <div>
      <form action="">
        <input type="text" name="" id=""  placeholder='Enter name' value={} onChange={}/>
        <br />
        <input type="email" name="" id="" placeholder='Enter Email' value={} onChange={}/>
        <br />
        <input type="password" name="" id="" placeholder='Enter pass' value={} onChange={}/>
        <br />
        <button type='submit' onClick={useState}>Registration</button>
      </form>
    </div>
  )
}

export default form