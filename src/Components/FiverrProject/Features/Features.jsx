import React from 'react'
import './Features.scss'
import profile from '../logo/profile.png'
function Features() {
  return (
    <div className='features'>
    <div className='container'>
      <div className='left'>
        <h1>Find the perfect <i className='decorate'> freelance </i>services for your Business</h1>
     <div className='search'>
      <span className='icon'><i class="bi bi-search"></i></span>
      <input type='text'className='searchInput'placeholder='Try building mobile app'></input>
      <button className='searchbtn'>Search</button>
     </div>
     <div className='popular'>
      <span>popular:</span>
    <button className='btn'>Web Design</button>
    <button  className='btn'>Wordpress</button>
    <button  className='btn'>Logo Design</button>
    <button  className='btn'>Al Services</button>



     </div>
     
     
     
      </div>
      <div className='right'>
        <img src={profile}className='profile'></img>
      </div>

    </div>
    </div>
  )
}

export default Features