import React from 'react'
import { useSelector } from 'react-redux'

function Show() {
    const amount=useSelector(state=>state.amount)

  return (
    <><div>amount  :{amount}</div></>
 )
}

export default Show