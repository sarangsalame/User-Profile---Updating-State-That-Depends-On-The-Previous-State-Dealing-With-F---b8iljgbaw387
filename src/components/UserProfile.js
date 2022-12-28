import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{
  const dataVal=useContext(UserContext);
  return (
    <div>
    <h1 id="name">{dataVal.name}</h1>
    <h1 id="age">{dataVal.age}</h1>
    </div>
  )
}

export {UserProfile}
