import React from 'react'
import { Link } from 'react-router-dom'
import './MyGigs.scss'
function MyGigs() {
  return (
   <div className="myGigs">
    <div className="containerMygigs">
      <div className="titleMygigs">
        <h2>Gigs</h2>
        <Link to="/add"><button>Add New Gig</button></Link>
      </div>
      <table>
        <tr>
        <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>

        </tr>
        <tr>
          <td>
            <img className='imgMygigs' src="https://tse1.mm.bing.net/th?id=OIP.urXiyZNTW4gOtB-IInTBfgHaFo&pid=Api&rs=1&c=1&qlt=95&w=150&h=114" alt="" />
          </td>
          <td>Gig</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img className='delete' src="https://tse3.mm.bing.net/th?id=OIP.h34-YZFupmVzJd6rKwTJJgHaHa&pid=Api&P=0&h=180" alt="" />
          </td>
        </tr>
        <tr>
          <td>
            <img className='imgMygigs' src="https://tse1.mm.bing.net/th?id=OIP.urXiyZNTW4gOtB-IInTBfgHaFo&pid=Api&rs=1&c=1&qlt=95&w=150&h=114" alt="" />
          </td>
          <td>Gig</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img className='delete' src="https://tse3.mm.bing.net/th?id=OIP.h34-YZFupmVzJd6rKwTJJgHaHa&pid=Api&P=0&h=180" alt="" />
          </td>
        </tr> 
        <tr>
          <td>
            <img className='imgMygigs' src="https://tse1.mm.bing.net/th?id=OIP.urXiyZNTW4gOtB-IInTBfgHaFo&pid=Api&rs=1&c=1&qlt=95&w=150&h=114" alt="" />
          </td>
          <td>Gig</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img className='delete' src="https://tse3.mm.bing.net/th?id=OIP.h34-YZFupmVzJd6rKwTJJgHaHa&pid=Api&P=0&h=180" alt="" />
          </td>
        </tr> 
        <tr>
          <td>
            <img className='imgMygigs' src="https://tse1.mm.bing.net/th?id=OIP.urXiyZNTW4gOtB-IInTBfgHaFo&pid=Api&rs=1&c=1&qlt=95&w=150&h=114" alt="" />
          </td>
          <td>Gig</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img className='delete' src="https://tse3.mm.bing.net/th?id=OIP.h34-YZFupmVzJd6rKwTJJgHaHa&pid=Api&P=0&h=180" alt="" />
          </td>
        </tr>
        <tr>
          <td>
            <img className='imgMygigs' src="https://tse1.mm.bing.net/th?id=OIP.urXiyZNTW4gOtB-IInTBfgHaFo&pid=Api&rs=1&c=1&qlt=95&w=150&h=114" alt="" />
          </td>
          <td>Gig</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img className='delete' src="https://tse3.mm.bing.net/th?id=OIP.h34-YZFupmVzJd6rKwTJJgHaHa&pid=Api&P=0&h=180" alt="" />
          </td>
        </tr>
        <tr>
          <td>
            <img className='imgMygigs' src="https://tse1.mm.bing.net/th?id=OIP.urXiyZNTW4gOtB-IInTBfgHaFo&pid=Api&rs=1&c=1&qlt=95&w=150&h=114" alt="" />
          </td>
          <td>Gig</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img className='delete' src="https://tse3.mm.bing.net/th?id=OIP.h34-YZFupmVzJd6rKwTJJgHaHa&pid=Api&P=0&h=180" alt="" />
          </td>
        </tr>
      </table>
    </div>
   </div>
  )
}

export default MyGigs