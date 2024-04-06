import React from 'react'
import { Link } from 'react-router-dom'
import './Orders.scss'
function Orders() {

  const currentUser = {
    id: 1,
    username: "sanjay",
    isSeller: true
}
  return (
   <div className="Orders">
    <div className="containerMygigs">
      <div className="titleMygigs">
        <h2>Orders</h2>
      </div>
      <table>
        <tr>
        <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser ?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>

        </tr>
        <tr>
          <td>
            <img className='imgMygigs' src="https://tse1.mm.bing.net/th?id=OIP.urXiyZNTW4gOtB-IInTBfgHaFo&pid=Api&rs=1&c=1&qlt=95&w=150&h=114" alt="" />
          </td>
          <td>Gig</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img className='delete' src="https://tse2.mm.bing.net/th?id=OIP.L99dXvjtBsK3ihQlwVZcggHaHa&pid=Api&P=0&h=180" alt="" />
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
            <img className='delete' src="https://tse2.mm.bing.net/th?id=OIP.L99dXvjtBsK3ihQlwVZcggHaHa&pid=Api&P=0&h=180" alt="" />
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
            <img className='delete' src="https://tse2.mm.bing.net/th?id=OIP.L99dXvjtBsK3ihQlwVZcggHaHa&pid=Api&P=0&h=180" alt="" />
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
            <img className='delete' src="https://tse2.mm.bing.net/th?id=OIP.L99dXvjtBsK3ihQlwVZcggHaHa&pid=Api&P=0&h=180" alt="" />
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
            <img className='delete' src="https://tse2.mm.bing.net/th?id=OIP.L99dXvjtBsK3ihQlwVZcggHaHa&pid=Api&P=0&h=180" alt="" />
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
            <img className='delete' src="https://tse2.mm.bing.net/th?id=OIP.L99dXvjtBsK3ihQlwVZcggHaHa&pid=Api&P=0&h=180" alt="" />
          </td>
        </tr>
      </table>
    </div>
   </div>
  )
}

export default Orders