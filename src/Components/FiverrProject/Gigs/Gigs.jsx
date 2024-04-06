import React, { useState } from 'react'
import './Gigs.scss'
import { gigs } from '../Data'
import GigCard from '../GigCard/GigCard'
function Gigs() {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState("sales")
const ReSort=(type)=>{
  setSort(type)
  setOpen(false)
}


  return (
    <div className="gigs">
      <div className="gigcontainer">
        <span className="breadcrumbs">Liverr > Graphics & Design > </span>
        <h2>AI Artists</h2>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="gigsleft">
            <span>Budget</span>
            <input type='text' placeholder='min'></input>
            <input type='text' placeholder='max'></input>
            <button>Apply</button>
          </div>
          <div className="gigsright">
            <span className="sortBy">SortBy</span>
            <span className="sortType"> {sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src='https://www.svgrepo.com/show/80156/down-arrow.svg'className='downArrow' onClick={() => setOpen(!open)}></img>
            {open && (<div className="rightMenu">
             { sort ==="sales" ? <span onClick={()=>ReSort("createdAt")}>Newest</span>
              :<span onClick={()=>ReSort("sales")}>Best Selling</span>}
            </div>)}
          </div>
        </div>
        <div className="cards">
       {gigs.map(gig=>(
        <GigCard key={gig.id} card={gig}/>
       ))}
          </div>
      </div>
    </div>
  )
}

export default Gigs