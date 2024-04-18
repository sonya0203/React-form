
import React, { useState } from 'react';
import './PopupContent.scss'
function Popup({ open, setOpen }) {
    const [show, setShow] = useState(false)


    return (
        <div className="popup">
            {open && (
                <div className="demoClass">
                    <div className="top">
                        <div className="arrow" onClick={()=>{setOpen(false)}}>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.dX3K4QUJvby7vnIx-c7IqwHaHa&pid=Api&rs=1&c=1&qlt=95&w=116&h=116" alt="" />
                        </div>
                        <div className="head">  <h1>Let’s book a<span> free demo</span> session for you</h1></div>
                        <div className="class"><span>Select Class</span></div>
                        <div className="btn" onClick={() => { setShow(true) }}>
                            <button>LKG


                                {show && (<div className="demoClass">

                                <div className="arrow" >
                              <img src="https://tse1.mm.bing.net/th?id=OIP.dX3K4QUJvby7vnIx-c7IqwHaHa&pid=Api&rs=1&c=1&qlt=95&w=116&h=116" alt="" />
                                  </div>
                                    <div className="languageTop">
                                        <p >class UKG</p>
                                        <h2>What is your current school medium?</h2>
                                    </div>
                                    <div className="mediumContainer">
                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />
                                        </div>
                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />
                                        </div>

                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />
                                        </div>

                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />
                                        </div>
                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />
                                        </div>

                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />
                                        </div>
                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />
                                        </div>

                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />
                                        </div>

                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />

                                        </div>

                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />
                                        </div>

                                        <div className="medium">
                                            <label htmlFor="">gujrati medium</label>
                                            <input type="radio" />
                                        </div>
                                    </div>

                                    <div className="button">
                                        <div className="next">
                                            <button>Next</button>
                                        </div>
                                    </div>
                                </div>)}

                            </button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                            <button>LKG</button>
                        </div>
                    </div>
                    <div className="buttom">
                        <div className="next">
                            <button>Next</button>
                        </div>
                    </div>


                </div>
            )}

        </div>
    );
}

export default Popup;
