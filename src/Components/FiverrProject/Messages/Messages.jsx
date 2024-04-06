import React from 'react'
import { Link } from 'react-router-dom'
import './Messages.scss'
function Messages() {

  const currentUser = {
    id: 1,
    username: "sanjay",
    isSeller: true
  }
  const Message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta excepturi ipsam at ipsa maiores mollitia similique amet dignissimos."
  return (
    <div className="Messages">
      <div className="containerMygigs">
        <div className="titleMygigs">
          <h2>Messages</h2>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Dates</th>
            <th>Action</th>


          </tr>
          <tr className='Active'>
            <td>
              John Doe        
                  </td>
            <td> <Link to="/message/123" className='MsgLink'>{Message.substring(0,100)}... </Link>  </td>
            <td>One day ago</td>
            <td> <button className='btnmessage'>Mark As Read</button></td>
            
          </tr>
          <tr className='Active'>
            <td>
              John Doe        
                  </td>
            <td> <Link to="/message/123" className='MsgLink'>{Message.substring(0,100)}... </Link> </td>
            <td>One day ago</td>
            <td> <button className='btnmessage'>Mark As Read</button></td>
            
          </tr>
         <tr>
            <td>
              John Doe        
                  </td>
            <td> <Link to="/message/123" className='MsgLink'>{Message.substring(0,100)}... </Link> </td>
            <td>One day ago</td>
            
            
          </tr>
         <tr>
            <td>
              John Doe        
                  </td>
            <td> <Link to="/message/123" className='MsgLink'>{Message.substring(0,100)}... </Link> </td>
            <td>One day ago</td>
            
            
          </tr>
         <tr>
            <td>
              John Doe        
                  </td>
            <td> <Link to="/message/123" className='MsgLink'>{Message.substring(0,100)}...</Link>  </td>
            <td>One day ago</td>
            
            
          </tr>
         <tr>
            <td>
              John Doe        
                  </td>
            <td> <Link to="/message/123" className='MsgLink'>{Message.substring(0,100)}...</Link>  </td>
            <td>One day ago</td>
            
            
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages