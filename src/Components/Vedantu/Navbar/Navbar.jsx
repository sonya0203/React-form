import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [show, setShow] = useState(false)
  const [on, setOn] = useState(false)
  const [more, setMore] = useState(false)

  const [visible, setVisible] = useState(false)


  return (
    <>
    <div className="navbar">
      <div className="container">
        <Link to='/'>
          <img src="https://tse2.mm.bing.net/th?id=OIP.LrRoZa1MexHYUxXd0hdW_wHaFT&pid=Api&P=0&h=180" alt="" className='vedantu' />
        </Link>
        <div className="features" >
          <div className='cource' onMouseOver={() => { setOpen(true) }}
            onMouseOut={() => { setOpen(false) }}>
              <span >Cource</span>
              
      
            <img src="https://tse1.mm.bing.net/th?id=OIP.wE6J0L44koFeJg0DVq0J4AHaHa&pid=Api&P=0&h=180" alt="" />
          </div>

          {open && (<div className="dropdown" onMouseOver={() => { setOpen(true) }}
            onMouseOut={() => { setOpen(false) }}>
            <div className="left">
              <div className="items">
                <img src="https://tse3.mm.bing.net/th?id=OIP.dhYpXuDKYu-3rOAndzVrjQHaHa&pid=Api&P=0&h=180" alt="" />
                <div className="desc">
                  <h3>Long Terms Cources</h3>
                  <span>Guranteet improvement in marks or get your fees back</span>
                </div>

              </div>

              <div className="items">
                <img src="https://tse3.mm.bing.net/th?id=OIP.dhYpXuDKYu-3rOAndzVrjQHaHa&pid=Api&P=0&h=180" alt="" />
                <div className="desc">
                  <h3>Long Terms Cources</h3>
                  <span>Guranteet improvement in marks or get your fees back</span>
                </div>

              </div>

              <div className="items">
                <img src="https://tse3.mm.bing.net/th?id=OIP.dhYpXuDKYu-3rOAndzVrjQHaHa&pid=Api&P=0&h=180" alt="" />
                <div className="desc">
                  <h3>Long Terms Cources</h3>
                  <span>Guranteet improvement in marks or get your fees back</span>
                </div>

              </div>


              <div className="kidsContainer">
                <div className="kidsHeading">
                  <div className="kids">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.xeQsvVxp-lxd9ecFsWhtlgHaH0&pid=Api&P=0&h=180" alt="" />

                    <h3>Cources For Kids</h3>
                  </div>
                </div>



                <div className="itemsKids">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.dhYpXuDKYu-3rOAndzVrjQHaHa&pid=Api&P=0&h=180" alt="" />
                  <div className="desc">
                    <h4>Long Terms Cources</h4>
                    <span>Guranteet improvement in marks or get your fees back</span>
                  </div>

                </div>


                <div className="itemsKids">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.dhYpXuDKYu-3rOAndzVrjQHaHa&pid=Api&P=0&h=180" alt="" />
                  <div className="desc">
                    <h4>Long Terms Cources</h4>
                    <span>Guranteet improvement in marks or get your fees back</span>
                  </div>

                </div>

                <div className="itemsKids">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.dhYpXuDKYu-3rOAndzVrjQHaHa&pid=Api&P=0&h=180" alt="" />
                  <div className="desc">
                    <h4>Long Terms Cources</h4>
                    <span>Guranteet improvement in marks or get your fees back</span>
                  </div>

                </div>

                <div className="itemsKids">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.dhYpXuDKYu-3rOAndzVrjQHaHa&pid=Api&P=0&h=180" alt="" />
                  <div className="desc">
                    <h4>Long Terms Cources</h4>
                    <span>Guranteet improvement in marks or get your fees back</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="middle">
              <div className="stdsHead">
                <img src="https://tse2.mm.bing.net/th?id=OIP.i3Uk8aajh-8rPBVvkCGxBwHaF7&pid=Api&P=0&h=180" alt="" />
                <h3>Find courses by class</h3>
              </div>
              <div className="stds">
                <h4>Repeater</h4>
                <div className="science">
                  <span>Class 11</span>
                  <h6>science PCB</h6>
                </div>
                <div className="science">
                  <span>Class 11</span>
                  <h6>science PCM</h6>
                </div>
                <div className="science">
                  <span>Class 11</span>
                  <h6>  Commerce</h6>
                </div>
                <span>10</span>
                <span>9</span>
                <span>8</span>
                <span>7</span>
                <span>6</span>
                <span>5</span>
                <span>4</span>
                <span>3</span>
                <span>2</span>
                <span>1</span>
                <span>UKG</span>
                <span>LKG</span>

              </div>


            </div>
            <div className="right"
            >
              <div className="trgets">
                <img src="https://tse1.mm.bing.net/th?id=OIP.HVAkV76kvTZCLUf43lg_tAHaF7&pid=Api&P=0&h=180" alt="" />
                <h3>Find courses by target</h3>
              </div>
              <div className="items">
                <span className=' head'>Offline Centres </span>
                <span className='sub'>class 8-12</span>
              </div>
              <div className="rightcontainer" onMouseOver={() => { setOn(true) }}
                onMouseOut={() => { setOn(false) }}
              >
                <div className="rightdropdown" >
                  <div className="items">
                    <span className=' head'>School Tution</span>
                    <span className='sub'>For class 3-12</span>
                  </div>
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>

                  {on && (<div className="details">
                    <div className="items">
                      <span className="head">CBSE</span>
                      <span className="sub">class 6-12</span>
                    </div>
                    <div className="items">
                      <span className="head">CBSE</span>
                      <span className="sub">class 6-12</span>
                    </div>
                    <div className="items">
                      <span className="head">CBSE</span>
                      <span className="sub">class 6-12</span>
                    </div>
                    <div className="items">
                      <span className="head">CBSE</span>
                      <span className="sub">class 6-12</span>
                    </div>
                    <div className="items">
                      <span className="head">CBSE</span>
                      <span className="sub">class 6-12</span>
                    </div>
                    <div className="items">
                      <span className="head">CBSE</span>
                      <span className="sub">class 6-12</span>
                    </div>
                  </div>)}





                </div>

                <div className="rightdropdown"

                >                <div className="items">
                    <span className=' head'>School Tution</span>
                    <span className='sub'>For class 3-12</span>

                  </div>
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                </div>

                <div className="rightdropdown">

                  <div className="items">
                    <span className=' head'>School Tution</span>
                    <span className='sub'>For class 3-12</span>

                  </div>
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                </div>

                <div className="rightdropdown" >

                  <div className="items">
                    <span className=' head'>School Tution</span>
                    <span className='sub'>For class 3-12</span>

                  </div>
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                </div>

                <div className="rightdropdown" >

                  <div className="items">
                    <span className=' head'>School Tution</span>
                    <span className='sub'>For class 3-12</span>

                  </div>
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                </div>

                <div className="rightdropdown" >

                  <div className="items">
                    <span className=' head'>School Tution</span>
                    <span className='sub'>For class 3-12</span>

                  </div>
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                </div>

                <div className="rightdropdown" >

                  <div className="items">
                    <span className=' head'>School Tution</span>
                    <span className='sub'>For class 3-12</span>

                  </div>
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                </div>

                <div className="rightdropdown" >

                  <div className="items">
                    <span className=' head'>School Tution</span>
                    <span className='sub'>For class 3-12</span>

                  </div>
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                </div>


                <div className="items">
                  <span className=' head'>School Tution</span>
                  <span className='sub'>For class 3-12</span>

                </div>
                <div className="items">
                  <span className=' head'>School Tution</span>
                  <span className='sub'>For class 3-12</span>

                </div>

              </div>

            </div>













          </div>)}


        </div>
        <div className="navItems" 
        onMouseMove={() => { setDropdown(true) }}
          onMouseOut={() => { setDropdown(false) }}>
          <a className='color' href="">Courses for Kids </a>
          <img src="https://tse1.mm.bing.net/th?id=OIP.wE6J0L44koFeJg0DVq0J4AHaHa&pid=Api&P=0&h=180" alt="" />
          {dropdown && (<div className="kidContainer" onMouseMove={() => { setDropdown(true) }}
            onMouseOut={() => { setDropdown(false) }}>
            <div className="kidItem">
              <div className="logo">
                <img src="https://tse4.mm.bing.net/th?id=OIP.ks_r5iLovBHuIOqjEUlxVAHaHa&pid=Api&P=0&h=180" alt="" />
              </div>
              <div className="text">
                <span>English Superstar</span>
                <span className='standard'>Class 3 - 5</span>
                <span className='sub'>Level based holistic English program</span>
              </div>
            </div>

            <div className="kidItem">
              <div className="logo">
                <img src="https://tse4.mm.bing.net/th?id=OIP.ks_r5iLovBHuIOqjEUlxVAHaHa&pid=Api&P=0&h=180" alt="" />
              </div>
              <div className="text">
                <span>English Superstar</span>
                <span className='standard'>Class 3 - 5</span>
                <span className='sub'>Level based holistic English program</span>
              </div>
            </div>


            <div className="kidItem">
              <div className="logo">
                <img src="https://tse4.mm.bing.net/th?id=OIP.ks_r5iLovBHuIOqjEUlxVAHaHa&pid=Api&P=0&h=180" alt="" />
              </div>
              <div className="text">
                <span>English Superstar</span>
                <span className='standard'>Class 3 - 5</span>
                <span className='sub'>Level based holistic English program</span>
              </div>
            </div>

            <div className="kidItem">
              <div className="logo">
                <img src="https://tse4.mm.bing.net/th?id=OIP.ks_r5iLovBHuIOqjEUlxVAHaHa&pid=Api&P=0&h=180" alt="" />
              </div>
              <div className="text">
                <span>English Superstar</span>
                <span className='standard'>Class 3 - 5</span>
                <span className='sub'>Level based holistic English program</span>
              </div>
            </div>
          </div>)}
        </div>






        <div className="navItems">
         <a href=""
          className='color' onMouseOver={() => { setActive(true) }}
            onMouseOut={() => { setActive(false) }}>
          
            Free study material</a>
          <img src="https://tse1.mm.bing.net/th?id=OIP.wE6J0L44koFeJg0DVq0J4AHaHa&pid=Api&P=0&h=180" alt="" />
          {active && <div className="material" onMouseOver={() => { setActive(true) }}
            onMouseOut={() => { setActive(false) }}>
            <div className="items">
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>
                <span
                >NCERT SOLITIONS</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

                {show && (<div className="classes">
                  <div className="elements" onMouseOver={() => { setVisible(true) }}
                    onMouseOut={() => { setVisible(false) }}>
                    <span >NCERT soluction for Class 12</span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                    {visible && (<div className="last">
                      <span>NCERT soluction for Class 12 physics</span>
                      <span>NCERT soluction for Class 12 physics</span>
                      <span>NCERT soluction for Class 12 physics</span>
                      <span>NCERT soluction for Class 12 physics</span>
                      <span>NCERT soluction for Class 12 physics</span>
                      <span>NCERT soluction for Class 12 physics</span>
                      <span>NCERT soluction for Class 12 physics</span>
                      <span>NCERT soluction for Class 12 physics</span>

                    </div>)}

                  </div>

                  <div className="elements" onMouseOver={() => { setVisible(true) }}
                    onMouseOut={() => { setVisible(false) }}>
                    <span>NCERT soluction for Class 12</span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="elements" onMouseOver={() => { setVisible(true) }}
                    onMouseOut={() => { setVisible(false) }}>
                    <span>NCERT soluction for Class 12</span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="elements" onMouseOver={() => { setVisible(true) }}
                    onMouseOut={() => { setVisible(false) }}>
                    <span>NCERT soluction for Class 12</span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>

                  <div className="elements" onMouseOver={() => { setVisible(true) }}
                    onMouseOut={() => { setVisible(false) }}>
                    <span>NCERT soluction for Class 12</span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="elements" onMouseOver={() => { setVisible(true) }}
                    onMouseOut={() => { setVisible(false) }}>
                    <span>NCERT soluction for Class 12</span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="elements" onMouseOver={() => { setVisible(true) }}
                    onMouseOut={() => { setVisible(false) }}>
                    <span>NCERT soluction for Class 12</span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>

                  <div className="elements" onMouseOver={() => { setVisible(true) }}
                    onMouseOut={() => { setVisible(false) }}>
                    <span>NCERT soluction for Class 12</span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="elements" onMouseOver={() => { setVisible(true) }}
                    onMouseOut={() => { setVisible(false) }}>
                    <span>NCERT soluction for Class 12</span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                </div>)}

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>CBSE</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>JEE MAIN</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>JEE ADVANCED</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>NEET</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>NCERT SOLITIONS</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>CBSE</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>JEE MAIN</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>JEE ADVANCED</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>CBSE</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>NCERT SOLITIONS</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
              <div className="languages" onMouseOver={() => { setShow(true) }}
                onMouseOut={() => { setShow(false) }}>                <span>JEE MAIN</span>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fqG-q4Q3TDmJ7tMw7kx3tgHaHa&pid=Api&P=0&h=180" alt="" />

              </div>
            </div>
          </div>}








        </div>










        <div className="navItems">
          <a className='color' href="">Offline Centres</a>
          
          <img src="https://tse1.mm.bing.net/th?id=OIP.wE6J0L44koFeJg0DVq0J4AHaHa&pid=Api&P=0&h=180" alt="" />
        </div>
        <div className="navItems" onMouseOver={() => { setMore(true) }}
          onMouseOut={() => { setMore(false) }}>
            <a className='color' href="">More</a>
          
          <img src="https://tse1.mm.bing.net/th?id=OIP.wE6J0L44koFeJg0DVq0J4AHaHa&pid=Api&P=0&h=180" alt="" />
          {more && (<div className="moreContainer" onMouseOver={() => { setMore(true) }}
            onMouseOut={() => { setMore(false) }}>



            <div className="left">
              <div className="results">
                <div className="img">
                  <img src="https://cdn-icons-png.flaticon.com/128/3233/3233474.png" alt="" />
                </div>
                <div className="desc">
                  <h3>Our results</h3>
                  <span> A celebration for of all our success</span>
                </div>
              </div>
              <div className="results">
                <div className="img">
                  <img src="https://cdn-icons-png.flaticon.com/128/3233/3233474.png" alt="" />
                </div>
                <div className="desc">
                  <h3>Our results</h3>
                  <span> A celebration for of all our success</span>
                </div>
              </div>
              <div className="results">
                <div className="img">
                  <img src="https://cdn-icons-png.flaticon.com/128/3233/3233474.png" alt="" />
                </div>
                <div className="desc">
                  <h3>Our results</h3>
                  <span> A celebration for of all our success</span>
                </div>
              </div>
              <div className="results">
                <div className="img">
                  <img src="https://cdn-icons-png.flaticon.com/128/3233/3233474.png" alt="" />
                </div>
                <div className="desc">
                  <h3>Our results</h3>
                  <span> A celebration for of all our success</span>
                </div>
              </div>
              <div className="results">
                <div className="img">
                  <img src="https://cdn-icons-png.flaticon.com/128/3233/3233474.png" alt="" />
                </div>
                <div className="desc">
                  <h3>Our results</h3>
                  <span> A celebration for of all our success</span>
                </div>
              </div>
              <div className="results">
                <div className="img">
                  <img src="https://cdn-icons-png.flaticon.com/128/3233/3233474.png" alt="" />
                </div>
                <div className="desc">
                  <h3>Our results</h3>
                  <span> A celebration for of all our success</span>
                </div>
              </div>


              <div className="initiatives">
                <img src="https://tse1.mm.bing.net/th?id=OIP.eXhMHTxmsKX50L1MqhJ4ugHaFh&pid=Api&P=0&h=180" alt="" />
                <h3>Our Initiavities</h3>
              </div>
              <div className="scholorship">
                <div className="exams">
                  <h4>Vedantu Scholership Addmission Test(VSAT)</h4>
                  <span>online test to get a chance upto 100% scholorship</span>
                </div>

                <div className="exams">
                  <h4>Vedantu Scholership Addmission Test(VSAT)</h4>
                  <span>online test to get a chance upto 100% scholorship</span>
                </div>
                <div className="exams">
                  <h4>Vedantu Scholership Addmission Test(VSAT)</h4>
                  <span>online test to get a chance upto 100% scholorship</span>
                </div>
                <div className="exams">
                  <h4>Vedantu Scholership Addmission Test(VSAT)</h4>
                  <span>online test to get a chance upto 100% scholorship</span>
                </div>
                <div className="exams">
                  <h4>Vedantu Scholership Addmission Test(VSAT)</h4>
                  <span>online test to get a chance upto 100% scholorship</span>
                </div>
                <div className="exams">
                  <h4>Vedantu Scholership Addmission Test(VSAT)</h4>
                  <span>online test to get a chance upto 100% scholorship</span>
                </div>


              </div>
            </div>




            <div className="right">
              <div className="top">
                <div className="resources">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.jXq1GBhK8JdBP8iA59LdogHaHt&pid=Api&P=0&h=180" alt="" />
                  <h3>Resources</h3>
                </div>
                <div className="about">
                  <span>Blogs</span>
                  <span>Blogs</span>
                  <span>News</span>
                  <span>News</span>

                </div>



              </div>
              <div className="bottom">
                <div className="related">
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.L6fFQXQV0dwc3XyvRBD0qgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="desc">
                    <h3>About Us</h3>
                    <span>Know more about our passion to revoluctional online education</span>
                  </div>

                </div>
                <div className="related">
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.L6fFQXQV0dwc3XyvRBD0qgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="desc">
                    <h3>About Us</h3>
                    <span>Know more about our passion to revoluctional online education</span>
                  </div>

                </div>
                <div className="related">
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.L6fFQXQV0dwc3XyvRBD0qgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="desc">
                    <h3>About Us</h3>
                    <span>Know more about our passion to revoluctional online education</span>
                  </div>

                </div>
                <div className="related">
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.L6fFQXQV0dwc3XyvRBD0qgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="desc">
                    <h3>About Us</h3>
                    <span>Know more about our passion to revoluctional online education</span>
                  </div>

                </div>
                <div className="related">
                  <div className="logo">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.L6fFQXQV0dwc3XyvRBD0qgHaHa&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="desc">
                    <h3>About Us</h3>
                    <span>Know more about our passion to revoluctional online education</span>
                  </div>

                </div>
              </div>





            </div>
          </div>
          )}


        </div>


<div className="navItems">
        <div className="store">
          <img src="https://tse4.mm.bing.net/th?id=OIP.u-1dWGTM7biu51ZxKpOIiAHaFL&pid=Api&P=0&h=180" alt="" />
         <a className='color' href="">Store</a>
         
        </div>
        </div>
        <div className="helpline">
          <img src="https://tse4.mm.bing.net/th?id=OIP.D1wlmmSTSZFfAYAseLew5QAAAA&pid=Api&P=0&h=180" alt="" />
          <div className="number">
            <span>Talk to  our experts</span>
            <span>1800-120-456-456</span>

          </div>
        </div>
        <span><button>  Sign in</button></span>
      </div>
    </div>



    </>
  )
}

export default Navbar