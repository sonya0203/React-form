import { useDispatch, useSelector } from 'react-redux'
import {removeUser } from './UserSlice';

function AccessData() {
    const dispatch=useDispatch()
    const userData = useSelector((state)=>{
      return  state.users
    }); 
    const DeleteUser=(id)=>{
dispatch(removeUser(id))
    }

 
  return (
   <>
   {userData.map((users,id)=>{
   return <li key={id}>
        {users}
        <button onClick={()=>DeleteUser(id)}>delete</button>
    </li>
   })}
   </>
  )
}

export default AccessData