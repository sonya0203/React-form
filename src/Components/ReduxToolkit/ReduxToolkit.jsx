import React from 'react'
import { useDispatch } from 'react-redux'
import fakeData from './fakeData'
import { addUser, deleteAllUsers } from './UserSlice'
import AccessData from './AccessData'

function ReduxToolkit() {
  const dispatch = useDispatch()
  const addNewUser = (payload) => {
 
    dispatch (addUser(payload))
  }
const RemoveallUsers=()=>{
  dispatch(deleteAllUsers())
}

  return (
    <>
      <button onClick={()=>addNewUser(fakeData())} >AddUser</button>
      <button onClick={()=>RemoveallUsers()}>deleteAllUsers</button>
      <AccessData/>
    </>
  )
}

export default ReduxToolkit