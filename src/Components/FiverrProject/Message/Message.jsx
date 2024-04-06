import React from 'react'
import { Link } from 'react-router-dom'
import './Message.scss'
function Message() {
  return (
    <div className="message">
      <div className="msgcontainer">
        <span className="msgbreadCrumbs">
          <Link to='/messages'>MESSAGES</Link>> John Doe >
        </span>
        <div className="msgmessages">
          <div className="msgitem">
            <img src="https://tse1.mm.bing.net/th?id=OIP.V0lOa_0dCA2k2dvZHSZeNwHaHv&pid=Api&P=0&h=180" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quaerat dolor quasi numquam sit non quia ipsa modi illo veritatis!</p>
          </div>
          <div className="msgitem owner">
            <img src="https://tse1.mm.bing.net/th?id=OIP.V0lOa_0dCA2k2dvZHSZeNwHaHv&pid=Api&P=0&h=180" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quaerat dolor quasi numquam sit non quia ipsa modi illo veritatis!</p>
          </div>
          <div className="msgitem">
            <img src="https://tse1.mm.bing.net/th?id=OIP.V0lOa_0dCA2k2dvZHSZeNwHaHv&pid=Api&P=0&h=180" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quaerat dolor quasi numquam sit non quia ipsa modi illo veritatis!</p>
          </div>
          <div className="msgitem owner">
            <img src="https://tse1.mm.bing.net/th?id=OIP.V0lOa_0dCA2k2dvZHSZeNwHaHv&pid=Api&P=0&h=180" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quaerat dolor quasi numquam sit non quia ipsa modi illo veritatis!</p>
          </div>
          <div className="msgitem">
            <img src="https://tse1.mm.bing.net/th?id=OIP.V0lOa_0dCA2k2dvZHSZeNwHaHv&pid=Api&P=0&h=180" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quaerat dolor quasi numquam sit non quia ipsa modi illo veritatis!</p>
          </div>
          <div className="msgitem owner">
            <img src="https://tse1.mm.bing.net/th?id=OIP.V0lOa_0dCA2k2dvZHSZeNwHaHv&pid=Api&P=0&h=180" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quaerat dolor quasi numquam sit non quia ipsa modi illo veritatis!</p>
          </div>
        </div>
        <hr className='msgHr'/>
        <div className="write">
          <textarea name='' placeholder='Write a message' cols='30' rows='10'></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message