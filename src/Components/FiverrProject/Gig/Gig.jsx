import { Slider } from 'infinite-react-carousel'
import React from 'react'
import './Gig.scss'
function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="leftgig">
        < span className="breadcrumbs">Liverr > Graphics & Design ></ span>
          <h className='gigh'>I will create ai generated art for you</h>
          <div className="user">
            <img className='pp' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMGxvZ28lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
              <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />

              <span>5</span>
            </div>

          </div>
          
          <Slider slidesToShow={1} arrowsScroll={1} className='slider'>
            <img src="https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbGQlMjBpbWFnZSUyMHNhbWUlMjBzaXplc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdpbGQlMjBpbWFnZSUyMHNhbWUlMjBzaXplc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1512770322614-8de7b60ca726?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbGQlMjBpbWFnZSUyMHNhbWUlMjBzaXplc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />

          </Slider>
          
          <h2 className='h2  '>About This Gig</h2  >
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          
          <div className="seller">
            <h2 className="h2" >About The Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                  <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                  <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                  <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                  <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />

                  <span>5</span>
                </div>
                <button>Contact Me</button>


              </div>
              
            </div>
               
            
            <div className="box">
              <div className="itemsIn">

                <div className="itemIn">
                  <span className="titleIn">From</span>
                  <span className="descIn">USA</span>
                </div>
                <div className="itemIn">
                  <span className="titleIn">Member since</span>
                  <span className="descIn">Aug 2022</span>
                </div>
                <div className="itemIn">
                  <span className="titleIn">Avg. response time</span>
                  <span className="descIn">4 hours</span>
                </div>
                <div className="itemIn">
                  <span className="titleIn">Last delivery</span>
                  <span className="descIn">1 day</span>
                </div>
                <div className="itemIn">
                  <span className="titleIn">Languages</span>
                  <span className="descIn">English</span>
                </div>

              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="userIn">
                <img className='pp' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className="infoIn">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />

                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="https://tse1.mm.bing.net/th?id=OIP.vOm89HyB8tWXtMXra4gKEwHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110" alt="" />
                <span>Yes</span>
                <img src="https://tse1.mm.bing.net/th?id=OIP.qMg4CLZpSFCo4nmsVfGUZgHaHa&pid=Api&rs=1&c=1&qlt=95&w=122&h=122" alt="" />
                <span>No</span>
              </div>


            </div>
            <hr />
            <div className="item">
              <div className="userIn">
                <img className='pp' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className="infoIn">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />

                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="https://tse1.mm.bing.net/th?id=OIP.vOm89HyB8tWXtMXra4gKEwHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110" alt="" />
                <span>Yes</span>
                <img src="https://tse1.mm.bing.net/th?id=OIP.qMg4CLZpSFCo4nmsVfGUZgHaHa&pid=Api&rs=1&c=1&qlt=95&w=122&h=122" alt="" />
                <span>No</span>
              </div>


            </div>
            <hr />
            <div className="item">
              <div className="userIn">
                <img className='pp' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className="infoIn">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.R3UA_aFix_PQxiIWqmIzygHaHE&pid=Api&P=0&h=180" />

                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="https://tse1.mm.bing.net/th?id=OIP.vOm89HyB8tWXtMXra4gKEwHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110" alt="" />
                <span>Yes</span>
                <img src="https://tse1.mm.bing.net/th?id=OIP.qMg4CLZpSFCo4nmsVfGUZgHaHa&pid=Api&rs=1&c=1&qlt=95&w=122&h=122" alt="" />
                <span>No</span>
              </div>


            </div>
            <hr />
          </div>

        </div>
        <div className="rightgig">
          
          <div className="priceGig">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p> I will create a unique high quality AI generated image based on a
            description that you give me</p>
          <div className="detailsGig">
            <div className="item">
              <img src="https://media.istockphoto.com/id/1193091881/photo/clock-icon-in-trendy-flat-style-isolated-on-grey-background.jpg?s=2048x2048&w=is&k=20&c=R0LlaaN0Sm96Pc93NuGUbfevuqo71k-3Ha4cQe5Um84=" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="https://media.istockphoto.com/id/1289939251/photo/recycle-logo.jpg?s=2048x2048&w=is&k=20&c=LPusOfqEqwMCVIgBitzOqKCM06eXMW9uJ6Dl1HZ33-I=" alt="" />
              <span>3 Rivisions</span>
            </div>


          </div>
          <div className="featuresGig">
            <div className="itemsGig">
              <img className='checkIn' src='https://tse2.mm.bing.net/th?id=OIP.3LLkhwuEM-gDA2sDFDy8QwHaHa&pid=Api&P=0&h=180' alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="itemsGig">
              <img className='checkIn' src='https://tse2.mm.bing.net/th?id=OIP.3LLkhwuEM-gDA2sDFDy8QwHaHa&pid=Api&P=0&h=180' alt="" />
              <span>Prompt writing</span>
            </div>
             <div className="itemsGig">
              <img className='checkIn' src='https://tse2.mm.bing.net/th?id=OIP.3LLkhwuEM-gDA2sDFDy8QwHaHa&pid=Api&P=0&h=180' alt="" />
              <span>Prompt writing</span>
            </div>
             <div className="itemsGig">
              <img className='checkIn' src='https://tse2.mm.bing.net/th?id=OIP.3LLkhwuEM-gDA2sDFDy8QwHaHa&pid=Api&P=0&h=180' alt="" />
              <span>Prompt writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig