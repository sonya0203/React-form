import React from 'react'
import Features from '../Features/Features'
import TrustedBy from '../TrustedBy/TrustedBy'
import CatCard from '../CatCards/CatCards'
import { cards, projects } from '../Data'
import './Home.scss'
import ProjectCard from '../ProjectCarts/projectCard'
import Slide from '../Slide/Slide'

function Home() {
  return (<>
    <Features/>
    <TrustedBy/>
  
    <Slide slidesToShow={5} arrowsScroll={4}>
      {cards.map(card => (
        <CatCard card={card} key={card.id}/>
      ))}
    </Slide>
    <div className='infoFeatures'>
      <div className='containerHome'>
        <div className='homeItem'>

          <h2 >A whole world of freelance talent at your fingertips</h2>
          <div className="titleHome">
            <img src="https://storage.needpix.com/rsynced_images/checkbox-303113_1280.png" className='check' />
            The best for every budget
          </div>
          <p >   Find high-quality services at every price point. No hourly rates,
            just project-based pricing.</p>
          <div className="titleHome">
            <img src="https://storage.needpix.com/rsynced_images/checkbox-303113_1280.png" className='check' />
            Quality work done quickly
          </div>
          <p className='adjust'>    Find the right freelancer to begin working on your project within
            minutes.</p> <div className="titleHome">
            <img src="https://storage.needpix.com/rsynced_images/checkbox-303113_1280.png" className='check' />
            Protected payments, every time
          </div>
          <p className='adjust'>  Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.</p> <div className="titleHome">
            <img src="https://storage.needpix.com/rsynced_images/checkbox-303113_1280.png" className='check' />
            24/7 support
          </div>
          <p className='adjust'>    Find high-quality services at every price point. No hourly rates,
            just project-based pricing.</p>
        </div>

        <div className='homeItem'>
          <video src='https://v2.cdnpk.net/videvo_files/video/premium/partners1084/large_watermarked/BB_9eceafe7-fb4e-4052-911c-6dc17e16e817_preview.mp4' controls className='homeVideo'></video>
        </div>
      </div>
    </div>
    <div className='infoFeatures dark'>
      <div className='containerHome'>
        <div className='homeItems'>

          <h2> 
            Fiverr <i>business</i></h2>
          <h2>A business solution designed for <i>teams</i></h2>
          <p className='adjust '> Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses</p>
          <div className="">
            <img src="https://storage.needpix.com/rsynced_images/checkbox-303113_1280.png" className='check' />
            Connect to freelancers with proven business experience
          </div>
          <div className="">
            <img src="https://storage.needpix.com/rsynced_images/checkbox-303113_1280.png" className='check' />
            Get matched with the perfect talent by a customer success manager
          </div>
          <div className="">
            <img src="https://storage.needpix.com/rsynced_images/checkbox-303113_1280.png" className='check' />
            Manage teamwork and boost productivity with one powerful workspace
          </div>
          <button className='homeButton'>Explore Fiverr Business</button>
        </div>

        <div className='homeItem'>
          <img src='https://thumbs.dreamstime.com/b/laptop-chat-messaging-speech-bubbles-flat-design-online-conversation-concept-181673514.jpg' className='homeVideo'></img>
        </div>
      </div>
    </div>
    <Slide slidesToShow={5} arrowsScroll={4}>
      {projects.map(card => (
        <ProjectCard card={card} key={card.id}/>
      ))}
    </Slide>
  </>
  )
}

export default Home