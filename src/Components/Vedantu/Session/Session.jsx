import React from 'react'
import './Session.scss'
import { usePopup } from '../Popup/usePopup'
import PopupContent from '../Popup/PopupContent'
function Session() {
   const[open ,setOpen]=usePopup();

    return (
        <> 
         
<PopupContent open={open} setOpen={setOpen}/>
            <div className="sessionContainer" onClick={() => { setOpen(!open) }}>


                <div className="left">
                    <h1>Book your  <span>  Free Demo</span> session</h1>
                    <p>Get a free academic counselling session</p>
                    <button>Book a  free Demo</button>
                </div>
                <div className="right">
                    <img src="https://www.vedantu.com/cdn/images/new-home-page/demo-open-form.webp" alt="" />
                </div>
            </div>

        </>)
}

export default Session