import React from 'react'
import "./Footer.scss"
function Footer() {
  return (<>
    <hr  style={{width:"70%",margin:"auto"}}/>
    <div className="footer">
    
      <div className="left">
        <p>© 2024.Vedantu.com. All rights reserved</p>
        <p>Privacy policy</p>
        <p>Terms and conditions</p>
      </div>
      <div className="right">
        <img src="https://tse3.mm.bing.net/th?id=OIP.TCXRgFk1N5mv-R3N2PGbtAHaHa&pid=Api&P=0&h=180" alt="" />
        <img src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/svg/linkedin.svg" alt="" />
        <img src="https://tse3.mm.bing.net/th?id=OIP.EhGYQ7HxEvQwe0P7EHauuQHaGC&pid=Api&P=0&h=180" alt="" />
        <img src="https://tse1.mm.bing.net/th?id=OIP.Z4V-sgiHkRALrQL_JGokLwHaHa&pid=Api&P=0&h=180" alt="" />
      </div>
    </div>
    </> )
}

export default Footer