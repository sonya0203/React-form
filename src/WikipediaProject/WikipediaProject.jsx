import React, { useState } from 'react'
import './index.css';
import Sachin from "./images/Sachin.jpg"
import Signature from "./images/signature.jpg"
import SachinGround from "./images/SachinGround.jpg"
import SachinGround1 from "./images/SachinGround1.jpg"
import SachinGround2 from "./images/SachinGround2.jpg"
import SachinGround3 from "./images/SachinGround3.jpg"
import SachinGround4 from "./images/SachinGround4.JPG"
import SachinGround5 from "./images/SachinGround5.jpg"
import SachinGround6 from "./images/SachinGround6.jfif"
import SachinGround7 from "./images/SachinGround7.jpg"
import SachinGround8 from "./images/SachinGround8.jpg"
import SachinGround9 from "./images/SachinGround9.jpg"
import SachinGround10 from "./images/SachinGround10.jpg"
import Graph from "./images/Graph.png"
import Sachin1 from "./images/Sachin1.jpg"



function WikipediaProject() {
  const DroppDown = () => {


  }
  return (<>
    <div className='Container'>
      <div className='navBar'>



        <div className='navRight'>
          <input type='checkbox' id='check'></input>
          <label htmlFor='check'>
            <li id='btn'>&#9776;</li>
          </label>
          <div className='sideBar'>
            <li>Main menu</li>
            <li><a href='#'>Main page</a></li>
            <li><a href='#'>Content</a></li>
            <li><a href='#'>Current event</a></li>
            <li><a href='#'>Randon article</a></li>
            <li><a href='#'>About Wikipedia</a></li>
            <li><a href='#'>Contac us</a></li>
            <li><a href='#'>Donate</a></li>
            <li>Contribute</li>
            <li><a href='#'>Help</a></li>
            <li><a href='#'>Learn to edit</a></li>
            <li><a href='#'>community portal</a></li>
            <li><a href='#'>Recent changes</a></li>
            <li><a href='#'>Upload files</a></li>
            <li>Languages</li>

          </div>

          <ul>
            <li><img src="https://en.wikipedia.org/static/images/icons/wikipedia.png" className='logo' alt="logo" /></li>

            <div className='links'><li> <img src="https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg
                           " alt="" className='logo1' /></li>
              <li><img src="https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-tagline-en.svg" alt="" className='logo2' /></li>
            </div>
          </ul>

        </div>
        <div className='navMiddle'>
          <i className='search-logo'>&#128269;</i>
          <input type='text' placeholder='Search Wikipedia' className='input'></input>
          <label className='button-Icon'>Search</label>
          </div>

        
        <div className='navLeft'>
          <div className='left-Links'>
            <a href='#'>Create account</a>
            <a href='#'>Log in</a>
          </div>
        </div>


      </div>
      <section>
        <div className='main-Container'>
          <div className='header'>

            <div className='title'>
              <input type='checkbox' id='check1'></input>
              <label htmlFor='check1'>
                <li id='btn1'>&#9776;</li>
              </label>
              <div className='content_Sidebar'>

                <ul>

                  <li>Contents</li>
                  <hr></hr>
                  <li>(Top)</li>
                  <li><a href='#'></a></li>
                  <li><a href='#'>Content</a></li>
                  <li><a href='#'>Current event</a></li>
                  <li><a href='#'>Randon article</a></li>
                  <li><a href='#'>About Wikipedia</a></li>
                  <li><a href='#'>Contac us</a></li>
                  <li><a href='#'>Donate</a></li>
                  <li>Contribute</li>
                  <li><a href='#'>Help</a></li>
                  <li><a href='#'>Learn to edit</a></li>
                  <li><a href='#'>community portal</a></li>
                  <li><a href='#'>Recent changes</a></li>
                  <li><a href='#'>Upload files</a></li>
                  <li>Languages</li>
                </ul>
              </div>
            </div>
            <div><h1>Sachin Tendulkar</h1></div>
            <div className='main-Context'>

              <input type='checkbox' id='check2'></input>
              <label htmlFor='check2'>
                <li id='btn2'>67 Languages</li>
              </label>
              <div className='content-Language'>
                <div className='search'> <input type='text' placeholder='Search for a language'></input>
                </div>
                <ul>

                  <li>English</li>
                  <li>Mandarin Chinese</li>
                  <li>Hindi</li>
                  <li>Spanish</li>
                  <li>French</li>
                  <li>Modern Standard Arabic</li>
                  <li>Bengali</li>
                  <li>Russian</li>
                  <li>Portuguese</li>
                  <li>Urdu</li>
                  <li>Indonesian</li>
                  <li>German</li>
                  <li>Japanese</li>
                  <li>Nigerian Pidgin</li>
                  <li>Marathi</li>
                  <li>Telugu</li>
                  <li>Turkish</li>
                  <li>Tamil</li>
                  <li>Yue Chinese</li>
                  <li>Vietnamese</li>
                  <li>Tagalog</li>
                  <li>Wu Chinese</li>
                  <li>Korean</li>
                </ul>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className='toolbar1'>
            <ul >
              <li><a href='#'>Read</a></li>
              <li><a href='#'>View source</a></li>
              <li><a href='#'>View history</a></li>
              <li><a href='#'>tools</a></li>
            </ul>
          </div>
          <div className='toolbar'>
            <ul>
              <li><a href='#' >Article </a></li>
              <li> <a href='#'>Talk</a></li>
            </ul>
            </div>
          
          <hr></hr>

          <div className='information'>
            <p>From Wikipedia, the free encyclopedia</p>
          </div>
          <div>"Tendulkar" redirects here. For other people with the same surname, see Tendulkar (surname).</div>


          <table className='table'>
            <caption><div className='name'>Sachin Tendulkar</div></caption>
            <tbody className='border-Img'>
              <table>

                <tbody>


                  <tr>
                    <td colSpan={2}>
                      <th><img src={Sachin} className='top-Image'></img></th>
                      <div className='img-Base'>Tendulkar in 2017</div>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2} className='table-Header'>Personal information</th>
                  </tr>
                  <tr >
                    <th className='table-Label'>Full name</th>
                    <td className='table-Data'>
                      Sachin Ramesh Tendulkar</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Born</th>
                    <td className='table-Data'>
                      24 April 1973 (age 50)</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Nickname</th>
                    <td className='table-Data'>

                      Little Master,Master Blaster</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Height</th>
                    <td className='table-Data'>
                      165 cm (5 ft 5 in)</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Batting</th>
                    <td className='table-Data'>
                      Right-handed</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Bowling</th>
                    <td className='table-Data'>
                      Right-arm leg break
                      Right-arm off break</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Role</th>
                    <td className='table-Data'>
                      Batter</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Relations</th>
                    <td className='table-Data'>

                      Ramesh Tendulkar (father)
                      Arjun Tendulkar (son)</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Website</th>
                    <td className='table-Data'>
                      sachintendulkar.com</td>
                  </tr>
                  <tr>
                    <th colSpan={2} className='table-Header'>International information</th>
                  </tr>
                  <tr>
                    <th className='table-Label'>National side</th>
                    <td className='table-Data'>
                      India (1989–2013)</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Test debut (cap 187)</th>
                    <td className='table-Data'>

                      15 November 1989 v Pakistan</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Last Test</th>
                    <td className='table-Data'>

                      14 November 2013 v West Indies</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>ODI debut (cap 74)</th>
                    <td className='table-Data'>

                      18 December 1989 v Pakistan</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Last ODI</th>
                    <td className='table-Data'>
                      18 March 2012 v Pakistan</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>ODI shirt no.</th>
                    <td className='table-Data'>

                      10 (formerly 99, 33)</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Only T20I (cap 11)</th>
                    <td className='table-Data'>

                      1 December 2006 v South Africa</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>T20I shirt no.</th>
                    <td className='table-Data'>
                      10</td>
                  </tr>

                  <tr>
                    <th colSpan={2} className='table-Header'>Domestic team information</th>
                  </tr>
                  <tr>
                    <th >Years</th>
                    <th > Team</th>

                  </tr>
                  <tr>
                    <th className='table-Label'>1988–2013</th>
                    <td className='table-Data'>
                      Mumbai</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>1992</th>
                    <td className='table-Data'>
                      Yorkshire</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>1994</th>
                    <td className='table-Data'>
                      East Bengal[3]</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>2008–2013</th>
                    <td className='table-Data'>
                      Mumbai Indians</td>
                  </tr>

                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th colSpan={5} className='table-Header'>Career statistics</th>
                  </tr>
                  <tr>
                    <th className='table-Label'>
                      Competition</th>
                    <th className='table-Label'>Test</th>
                    <th className='table-Label'>ODI</th>
                    <th className='table-Label'>FC</th>
                    <th className='table-Label'>LA</th>
                  </tr>

                  <tr>
                    <th className='table-Label'>Matches</th>
                    <td className='table-Data'>200</td>
                    <td className='table-Data'>463</td>
                    <td className='table-Data'>310</td>
                    <td className='table-Data'>551</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Runs scored</th>
                    <td className='table-Data'>15,921</td>
                    <td className='table-Data'>18,426	</td>
                    <td className='table-Data'>25,396</td>
                    <td className='table-Data'>21,999</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Batting average</th>
                    <td className='table-Data'>53.78</td>
                    <td className='table-Data'>44.83</td>
                    <td className='table-Data'>57.84</td>
                    <td className='table-Data'>45.54</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>100s/50s</th>
                    <td className='table-Data'>51/68</td>
                    <td className='table-Data'>49/96</td>
                    <td className='table-Data'>81/116</td>
                    <td className='table-Data'>60/114</td>

                  </tr>
                  <tr>
                    <th className='table-Label'>Top score</th>
                    <td className='table-Data'>248*</td>
                    <td className='table-Data'>	200*</td>
                    <td className='table-Data'>	248*</td>
                    <td className='table-Data'>	200*</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Balls bowled</th>
                    <td className='table-Data'>	4,240</td>
                    <td className='table-Data'>	8,054</td>
                    <td className='table-Data'>7,605</td>
                    <td className='table-Data'>10,230</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Wickets</th>
                    <td className='table-Data'>	46</td>
                    <td className='table-Data'>	154</td>
                    <td className='table-Data'>	71</td>
                    <td className='table-Data'>	201</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Bowling average</th>
                    <td className='table-Data'>54.17</td>
                    <td className='table-Data'>	44.48</td>
                    <td className='table-Data'>	61.74</td>
                    <td className='table-Data'>	42.17</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>5 wickets in innings</th>
                    <td className='table-Data'>0</td>
                    <td className='table-Data'>2</td>
                    <td className='table-Data'>0</td>
                    <td className='table-Data'>2</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>10 wickets in match</th>
                    <td className='table-Data'>0</td>
                    <td className='table-Data'>3</td>
                    <td className='table-Data'>0</td>
                    <td className='table-Data'>1</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Best bowling</th>
                    <td className='table-Data'>3/10</td>
                    <td className='table-Data'>	5/32</td>
                    <td className='table-Data'>3/10</td>
                    <td className='table-Data'>	5/32</td>
                  </tr>
                  <tr>
                    <th className='table-Label'>Catches/stumpings</th>
                    <td className='table-Data'>115/–</td>
                    <td className='table-Data'>		140/–</td>
                    <td className='table-Data'>186/–</td>
                    <td className='table-Data'>		175/–</td>
                  </tr>
                </tbody>
              </table>
              <table className='bottom-Table'>
                <tbody>
                  <tr>
                    <th colSpan={2} className='table-Header'>Medal record</th>
                  </tr>
                  <tr><th colSpan={2} className='header-Color1'>Men's Cricket</th></tr>
                  <tr> <th colSpan={2} className='header-Color1'>Representing  India</th></tr>
                  <tr> <th colSpan={2} className='header-color2'>World Cup</th></tr>
                  <tr>
                    <th className='label-Color1'>Winner</th>
                    <td className='table-Data'><div className='link-Adjust'>2011 India–Bangladesh–Sri Lanka</div></td>
                  </tr>
                  <tr>
                    <th className='label-Color2'>Runner-up</th>
                    <td className='table-Data'> <div className='link-Adjust'>2003 South Africa–Zimbabwe–Kenya</div></td>
                  </tr>
                  <tr>
                    <th colSpan={2} className='header-color2'>Champions Trophy</th>
                  </tr>
                  <tr>
                    <th className='label-Color1'>Winner</th>
                    <td className='data'>2002 Sri Lanka</td>
                  </tr>
                  <tr>
                    <th className='label-Color2'>Runner-up</th>
                    <td className='data'>2000 Kenya</td>
                  </tr>


                </tbody>
              </table>
              <table></table>
              <tr>
                <div className='bottom-Text'>
                  <ul>
                    <li>Source:</li>
                    <li><a href='#'>ESPNcricinfo</a></li>
                    <li>15 November 2013</li>
                  </ul>
                </div>
              </tr>
              <tr>

                <div className='member'>Member of Parliament, Rajya Sabha</div>
              </tr>
              <table>
                <tbody>

                  <tr>
                    <th colSpan={2} className='sub-member'>In office</th>
                  </tr>
                  <tr>
                    <th colSpan={2} className='sub-member'>27 April 2012 – 26 April 2018</th>
                  </tr>
                  <tr>
                    <th className='table-Label'>Constituency</th>
                    <td className='table-Data'>	Nominated</td>
                  </tr>
                  <tr>
                    <th className='table-label'>Signature</th>
                    <td><img src={Signature} className='bottom-Image'></img></td>
                  </tr>
                </tbody>
              </table>

            </tbody>
          </table>
          <p className='para'>Sachin Ramesh Tendulkar, (/ˌsʌtʃɪn tɛnˈduːlkər/ ⓘ; pronounced [sətɕin teːɳɖulkəɾ]; born 24 April 1973) is an Indian former international cricketer who captained the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket.[4] Hailed as the world's most prolific batsman of all time, he is the all-time highest run-scorer in both ODI and Test cricket with more than 18,000 runs and 15,000 runs, respectively.[5] He also holds the record for receiving the most player of the match awards in international cricket.[6] Tendulkar was a Member of Parliament, Rajya Sabha by nomination from 2012 to 2018.[7][8]</p>
          <p className='para'>Tendulkar took up cricket at the age of eleven, made his Test match debut on 15 November 1989 against Pakistan in Karachi at the age of sixteen, and went on to represent Mumbai domestically and India internationally for over 24 years.[9] In 2002, halfway through his career, Wisden ranked him the second-greatest Test batsman of all time, behind Don Bradman, and the second-greatest ODI batsman of all time, behind Viv Richards.[10] The same year, Tendulkar was a part of the team that was one of the joint-winners of the 2002 ICC Champions Trophy. Later in his career, Tendulkar was part of the Indian team that won the 2011 Cricket World Cup, his first win in six World Cup appearances for India.[11] He had previously been named "Player of the Tournament" at the 2003 World Cup.</p>
          <p className='para'>Tendulkar has received several awards from the government of India: the Arjuna Award (1994), the Khel Ratna Award (1997), the Padma Shri (1998), and the Padma Vibhushan (2008).[12][13] After Tendulkar played his last match in November 2013, the Prime Minister's Office announced the decision to award him the Bharat Ratna, India's highest civilian award.[14][15] He was the first sportsperson to receive the reward and, as of 2023, is the youngest recipient.[16][17][18] In 2010, Time included Tendulkar in its annual list of the most influential people in the world.[19] Tendulkar was awarded the Sir Garfield Sobers Trophy for cricketer of the year at the 2010 International Cricket Council (ICC) Awards.[20]</p>
          <p className='para'>Having retired from ODI cricket in 2012,[21][22] he retired from all forms of cricket in November 2013 after playing his 200th Test match.[23] Tendulkar played 664 international cricket matches in total, scoring 34,357 runs.[24] In 2013, Tendulkar was included in an all-time Test World XI to mark the 150th anniversary of Wisden Cricketers' Almanack, and he was the only specialist batsman of the post–World War II era, along with Viv Richards, to get featured in the team.[25] In 2019, he was inducted into the ICC Cricket Hall of Fame.[26] On 24 April 2023, the Sydney Cricket Ground unveiled a set of gates named after Tendulkar and Brian Lara on the occasion of Tendulkar's 50th birthday and the 30th anniversary of Lara's inning of 277 at the ground.[27][28][29]</p>
          <h1 className='h1'>Early life and background</h1>
          <hr className='hr'></hr>
          <p className='para'>Tendulkar was born at Nirmal Nursing Home in Dadar, Bombay on 24 April 1973[30][31] to a Maharastrian family.[32] His father, Ramesh Tendulkar, was a Marathi-language novelist and poet while his mother, Rajni, worked in the insurance industry.[33] Tendulkar's father named him after his favourite music director, Sachin Dev Burman.[34] Tendulkar has three older siblings: two half-brothers Nitin and Ajit, and a half-sister Savita. They were his father's children by his first wife, who died after the birth of her third child.[35][36] His brother Ajit played in Bombay's Kanga Cricket League.[37]</p>
          <p className='para'>Tendulkar spent his formative years in the Sahitya Sahawas Cooperative Housing Society in Bandra (East). As a young boy, Tendulkar was considered a bully, and he often picked fights with new children in his school.[38]</p>
          <p className='para'>As a child, Tendulkar was interested in both tennis and cricket. He particularly idolised American player John McEnroe, and emulated his hero by growing his hair long at the age of 7 or 8 years. At this time, Tendulkar also regularly wore tennis wristbands and headbands and carried a tennis racquet with him as a sign of his love for tennis.[39][40][41]</p>
          <p className='para'>To help curb his bullying tendencies, his elder brother Ajit introduced Tendulkar to cricket in 1984. Ajit introduced him to cricket coach Ramakant Achrekar at Shivaji Park in Dadar. At their first meeting, Tendulkar did not play well. Ajit told Achrekar that he was feeling self-conscious due to the coach observing him, and was not displaying his natural game. Ajit requested the coach to give him another chance at playing, but watch while hiding behind a tree. This time, Tendulkar, apparently unobserved, played much better and was accepted at Achrekar's academy.[42][better source needed]</p>
          <p className='para'>Achrekar was impressed with Tendulkar's talent and advised him to shift his schooling[citation needed] to Sharadashram Vidyamandir School,[30] a school in Dadar that had produced many notable cricketers. He made his debut as a cricketer for Sharadashram in late 1984.[43] Prior to this, Tendulkar had attended the Indian Education Society's New English School in Bandra (East).[43] He was also coached under the guidance of Achrekar at Shivaji Park in the mornings and evenings.[44] Tendulkar would practice for hours; if he became exhausted, Achrekar would put a one-rupee coin on the top of the stumps, and the bowler who dismissed Tendulkar would get the coin. If Tendulkar completed the session without getting dismissed, the coach would give him the coin. Tendulkar considers the 13 coins he won among his most prized possessions.[45] While he was training at Shivaji Park, he moved in with his aunt and uncle, who lived near the park.[43]</p>
          <p className='para'>Besides school cricket, Tendulkar also played club cricket. In 1984, at age 11, he debuted in the Kanga Cricket League while playing for the John Bright Cricket Club.[43][46] Beginning in 1988, he played for the Cricket Club of India.[46][47]</p>
          <p className='para'>In 1987, at the age of 14, he attended the MRF Pace Foundation in Madras (now Chennai) to train as a fast bowler, but the trainer, Australian fast bowler Dennis Lillee, was unimpressed and suggested that Tendulkar focus on his batting instead.[48] On 20 January 1987, he was a substitute for Imran Khan's side in an exhibition match at Brabourne Stadium in Bombay.[49] A couple of months later, former Indian batsman Sunil Gavaskar gave Tendulkar a pair of his own lightweight pads and told him to not get disheartened for not receiving the Bombay Cricket Association's Best Junior Cricketer Award. Of this experience, Tendulkar later said, "It was the greatest source of encouragement for me".[50][51] Tendulkar served as a ball boy in the 1987 Cricket World Cup when India played against England in the semifinal in Bombay.[52][53]</p>
          text-Side
          <p className='para'>In 1988, while playing for Sharadashram, Tendulkar and Vinod Kambli batted in an unbroken 664-run partnership in a Lord Harris Shield inter-school game against St. Xavier's High School. Tendulkar scored 326 (not out) in that match and scored over 1,000 runs in the tournament.[54] This was a record partnership in any form of cricket until 2006, when it was broken by two junior cricketers in Hyderabad, India.[55]</p>
          <h1 className='h1'>Early career</h1>
          <hr className='hr'></hr>
          <p className='para'>On 14 November 1987, at age 14, Tendulkar was selected to represent Bombay in the Ranji Trophy for the 1987–88 season, but he was not selected for the final eleven in any of the matches, though he was often used as a substitute fielder.[43] A year later, on 11 December 1988, aged 15 years and 232 days, Tendulkar made his debut for Bombay against Gujarat at Wankhede Stadium and scored 100 not out in that match, making him the youngest Indian to score a century on debut in first-class cricket.[56] He was selected to play for the team by Bombay captain Dilip Vengsarkar after Vengsarkar watched him play Kapil Dev in Wankhede Stadium's cricket practice nets,[30] where the Indian team had come to play against the touring New Zealand team. He followed this by scoring a century in his first Deodhar and Duleep Trophies, which are also Indian domestic tournaments.[57]</p>
          <p className='para'>Tendulkar finished the 1988–89 Ranji Trophy season as Bombay's highest run-scorer. He scored 583 runs at an average of 67.77, and was the eighth-highest run-scorer overall.[58] In both 1988 and 1989, Tendulkar was picked for a young Indian team to tour England under the Star Cricket Club banner.[59] In the 1990–91 Ranji Trophy final, which Bombay narrowly lost to Haryana, Tendulkar's 96 from 75 balls was key to giving Bombay a chance of victory as it attempted to chase 355 from only 70 overs on the final day.[60]</p>
          <p className='para'>At the start of the 1989–90 season, while playing for Rest of India, Tendulkar scored an unbeaten century in an Irani Trophy match against Delhi.[61</p>
          <p className='para'>In the final of 1995 Ranji trophy, Tendulkar, captaining Bombay, scored 140 and 139 versus Punjab.[62]</p>
          <p className='para'>In the 1995–96 Irani Cup, he captained Mumbai against Rest of India.[62] His first double century (204*) was for Mumbai while playing against the visiting Australian team at the Brabourne Stadium in 1998.[30][63] He is the only player to score a century on debut in all three of his domestic first-class tournaments (the Ranji, Irani, and Duleep Trophies).[64] Another double century was an innings of 233* against Tamil Nadu in the semi-finals of the 2000 Ranji Trophy, which he regards as one of the best innings of his career.[65][66][67]</p>
          <p className='para'>In total, Tendulkar was part of 5 Ranji trophy finals, in which Mumbai won 4.[62]</p>
          <h1 className='p'>County cricket</h1>
          <p className='para'>In 1992, at the age of 19, Tendulkar became the first overseas-born player to represent Yorkshire, which prior to Tendulkar joining the team, never selected players, even UK-based, from outside Yorkshire.[30][Note 1] Selected for Yorkshire as a replacement for the injured Australian fast bowler Craig McDermott, Tendulkar played 16 first-class matches for the team and scored 1,070 runs at an average of 46.52.[68]</p>
          <h1 className='h1'>Career</h1>
          <hr className='hr'></hr>
          <p className='para'>Further information: List of international cricket centuries by Sachin Tendulkar</p>
          <p className='para'>Raj Singh Dungarpur is credited for the selection of Tendulkar for the Indian tour of Pakistan in late 1989,[69] after one first class season.[70] The Indian selection committee had shown interest in selecting Tendulkar for the tour of the West Indies held earlier that year, but eventually did not select him, as they did not want him to be exposed to the dominant fast bowlers of the West Indies so early in his career.[citation needed]</p>
          <p className='para'>Tendulkar was the youngest player to debut for India in Tests at the age of 16 years and 205 days, and also the youngest player to debut for India in ODI at the age of 16 years and 238 days.[71][72] Tendulkar made his Test debut against Pakistan in Karachi in November 1989 aged 16 years and 205 days. He scored 15 runs, being bowled by Waqar Younis, who also made his debut in that match. He was noted for how he handled numerous blows to his body at the hands of the Pakistani pace attack.[73] In the fourth and final Test match in Sialkot, he was hit on the nose by a bouncer bowled by Younis, but he declined medical assistance and continued to bat even as he his nose gushed blood.[74] In a 20-over exhibition game in Peshawar, held in parallel with the bilateral series, Tendulkar made 53 runs off 18 balls, including an over in which he scored 27 runs bowled by leg-spinner Abdul Qadir.[75] This was later called "one of the best innings I have seen" by the then Indian captain Krishnamachari Srikkanth.[76] In all, Tendulkar scored 215 runs at an average of 35.83 in the Test series, and was dismissed without scoring a run in the only One Day International (ODI) he played.[77][78]</p>
          <p className='para'>The series was followed by a tour of New Zealand in which he scored 117 runs at an average of 29.25 in Tests.[79] He was dismissed without scoring in one of the two ODI games he played, and scored 36 in the other.[80] On a 1990 tour to England, on 14 August, he became the second-youngest cricketer to score a Test century as he made 119 not out in the second Test at Old Trafford in Manchester.[74] Wisden described his innings as "a disciplined display of immense maturity" and also wrote, "He looked the embodiment of India's famous opener, Gavaskar, and indeed was wearing a pair of his pads. While he displayed a full repertoire of strokes in compiling his maiden Test hundred, most remarkable were his off-side shots from the back foot. Though only 5ft 5in tall, he was still able to control without difficulty short deliveries from the English pacemen".[81]</p>
          <p className='para'>Tendulkar's reputation grew during the 1991–92 tour of Australia held before the 1992 Cricket World Cup. During the tour, he scored an unbeaten 148 in the third Test at Sydney, making him the youngest batsman to score a century in Australia. He then scored 114 on a fast, bouncing pitch in the final Test at Perth against a pace attack from Merv Hughes, Bruce Reid, and Craig McDermott. Hughes commented to Allan Border at the time that "This little prick's going to get more runs than you, AB."[82]</p>
          <p className='p'>Rise through the ranks</p>
          <p className='p1'>1994–1996: ODI matches</p>
          <p className='para'>Tendulkar opened the batting at Auckland against New Zealand in 1994, making 82 runs off 49 balls.[83] He scored his first ODI century on 9 September 1994 against Australia in Sri Lanka at Colombo.[84][85] He competed in 78 ODIs before scoring his first century.[citation needed]</p>
          <figure className='figure-left'>
            <img src={SachinGround} className='SachinGround'></img>
            <figcaption><p className='img-SachinGround'>Tendulkar waits at the bowler's end.</p> </figcaption>
          </figure>
          <p className='text-Side'>Tendulkar's rise continued when he was the leading run scorer at the 1996 World Cup, scoring two centuries.[86] He was the only Indian batsman to perform well in the semi-final against Sri Lanka.[citation needed] Tendulkar fell amid a batting collapse[citation needed] and the match referee, Clive Lloyd, awarded Sri Lanka the match after the crowd began rioting and throwing litter onto the field.[87]</p>
          <p className='text-Side'>After the World Cup, in the same year against Pakistan at Sharjah, Indian captain Mohammed Azharuddin was going through a lean patch. Tendulkar and Navjot Singh Sidhu both made centuries to set a then record partnership for the second wicket. After getting out, Tendulkar found Azharuddin in two minds about whether he should bat.[citation needed] Tendulkar convinced Azharuddin to bat and Azharuddin subsequently unleashed 24 runs off one over.[88] India went on to win that match. It enabled India to post a score in excess of 300 runs for the first time in an ODI.[89]</p>
          

          <p className='p1'>1998: Australian competition</p>
          <p className='para'>Tendulkar scored 143 (131) runs in Sharjah against the Australian team in the 1998 Coca-Cola cup, including 5 sixes in an innings against Shane Warne, Damien Fleming and Michael Kasprowicz. The inning is known as the "Desert Storm" because it was interrupted by a sand storm. In 2020, a poll from the ICC declared it Tendulkar's best ODI innings.[90]</p>
          <p className='para'>In early 1998, while playing in an Australian tour of India, Tendulkar scored three consecutive centuries. The focus of the tour was the clash between Tendulkar and spinner Shane Warne, both at the peak of their careers.[91] In the lead-up to the series, Tendulkar simulated scenarios in the nets with Laxman Sivaramakrishnan.[92] In their tour opener, Australia faced Mumbai at the Brabourne Stadium in a three-day first class match.[93] Tendulkar scored an unbeaten 204 runs as Shane Warne conceded 111 runs in 16 overs and Australia lost the match within three days.[94][95] He also had a role with the ball in the five-match ODI series in India following the Tests, including a five wicket haul in an ODI in Kochi. Set 310 runs to win, Australia were cruising at 203 for 3 in the 31st over when Tendulkar turned the match for India, taking the wickets of Michael Bevan, Steve Waugh, Darren Lehmann, Tom Moody and Damien Martyn for 32 runs in 10 overs.[96] The Test match success was followed by two consecutive centuries in April 1998 in a Triangular cricket tournament in Sharjah—the first in a must-win game to take India to the finals and then again in the finals, both against Australia. These twin knocks were also known as the Desert Storm innings.[97] Following the series, Warne ruefully joked that he was having nightmares about his Indian nemesis.[98]</p>
          <p className='para'>Tendulkar's contribution in the ICC 1998 quarterfinal at Dhaka paved the way for India's entry into the semifinals, when he took four Australian wickets after scoring 141 runs in 128 balls.[99]</p>
          <p className='p1'>1999: Asian Test Championship, Test matches, and the World Cup</p>
          <p className='para'>The inaugural Asian Test Championship took place in February and March 1999, involving India, Pakistan, and Sri Lanka.[100] Around 100,000 attended the first four days of the tournament, breaking a 63-year-old record for aggregate Test attendance record.[101] In the first match, between India and Pakistan at Eden Gardens, Tendulkar was dismissed from the match after colliding with Pakistan bowler Shoaib Akhtar. The crowd reacted by throwing objects at Akhtar, and the players were taken off the field. The match resumed after Tendulkar and the president of the ICC appealed to the crowd; however, further rioting meant that the match was finished in front of a crowd of 200 people.[102] Tendulkar scored his 19th Test century in the second Test and the match resulted in a draw with Sri Lanka.[103] India did not progress to the final, which was won by Pakistan, and refused to participate in the 2001–02 Asian Test Championship due to increasing political tensions between India and Pakistan.[104]</p>
          <p className='para'>In a Test match against Pakistan at Chepauk in 1999, the first of a two-Test series, Tendulkar scored 136 runs; India lost the match by 12 runs.[105]</p>
          <p className='para'>Tendulkar's father, Ramesh Tendulkar, died during the 1999 Cricket World Cup. Tendulkar flew back to India to attend the final rituals of his father, missing the match against Zimbabwe.[106] Tendulkar returned to the World Cup, scoring a century (140 not out of 101 balls) in his very next match against Kenya in Bristol. He dedicated the century to his father.[107]</p>
          <p className='p1'>Captaincy of national team</p>


          <p className='para'>   Tendulkar's two tenures as captain of the Indian cricket team were not very successful. Tendulkar became captain in 1996, but by 1997 the team was performing poorly. Discussing Tendulkar's first term as captain, Azharuddin was credited with saying, "He won't win! It's not in the small one's destiny!" (Hindi: "Nahin jeetega! Chote ki naseeb main jeet nahin hai!")[110][111]        </p>
          <table className='table2'>
            <caption >Tendulkar's record as captain</caption>

            <tbody>
              <tr>
                <th> </th>
                <th>	Matches</th>
                <th>		Won</th>
                <th>	Lost</th>
                <th>	Drawn</th>
                <th>	Tied</th>
                <th>		No result</th>
                <th>		Win %</th>

              </tr>
              <tr>

                <td>Test</td>
                <td>25</td>
                <td>4</td>
                <td>9</td>
                <td>12</td>
                <td>0</td>
                <td>-</td>
                <td>	16%</td>

              </tr>
              <tr>

                <td>ODI</td>
                <td>73</td>
                <td>	23</td>
                <td>	43</td>
                <td>-</td>
                <td>2</td>
                <td>6</td>
                <td>	31.50%</td>
              </tr>
            </tbody>
          </table>


          <p className='para'>Tendulkar, succeeding Azharuddin as captain for his second term, led India on a tour of Australia, where the visitors were beaten 3–0 by the newly crowned world champions.[when?][112] Tendulkar won the player of the series award,[112] as well as player of the match in one of the games.[113] After another Test series defeat, this time by a 0–2 margin at home against South Africa, Tendulkar resigned, and Sourav Ganguly took over as captain in 2000.[114][115]</p>
          <p className='p4'>South Africa match fixing</p>
          <p className='p3'>Further information: Mohammed Azharuddin and South Africa cricket match fixing</p>
          <p className='p3'>See also: Chandrachud Commission</p>
          <p className='para'>In 2000, members of the South African national team attempted to fix matches during their visit to India. After the incident, Tendulkar and three other senior cricketers worked to ensure that players "whose performance and conduct was dubious were never picked for the Indian squad again".[116]</p>
          <p className='p4'>Role in 2007 captaincy change</p>
          <p className='para'>During the Indian team's 2007 tour of England, the desire of Rahul Dravid to resign from the captaincy became known. Then Board of Control for Cricket in India (BCCI) President Sharad Pawar offered the captaincy to Tendulkar, who instead recommended Mahendra Singh Dhoni. Pawar later revealed this conversation, crediting Tendulkar for suggesting Dhoni, who since achieved much success as captain.[117]</p>
          <p className='p1'>Continued rise</p>
          <p className='p4'>Role in 2007 captaincy change</p>
          <p className='para'>During the Indian team's 2007 tour of England, the desire of Rahul Dravid to resign from the captaincy became known. Then Board of Control for Cricket in India (BCCI) President Sharad Pawar offered the captaincy to Tendulkar, who instead recommended Mahendra Singh Dhoni. Pawar later revealed this conversation, crediting Tendulkar for suggesting Dhoni, who since achieved much success as captain.[117]</p>
          <p className='p1'>Continued rise</p>
          <p className='p4'>2001–2002: Mike Denness incident, Kolkata Test, and breaking Bradman's record</p>
          <p className='para'>During India's 2001 tour of South Africa, in the second Test match, referee Mike Denness fined four Indian players for excessive appealing, and fined the Indian captain Sourav Ganguly for not controlling his team.[118] Denness suspended Tendulkar from one match for alleged ball tampering. Television cameras captured images that suggested Tendulkar may have been involved in cleaning the seam of the cricket ball.[119][120] The incident escalated to include sports journalists accusing Denness of racism,[121] and led to Denness being barred from entering the venue of the third Test match. The ICC revoked the status of the match as a Test as the teams rejected the appointed referee.[122] The charges against Tendulkar triggered a massive backlash from the Indian public.[123]</p>
          <p className='para'>On the final day of the Kolkata Test against Australia in 2001, Tendulkar took three wickets, including the key wickets of Matthew Hayden and Adam Gilchrist, who were centurions in the previous Test. His three wickets haul helped India win the match.[124] In the five-match ODI series that followed, he took his 100th wicket in ODIs, claiming the wicket of then Australian captain Steve Waugh in the final match at the Fatorda Stadium in Goa.[125]</p>
          <p className='para'>In the 2002 series in the West Indies, Tendulkar started well, scoring 79 in the first Test. In the second Test at Port of Spain, Sachin Tendulkar scored 117 in the first innings, his 29th Test century in his 93rd Test match, to equal Donald Bradman's record of 29 Test hundreds. He was gifted a Ferrari 360 Modena by Fiat through Michael Schumacher for achieving this feat.[126][127][128]</p>
          <p className='para'>Then, in an unprecedented sequence, he scored just 0, 0, 8, and 0 in the next four innings.[129] He returned to form in the last Test scoring 41 and 86, one half century. However, India lost the series.[130] In this period, in the third Test match against England in August 2002, Tendulkar scored his 30th Test century to surpass Bradman's haul, in his 99th Test match.[131][132]</p>
          <p className='p4'>2003: Cricket World Cup</p>
          <p className='para'>Tendulkar made 673 runs in 11 matches in the 2003 Cricket World Cup,[133] helping India reach the final. While Australia won, Tendulkar was given the Man of the Tournament award.[134][135]</p>
          <p className='para'>He continued to score heavily in ODI cricket that year, with two hundreds in a tri-series involving New Zealand and Australia.[136][137] As a part-time bowler, he dismissed an exhausted centurion, Matthew Hayden, in the tri-series final.[138]</p>
          <p className='p4'>2003–2004: tour of Australia</p>
          <p className='para'>The drawn series as India toured Australia in 2003–04 saw Tendulkar making his mark in the last Test of the series, scoring 241 not out from 436 balls with 33 fours at a strike rate of 55.27 in Sydney, putting India in a virtually unbeatable position. He spent 613 minutes at the crease during the innings. He followed this up with an unbeaten 60 in the second innings of the Test.[139] Prior to this Test match, he had had an unusually horrible run of form, failing in all six innings in the preceding three Tests.[citation needed] It was no aberration that 2003 was his worst year in Test cricket, with an average of 17.00 and just one fifty.[140]</p>
          <p className='para'>Tendulkar scored an unbeaten 194 against Pakistan at Multan in the following series. Indian captain Rahul Dravid declared before Tendulkar reached 200; had he done so it would have been the fourth time he had passed the landmark in Tests.[141] Tendulkar said that he was disappointed and that the declaration had taken him by surprise.[142] Many former cricketers commented that Dravid's declaration was in bad taste.[143][144] After the match, which India won, Dravid said that the matter had been discussed internally and put to rest.[145]</p>
          <p className='para'>A tennis elbow injury then took its toll on Tendulkar, leaving him out of the side for most of the year, coming back only for the last two Tests when Australia toured India in 2004.[146][147] He played a part in India's victory in Mumbai in that series with a fast 55, though Australia took the series 2–1.</p>
          <p className='p1'>Performance dip</p>
          <p className='p4'>2005–2006: dry spell</p>
          <p className='para'>On 10 December 2005 at Feroz Shah Kotla, Tendulkar scored his record-breaking 35th Test century, against the Sri Lankans. After this, Tendulkar endured the longest[needs update] spell of his career without a Test century: 17 innings elapsed before he scored 101 against Bangladesh in May 2007.[149] Tendulkar scored his 39th ODI hundred on 6 February 2006 in a match against Pakistan.[150] He followed with a 42 in the second One-Day International against Pakistan on 11 February 2006,[151] and then a 95 in hostile, seaming conditions on 13 February 2006 in Lahore, which set up an Indian victory.[152] On 19 March 2006, after being dismissed for only one run against England in the first innings of the third Test in his home ground, Wankhede, Tendulkar was booed off the ground by a section of the crowd.[153] Tendulkar ended the three-Test series without a half-century to his credit, and the need for a shoulder operation raised more questions about his longevity.[citation needed]</p>
          <p className='para'>Tendulkar's comeback came in the DLF cup in Malaysia and he was the only Indian batsman to shine. In his comeback match, against West Indies on 14 September 2006, Tendulkar responded to his critics who believed that his career was inexorably sliding with his 40th ODI century.[154] Though he scored 141 not out, West Indies won the rain-affected match by the D/L method.[155]</p>
          <p className='p4'>2007 Cricket World Cup</p>
          <p className='p3'>Further information: India at the Cricket World Cup § India at the 2007 World Cup</p>
          <p className='para'>During the preparation for the 2007 World Cup, Tendulkar's attitude was criticised by Indian coach Greg Chappell. Chappell reportedly felt that Tendulkar would be more useful down the order, while Tendulkar felt that he would be better off opening the innings, the role he had played for most of his career.[156] Chappell also believed that Tendulkar's repeated failures were hurting the team's chances. In a rare show of emotion, Tendulkar hit out at the comments attributed to Chappell by pointing out that no coach had ever suggested his attitude towards cricket was incorrect. On 7 April 2007, the Board of Control for Cricket in India issued a notice to Tendulkar asking for an explanation for his comments made to the media.[157] Chappell subsequently resigned as coach but said that this affair had no bearing on his decision and that he and Tendulkar were on good terms.[156]</p>
          <p className='para'>At the World Cup in the West Indies, Tendulkar and the Indian cricket team led by Rahul Dravid had a dismal campaign. Tendulkar, who was pushed to bat lower down the order had scores of 7 against Bangladesh, 57 not out against Bermuda and 0 against Sri Lanka.[158][159][160] As a result, former Australian captain Ian Chappell, brother of Greg, called for Tendulkar to retire in his newspaper column.[161]</p>
          <p className='p'>Return to old form and consistency</p>
          <p className='para'>After the loss against Bangladesh and Sri Lanka, Tendulkar suffered depression and thought to retire from cricket, but Viv Richards and Ajit Tendulkar stopped him. According to Tendulkar, 23 March 2007, the loss against Bangladesh is one of the worst days of his cricketing career.[162]</p>
          <p className='p3'>See also: List of batsmen who have scored over 10000 Test cricket runs and List of batsmen who have scored over 10000 One Day International cricket runs</p>
          <p className='p4'>2007</p>
          <p className='para'>In 2007, in a Test series during India's tour of Bangladesh, Tendulkar returned to his opening slot and was chosen as the Man of the Series.[163] He continued by scoring 99 and 93 in the first two matches of the Future Cup against South Africa. During the second match, he also became the first to score 15,000 runs in ODIs.[164] He was the leading run scorer and was adjudged the Man of the Series.[165][166]</p>

          <p className='para'>On the second day of the Nottingham Test on 28 July 2007, Tendulkar became the third cricketer to complete 11,000 Test runs.[167] In the subsequent one-day series against England, Tendulkar was the leading run scorer from India[168] with an average of 53.42. In the ODI Series against Australia in October 2007 Tendulkar was the leading Indian run scorer with 278 runs.[169]</p>
          <p className='para'>Tendulkar was dismissed five times in 2007 between 90 and 100, including three times at 99, leading some to suggestions that he struggles to cope with nervousness in this phase of his innings.[170] Tendulkar has got out 27 times in the 90s during his international career.[171] In a five-ODI series against Pakistan, he was caught by Kamran Akmal off the bowling of Umar Gul for 99 in the second match at Mohali,[172] and in the fourth match of that series, he got out in the 90s for a second time, scoring 97 before dragging a delivery from Gul on to his stumps.[173]</p>
          <p className='p4'>2007–08: Tour of Australia</p>
          <p className='p3'>Further information: Indian cricket team in Australia in 2007–08 § Controversies; and Second Test, 2007–08 Border–Gavaskar Trophy</p>

          <figure className='figure-right'>
            <img src={SachinGround1} className='SachinGround1'></img>
            <figcaption className='figcaption'> <p className='img-SachinGround'>Tendulkar, upon reaching his 38th Test century against Australia in the 2nd Test at the SCG in 2008, where he finished not out on 154</p></figcaption>
          </figure>
          <p className='para'>In 2008 India's tour of Australia, at a Sydney Test match, Australian Andrew Symonds accused Indian Harbhajan Singh of using racist terminology by calling him a monkey. This matter was dubbed "Monkeygate" by the media.[174] Singh was suspended by the match ICC referee after hearing. Sachin Tendulkar was standing on non-striker's end, at that moment, when Symonds claimed racist comments happened. In the hearing, Tendulkar said to the ICC match referee Mike Procter, that he could not say what exactly Singh said to Symonds, but in the next hearing, Tendulkar changed his stance and said that Symonds had not said "monkey" but "Teri Maa Ki..." ('Your mother's...'). In his autobiography Playing It My Way, Tendulkar wrote, "Teri Maa Ki..., It is an expression we often use in North India to vent our anger and to me it all part of the game".[full citation needed] The matter became big in following days and nearly led to the cancellation of this tour.[175] Referee suspended Singh for 3 Test but after appeal and Tendulkar's statement in hearing the suspension was overturned. Andrew Symonds later said in Monkeygate- Ten years on, a documentary that was based on this matter, "When I began to play for Mumbai Indians, IPL franchise, once Harbhajan Singh came to me and apologised." Symonds said in the documentary, "We go to a very wealthy man's place for a barbecue, drinks, and dinner one night, and the whole team's there, and he had guests there, and Harbhajan said 'mate, can I speak to you for a minute out in the garden out the front?' He goes, 'look, I've got to say sorry to you for what I did to you in Sydney. I apologise."[176][177][178][179][180][175] The Herald Sun quoted, Tendulkar is still not "forgiven" by some Aussie players for changing his account on Monkeygate, dubbed Tendulkar as Indian "demigod".[181][182]</p>
          <p className='para'>In the Border-Gavaskar Trophy, 2007–08, Tendulkar showed exceptional form, becoming the leading run scorer with "493 runs in four Tests, despite consistently failing in the second innings.[183] Tendulkar scored 62 runs in the first innings of the first Test at the MCG in Melbourne, but could not prevent a heavy 337-run win for Australia.[184] In the controversial New Years' Test at Sydney, Tendulkar scored an unbeaten 154, even though India lost the Test. This was his third century at the SCG and his 38th Test century overall, earning him an average of 326 at the ground at the time of completing the innings.[185][186] In the third Test at the WACA cricket ground in Perth, Tendulkar was instrumental in India's first innings score of 330, scoring a well-compiled 71. India went on to record a historic triumph at the WACA, ending Australia's run of 16 consecutive wins.[187] In the fourth Test at the Adelaide Oval, which ended in a draw, he scored 153 in the first innings, being involved in a crucial 126-run stand with V.V.S. Laxman for the fifth wicket to lead India to a score of 282 for 5 from 156 for 4.[188] He secured the Man of the Match award.[189]</p>
          <p className='para'>In the One-Day International Commonwealth Bank Tri-Series involving India, Sri Lanka and Australia, Tendulkar became the only batsman to complete 16,000 runs in ODIs.[190] He achieved this feat against Sri Lanka on 5 February 2008 at the Gabba in Brisbane. He started the series wth scores of 10, 35, 44 and 32.[191] His form dipped a bit in the middle of the tournament,[original research?] but Tendulkar came back strongly in India's must-win game against Sri Lanka at the Bellerive Oval in Hobart, scoring 63 off 54 balls.[192] He finished the series with a match winning 117 not out off 120 balls in the first final,[193] and 91 runs in the second final.[194] Both the knocks were nominated to be the ODI Batting Performance of the year by ESPNcricinfo</p>
          <p className='p4'>2008: Return to Tests and breaking Brian Lara's record</p>
          <p className='para'>South Africa toured in March and April 2008 for a three-Test series. Tendulkar scored a five-ball duck in his only innings of the series;[196] he sustained a groin strain in the match and as a result was forced not only to miss the second and third Tests, but also the tri-series involving Bangladesh, the 2008 Asia Cup, and the first half of the inaugural season of the IPL.[197]</p>
          <p className='para'>Before the Indian cricket team's tour of Sri Lanka in July 2008, Tendulkar needed 177 runs to go past Brian Lara's record of Test 11,953 runs. However, he failed in all six innings, scoring a total of 95 runs. India lost the series and his average of 15.83 was his worst in a Test series with at least three matches.[198]</p>
          <p className='para'>In the following ODI series against Sri Lanka, Tendulkar was sidelined due to injury.[199] However, during the following Australia tour of India, he returned to fitness and form, scoring 13 and 49 in the first Test[200] before making 88 in the first innings of the second Test, breaking the record for most Test runs held by Brian Lara. He also reached the 12,000-run mark when he was on 61.[201][202] He described the achievement as the biggest in 19 years of his career on the day he achieved the record.[203] He made a fifty in the third Test[204] and 109 in the fourth, as India won the series 2–0 and regained the Border-Gavaskar Trophy.[205]</p>
          <p className='p4'>2008: England Series</p>
          <p className='para'>Tendulkar was again out of the first three ODIs of a seven-match ODI series at home against England due to an injury, but he made 11 in the fourth ODI[206] and 50 in the fifth,[207] before the series was called off due to the 2008 Mumbai terrorist attacks, the scoreline being 5–0 to India</p>
          <p className='para'>England returned for a two-match Test series in December 2008, and the first Test, which was originally planned to be held in Mumbai, was shifted to Chennai following the terror attacks.[208][209] Chasing 387 for victory in that match, Tendulkar scored 103 not out and shared a 163-run unbroken fifth wicket partnership with Yuvraj Singh.[210] This was his third century in the fourth innings of a Test match, and the first which resulted in a win.[211] He dedicated this century to the victims of the Mumbai terror attacks.[212] The knock was nominated to be one of the Test Batting Performance of the year by ESPNcricinfo.[213] Tendulkar scored poorly in the second Test at Mohali, which ended in a draw. India won the series 1–0</p>
          < p className='p4'>2009–2010: Consolidation and ODI record</p>
          <p className='p3'>See also: List of highest individual scores in ODIs</p>
          <p className='para'>In early 2009, India revisited Sri Lanka for five ODIs, as the Pakistan series had been cancelled due to the security situation in Pakistan and the attacks in Mumbai.[citation needed] Tendulkar scored 5, 6 and 7 in the first three matches, being dismissed leg before wicket in all of them, and did not play in the remaining two matches.</p>
          <p className='para'>India's next assignment was an away series against New Zealand, consisting of three Tests and five ODIs. In the ODI series, Tendulkar made an unbeaten 163 in the third match before stomach cramps forced him to end his innings. India made 392, won the match[216] and eventually won the series 3–1.[217] Tendulkar made 160 in the first Test, his 42nd Test century, and India won.[218] He made 49 and 64 in the second Test[219] and 62 and 9 in the third, in which play was halted on the last day due to rain with India needing only two wickets to win. India won the series 1–0.</p>
          <p className='para'>Tendulkar rested himself for the ODI tour of West Indies,[222] but was back for the Compaq Cup Tri Series between India, Sri Lanka and New Zealand in early September 2009. He made 46[223] and 27[224] in the league matches before notching up 138 in the final, as India made 319 and won by 46 runs.[225] This was Tendulkar's sixth century in a final of an ODI tournament and his third consecutive score of over 50 in such finals</p>
          <p className='para'>Tendulkar played only one innings in the ICC Champions trophy in South Africa, scoring 8 against Pakistan as India lost.[227] The next match against Australia was abandoned due to rain[228] and he was out with a stomach infection in the third match against the West Indies, as India were eliminated</p>
          <p className='para'>Australia returned for a seven-match ODI series in India in October, and Tendulkar made 14, 4, 32 and 40 in the first four games.[230] In the fifth match, with the series tied at 2–2, Australia amassed 350/4 in 50 overs.[231] Tendulkar made his 45th ODI hundred, a 175 off 141 balls. Just when it seemed that he would steer India to the large victory target, he tried to scoop a slower delivery from debutant bowler Clint McKay over short fine leg only to be caught by Nathan Hauritz, with India needing 19 runs to win with 18 balls and four wickets left. The Indian tail collapsed, and Australia won the match by three runs.[232][233] During this match, Tendulkar also became the first player to reach 17,000 ODI runs,[233][234] and achieved his personal best against Australia,[235] as well as the third-highest score in a defeat.[236] The knock was voted as the Best ODI Batting Performance of 2009 by ESPNcricinfo.</p>
          <p className='para'>In the five-match ODI series against Sri Lanka in 2009–10, Tendulkar scored 69, 43, 96 not out and 8 in the first four matches,[238] with the fifth match being abandoned as the pitch was deemed unfit and potentially dangerous.[239] India won the series 3–1.[240] In the Test series that followed, he scored a 100 not out in the first Test, which was drawn, and 40 and 53 in the second and third Tests, respectively, as India clinched innings victories in both the Tests, to win the series 2–0</p>
          <p className='para'>Tendulkar rested himself for the ODI tri-series in Bangladesh in 2010, but played in the subsequent Test series.[242] He made 105 not out and 16 in the first Test, and 143 in the second. India won both the Tests</p>
          <p className='para'>In the two-Test Series against South Africa, Tendulkar made 7 and 100 in the first Test.[245] He then scored 106 in the first innings of the second Test, which was his 47th hundred in Test cricket. It was also his fourth hundred in successive Tests, and he was the fourth Indian to achieve this feat.[246][247] In the second match of the subsequent ODI series, Tendulkar scored 200 not out, becoming the world's first batsman to score a double century in ODI cricket and breaking the previous highest score of 194 jointly held by Pakistan's Saeed Anwar and Zimbabwe's Charles Coventry.</p>
          <div className='sub-conatainer'>
            <div className='text-Table4'>
              <img src={SachinGround2} className='SachinGround2'></img>
              <p className='img-SachinGround'>Tendulkar's shot to reach 14,000 Test runs. He was batting against Australia in October 2010.</p>
            </div>
          </div>
          <p className='p4'>2011–12: World Cup win and final years</p>
          <p className='p3'>See also: India at the Cricket World Cup § India at the 2011 World Cup</p>
          <p className='para'>From February to April, Bangladesh, India, and Sri Lanka hosted the 2011 World Cup. Amassing 482 runs at an average of 53.55 including two centuries, Tendulkar was India's leading run-scorer for the tournament; only Tillakaratne Dilshan of Sri Lanka scored more runs in the 2011 tournament,[253] and was named in the ICC "Team of the Tournament".[254] India defeated Sri Lanka in the final.[255] Shortly after the victory, Tendulkar commented that "Winning the World Cup is the proudest moment of my life. ... I couldn't control my tears of joy."[256]</p>
          <p className='para'>India were due to tour the West Indies in June, although Tendulkar chose not to participate. He returned to the squad in July for India's tour of England.[257] Throughout the tour there was much hype in the media about whether Tendulkar would reach his 100th century in international cricket (Test and ODIs combined). However, his highest score in the Tests was 91; Tendulkar averaged 34.12 in the series as England won 4–0 as they deposed India as the No. 1 ranked Test side.[258][259] The injury Tendulkar sustained to his right foot in 2001 flared up and as a result he was ruled out of the ODI series that followed.[258] Tendulkar created another record on 8 November 2011 when he became the first cricketer to score 15,000 runs in Test cricket, during the opening Test match against the West Indies at the Feroz Shah Kotla Stadium in New Delhi.[260][261] For his performances in 2011, he was named in the World Test XI by the ICC.[262]</p>
          <p className='para'>Ian Chappell was not happy with Tendulkar's performance after India's tour of Australia. He says that Tendulkar's quest for his 100th hundred has proved to be a hurdle for the entire team and has hampered their performance on the Tour of Australia.[263] Former India World Cup winning captain and all-rounder Kapil Dev has also voiced his opinion that Tendulkar should have retired from ODI's after the World Cup.[264] Former Australian fast bowler, Geoff Lawson, has said that Tendulkar has the right to decide when to quit although he adds that Tendulkar should not delay it for too long.[265] The selection committee of BCCI expectedly included Tendulkar in the national Test squad for the upcoming series against New Zealand commencing in August 2012.[266]</p>
          <p className='p4'>100th international century</p>
          <p className='para'>On 16 March 2012, Tendulkar accomplished a remarkable feat by scoring his 100th international century in a match against Bangladesh in the Asia Cup, held at Mirpur.[267] This was a pioneering achievement, as he became the first cricketer to ever reach this landmark.[268] This century was not just a momentous occasion for Tendulkar, but it was also his first ODl century against Bangladesh. Despite the widespread media attention and public fascination with this milestone, Tendulkar confessed that it was a challenging time for him, as the constant focus on his 100th hundred became a mentally onerous task.[269][270] Despite Tendulkar's illustrious century, India was unable to secure a triumph against Bangladesh, resulting in a defeat by a margin of 5 wickets.[271]</p>
          <p className='p4'>Domestic return</p>
          <p className='para'>After being bowled out in three similar instances against New Zealand and hitting a slump in form, Tendulkar returned to the Ranji Trophy to get back some form ahead of the England Series at home,[citation needed] in a match for Mumbai against Railways on 2 November 2012. This was his first Ranji Trophy match since 2009. He scored 137 off 136 balls, with 21 fours and 3 sixes, to take his team to 344 for 4 at stumps on day one.[272]</p>
          <p className='para'>However, because of a poor form in the first two Tests in the series against England, and India being humiliated in the second match of that series by 10 wickets on 26 November 2012,[273] some people have started to question his place in the Indian team. A report by The Hindustan Times said that Tendulkar had a discussion with the national chief selector Sandeep Patil, in which he said that he would leave it to the selectors to decide on his future as he is not getting any runs.[274] This speculation, however, was later considered to be false.[275][276]</p>
          <p className='para'>Then he decided to play in the knockout stage of the 2012–13 Ranji Trophy. He scored 108 in the quarter-final against Baroda before being bowled by Murtuja Vahora, where Tendulkar was involved in a 234-run partnership with opener Wasim Jaffer (150) for the 3rd wicket at Wankhede Stadium.[277] Mumbai eventually piled on 645/9 and won on 1st innings lead.[278] In the semi-final against Services at Palam A Ground, with Mumbai reeling at 23/3, Tendulkar scored 56 from 75 balls and had an 81-run 4th wicket partnership with Abhishek Nayar (70),[279] and Mumbai eventually won on 1st innings lead after the match went into the sixth day due to rain delays.[280] In the final against Saurashtra, he was run out for 22 following a misunderstanding with Wasim Jaffer.[281] Mumbai eventually won the Ranji Trophy 2012–13.[282]</p>
          <p className='para'>He also played in the Irani Trophy for Mumbai, where he scored 140* against Rest of India and helped Mumbai to score 409 in reply to Rest of India's 526. This was also his 81st hundred in first-class cricket, equalling Sunil Gavaskar's Indian record for most first-class hundreds.[283]</p>
          <p className='p4'>Retirement</p>

          <p className='p3'>Further information on 200th and final Test match: West Indian cricket team in India in 2013–14</p>
          <p>After a series of underwhelming performances during the 2012 series against England, Tendulkar announced his departure from One Day International cricket on 23 December 2012. However, he stated that he would continue to be available for representation in the Test format of the sport.[284][285] Upon the announcement of his retirement from One Day International cricket, former Indian captain Sourav Ganguly expressed his surprise, noting that Tendulkar could have still participated in the upcoming series against Pakistan. Anil Kumble reflected on the difficulty of imagining an Indian ODI team without Tendulkar's name, while Javagal Srinath acknowledged the transformative impact Tendulkar had on the game, starting from the time he debuted as an opener in New Zealand in 1994.[286]</p>

          <figure className='figure-right'>
            <img src={SachinGround3} className='SachinGround3'></img>
            <figcaption className='figcaption'>Tendulkar fielding in his 199th Test match in Eden Gardens (he is seen wearing a hat)
            </figcaption>
          </figure>
          <p className='para'>After playing a Twenty20 International in 2006 against South Africa, he said that he would not play the format again.[287] He announced his retirement from the IPL after his team, Mumbai Indians, beat Chennai Super Kings by 23 runs at the Eden Gardens in Kolkata on 26 May to win the Indian Premier League 2013.[288] He retired from Twenty20 cricket and limited-overs cricket, after playing the 2013 Champions League Twenty20 in September–October 2013 in India for Mumbai Indians.[289]</p>
          <p className='para'>On 10 October 2013 Tendulkar announced that he would retire from all cricket after the two-Test series against West Indies in November.[290][291] At his request, the BCCI arranged that the two matches be played at Kolkata and Mumbai so that the farewell would happen at his home ground.[292][293] He scored 74 runs in his last Test innings against West Indies, thus failing short by 79 runs to complete 16,000 runs in Test cricket, the next man to bat after him was the future captain Virat Kohli.[23][294] The Cricket Association of Bengal and the Mumbai Cricket Association organised events to mark his retirement from the sport.[295][296] Various national and international figures from cricket, politics, Bollywood and other fields spoke about him in a day-long Salaam Sachin Conclave organised by India Today.[297][298]</p>
          <p className='p1'>Post-retirement</p>
          <p className='para'>In July 2014, he captained the MCC side in the Bicentenary Celebration match at Lord's.[299] In December 2014, he was announced ambassador of the ICC Cricket World Cup 2015 event.[300][301] It is his second term as he has already held the ambassador of the previous ICC Cricket World Cup 2011.[302] He got the ambassador position of the ICC Cricket world cup in consecutive terms of the cricket world cup (2011 and 2015).</p>
          <p className='p1'>Exhibition and charity matches</p>
          <p className='para'>Tendulkar organised exhibition cricket matches in partnership with former Aussie cricketer Shane Warne. Cricket All-Stars held in US in baseball stadiums and had retired players, some of them was Sourav Ganguly, Shoaib Akhtar, Wasim Akram.[303]</p>
          <p className='para'>On 8 February 2020, he played in the Bushfire Cricket Bash, a charity match organised to raise fund for Australian bushfire victims.[304]</p>
          <p className='para'>He captained the India legends team to victory in the 2020–21 Road Safety World Series and was the leading run scorer for the Indian team in the tournament.[305][306]</p>
          <p className='para'>He acted as a coach for the Ponting XI during The Big Appeal. During the innings break, he batted an over against Ellyse Perry and Annabel Sutherland at Perry's request.[307][308]</p>
          <h1 className='h1'>Indian Premier League</h1>
          <hr className='hr'></hr>
          <p className='para'>Tendulkar was made the Icon player and captain for his home side, the Mumbai Indians in the inaugural Indian Premier League Twenty20 competition in 2008.[309] As an icon player, he was signed for a sum of US$1,121,250, 15% more than the second-highest paid player in the team, Sanath Jayasuriya.[310]</p>
          <p className='para'>In 2010 edition of Indian Premier League, Mumbai Indians reached the final of the tournament. Tendulkar made 618 runs in 14 innings during the tournament, breaking Shaun Marsh's record of most runs in an IPL season. He was declared player of the tournament for his performance during the season. He also won Best Batsman and Best Captain awards at 2010 IPL Awards ceremony.[311] Tendulkar has scored more than 500 runs in IPL in two different seasons as a captain.[312]</p>
          <p className='para'>Sachin Tendulkar captained Mumbai Indians in 4 league matches of the second edition of the Champions League T20. He scored 68 in the first match and 48 against Guyana. But Mumbai Indians failed to qualify for semifinals after losing the initial two matches. Tendulkar scored 135 runs.[313]</p>
          <p className='para'>In the 2011 IPL, against Kochi Tuskers Kerala, Tendulkar scored his maiden Twenty20 hundred. He scored 100 not out off 66 balls. In 2013, Tendulkar retired from Indian Premier League and in 2014 he was appointed as the Mumbai Indian's "Team Icon".[314][315] His last match for the team was the final of the 2013 Champions League, where he scored 14 runs in an Indians victory. In his 78 matches in the IPL, Tendulkar scored a total of 2,334 runs; at the time of his retirement he was the fifth-highest run-scorer in the competition's history.[316] Mumbai Indians retired his number 10 jersey as a tribute to Tendulkar.[317] He recently stepped down as the mentor of the franchise citing personal reasons.[318]</p>
          <h1 className='h1'>Playing style</h1>
          <hr className='hr'></hr>
          <figure className='figure-right'>
            <img src={SachinGround4} className='SachinGround4' ></img>
            <figcaption className='figcaption'>Tendulkar plays a wristy leg-side flick</figcaption>
          </figure>

          <p className='para'>Tendulkar is cross-dominant: he bats, bowls and throws with his right hand, but writes with his left hand.[319][320] He would also practice left-handed throws at the nets on a regular basis. ESPNcricinfo columnist Sambit Bal has described him as the "most wholesome batsman of his time".[30] His batting is based on complete balance and poise while limiting unnecessary movements and flourishes. He appears to show little preference for the slow and low wickets which are typical in India, and has scored many centuries on the hard, bouncy pitches in South Africa and Australia.[30] He is known for his unique punch style of hitting the ball over square. He is also renowned for his picture-perfect straight drive, often completed with no follow-through. The straight drive is often said to be his favourite shot.[321] In 2008, Sunil Gavaskar, in an article he wrote in the AFP, remarked that "it is hard to imagine any player in the history of the game who combines classical technique with raw aggression like the little champion does".[322] Equipment-wise, his bats tend to be heavier than the average batman.[323]</p>


          <p className='para'>Sir Donald Bradman, considered by many as the greatest batsman of all time, considered Tendulkar to have a batting style similar to his. In his biography, it is stated that "Bradman was most taken by Tendulkar's technique, compactness and shot production, and had asked his wife to have a look at Tendulkar, having felt that Tendulkar played like him. Bradman's wife, Jessie, agreed that they did appear similar."[324][325]</p>
          <figure className='figure-left'>
            <img src={SachinGround5} className='SachinGround5'></img>
            <figcaption className='figcaption'>Tendulkar at the crease, getting ready to face a delivery</figcaption>
          </figure>
          <p className='para'>Former Australian cricket team coach John Buchanan voiced his opinion that Tendulkar had become susceptible to the short ball early in his innings because of a lack of footwork.[326] Buchanan also believes Tendulkar has a weakness while playing left-arm pace.[326] He was affected by a series of injuries since 2004. Since then Tendulkar's batting has tended to be less attacking. Explaining this change in his batting style, he has acknowledged that he is batting differently because, firstly, no batsman can bat the same way for the entire length of a long career and, secondly, he is a senior member of the team now and thus has more responsibility. During the early part of his career, he was a more attacking batsman and frequently scored centuries at close to a run a ball. Ian Chappell, former Australian player, remarked in 2007 that "Tendulkar now, is nothing like the player he was when he was a young bloke".[327]</p>

          <p className='para'>Tendulkar has incorporated several modern and unorthodox strokes into his repertoire, including the paddle sweep, the scoop over short fine leg and the slash to third man over the slips' heads, especially in his later years. He is often praised for his ability to adapt to the needs of his body and yet keep scoring consistently.[328]</p>
          <figure className='figure-right'>

            <img src={SachinGround6} className='SachinGround6'></img>
            <figcaption className='figcaption'>Tendulkar has taken 201 wickets across all three formats of the international game.
            </figcaption>
          </figure>
          <p className='para'>While Tendulkar was not a regular bowler, he could bowl medium pace, leg spin, and off spin. He often bowled when two batsmen of the opposite team had been batting together for a long period, as he could often be a useful partnership breaker.[329] With his bowling, he helped secure an Indian victory on more than one occasion.[330] He took 201 international wickets—46 in Tests, 154 in ODIs where he is India's twelfth-highest wicket taker, and one wicket in Twenty20 Internationals.[331]</p>

          <h1 className='h1'> Reception and legacy</h1>
          <hr className='hr'></hr>
          <figure className='figure-right'>
            <img src={SachinGround7} className='SachinGround7'></img>
            <figcaption className='figcaption'> Tendulkar's Wax Statue in Madame Tussauds, London</figcaption>
          </figure>
          <p className='para'>Tendulkar is often regarded as one of the greatest and most influential cricketer in the history of cricket. His consistent performances earned him a fan following across the globe, including amongst Australian crowds, where Tendulkar has consistently scored centuries.[82] One of the most popular sayings by his fans is "Cricket is my religion and Sachin is my God".[332] ESPNcricinfo mentions in his profile that "... Tendulkar remains, by a distance, the most worshipped cricketer in the world."[30][additional citation(s) needed]</p>
          <p className='para'>During the Australian tour of India in 1998 Matthew Hayden said "I have seen God. He bats at no. 4 in India in Tests."[333] However, on God, Tendulkar himself is reported to have said "I am not God of cricket. I make mistakes, God doesn't."[334] Tendulkar made a special appearance in the Bollywood film Stumped in 2003, appearing as himself.[335][unreliable fringe source?]</p>
          <p className='para'>On 24 February 2010, ESPNcricinfo site could not handle the heavy traffic experienced after Tendulkar broke the record for the highest individual male score in a One Day International match against South Africa, also becoming the first player to score 200* in the history of ODIs as more than 5 million fans visited the website at a time.[336][337]</p>



          <p className='para'>There have been many instances when Tendulkar's fans have undertaken extreme activities over his dismissal in the game. As reported by many Indian newspapers, a young man hanged himself due to distress over Tendulkar's failure to reach his 100th century</p>
          <p className='para'>At home in Mumbai, Tendulkar's fan following has caused him to lead a different lifestyle. Ian Chappell has said that he would be unable to cope with the lifestyle Tendulkar was forced to lead, having to "wear a wig and go out and watch a movie only at night".[327] In an interview with Tim Sheridan, Tendulkar admitted that he sometimes went for quiet drives in the streets of Mumbai late at night when he would be able to enjoy some peace and silence.</p>
          <p className='p1'>Indian Premier League</p>
          <p className='para'></p>In the 2021 IPL, season he worked for Mumbai Indians team as a mentor

          <h1 className='h1'>Awards and honours</h1>
          <hr className='hr'></hr>
          <p className='p3'>Main article: List of career achievements by Sachin Tendulkar</p>

          <figure className='figure-right'>
            <img src={SachinGround8} className='SachinGround8'></img>
            <figcaption className='figcaption'> Tendulkar (right) received India's highest civilian award Bharat Ratna</figcaption>
          </figure>
          <p className='p'>National honours</p>
          <p className='p1'>India</p>
          <div>
            <ul>

              <li>1994 – Arjuna Award, by the Government of India in recognition of his outstanding achievement in sports.[341][342]  </li>
              <li> 1997–98 – Khel Ratna Award, India's highest honour given for achievement in sports </li>
              <li> 1999 –  Padma Shri, India's fourth-highest civilian award.[344] </li>
              <li>2001 – Maharashtra Bhushan Award, Maharashtra state's highest civilian award.[345]  </li>
              <li>  2008 –  Padma Vibhushan, India's second-highest civilian award.[346]</li>
              <li>2014 –  Bharat Ratna, India's highest civilian award.[16][17]  </li>
            </ul>
          </div>
          <p className='p1'>Australia</p>
          <div>
            <ul>
              <li>2012 –  Honorary Member of the Order of Australia, given by the Australian government.[347][348]</li>
            </ul>
          </div>
          <figure className='figure-right'>
            <div>
              <img src={SachinGround9} className='SachinGround9'></img></div>
            <div>
              <img src={SachinGround10} className='SachinGround10'></img></div>

            <div> <figcaption className='figcaption'>2013 Indian postage stamps commemorating Sachin Tendulkar's 200th Test Match</figcaption>
            </div></figure>
          <p className='p'>Sporting honours</p>

          <ul>
            <li>1997 – Wisden Cricketer of the Year.[349]</li>
            <li>1998, 2010 – Wisden Leading Cricketer in the World.[350]</li>
            <li>2001 – Mumbai Cricket Association renamed one of Wankhede Stadium's stands after Sachin Tendulkar.</li>
            <li>2002 – In commemorating Tendulkar's feat of equalling Don Bradman's 29 centuries in Test Cricket, Formula One (F1) team Ferrari invited him to its paddock on the eve of the British Grand Prix on 23 July, to receive a Ferrari 360 Modena from the F1 world champion Michael Schumacher.[352]</li>
            <li>2003 – Player of the tournament in 2003 Cricket World Cup.[134]</li>
            <li>2004, 2007, 2010 – ICC World ODI XI.[353]</li>
            <li>2006–07, 2009–10 – Polly Umrigar Award for International cricketer of the year[354][355]</li>
            <li>2009, 2010, 2011 – ICC World Test XI.[356][357][358]</li>
            <li>2010 – Outstanding Achievement in Sport and the People's Choice Award at The Asian Awards in London.[359]
            </li>
            <li>2010 – Sir Garfield Sobers Trophy for cricketer of the year.[20][360]</li>
            <li>2010 – LG People's Choice Award.[361]</li>
            <li>2010 – Made an Honorary Group Captain by the Indian Air Force.[362]</li>
            <li>2011 – Castrol Indian Cricketer of the Year award.[363]</li>
            <li>2012 – Wisden India Outstanding Achievement award.[364]</li>
            <li>2013 – India Post released a stamp of Tendulkar and he became the second Indian after Mother Teresa to have such stamp released in their lifetime.[365]</li>
            <li>2014 – ESPNcricinfoESPNcricinfo Cricketer of the Generation.[366]</li>
            <li>2017 – The Asian Awards Fellowship Award at the 7th Asian Awards.[367]</li>
            <li>2019 – Inducted into the ICC Cricket Hall of Fame[368]</li>
            <li>2020 – Laureus World Sports Award for Best Sporting Moment (2000–2020)[369][370]</li>
            <li>2023- On his 50th birthday, the West Stand at the iconic Sharjah Cricket Stadium has been renamed the 'Sachin Tendulkar Stand.[371]</li>

          </ul>

          <h1 className='h1'>Career statistics</h1>
          <hr className='hr'></hr>
          <p className='p3'>Main article: List of career achievements by Sachin Tendulkar</p>
          <p className='p'>Runs</p>
          <table className='table-second'>
            <tbody>
              <tr>
                <th colSpan={7}>Tendulkar's Test cricket record</th>
              </tr>
              <tr>
                <th></th>
                <th>Matches</th>
                <th>	Runs</th>
                <th>Best</th>
                <th>	Average</th>
                <th>100s	</th>
                <th>50s</th>


              </tr>
              <tr>
                <th>Home</th>
                <td>94</td>
                <td>7216</td>
                <td>217</td>
                <td>52.67</td>
                <td>22</td>
                <td>32</td>

              </tr>
              <tr>
                <th>Away</th>
                <td>106</td>
                <td>8705</td>
                <td>248*</td>
                <td>54.74</td>
                <td>29</td>
                <td>36</td>

              </tr>
            </tbody>
          </table>
          <p className='para'>Tendulkar is the leading run-scorer in Test matches, with 15,921 runs, as well as in ODI matches, with 18,426 runs.[30] He is the only player to score more than 30,000 runs combined in all forms of international cricket (Test, ODI, and Twenty20).[24] He is the 16th player and the first Indian to score 50,000 runs in all forms of domestic and international recognised cricket (First-class, List A, and Twenty20). He achieved this feat on 5 October 2013, during a Champions League Twenty20 match for his IPL team Mumbai Indians against Trinidad and Tobago.[373][374][375]</p>


          <p className='para'>Tendulkar has scored over 1,000 runs in a calendar year in ODIs 7 times, and in 1998 he scored 1,894 runs, the record for the highest number of runs scored by any player in a single calendar year for One-Day Internationals.[376] He is the first male cricketer to score a double-century in one-day cricket.[250]</p>
          <p className='para'>Tendulkar was also one half of the most prolific Test cricket partnership to date, alongside Rahul Dravid. Batting together, they scored 6920 runs for India at a partnership average of over fifty runs.[377]</p>
          <p className='para'>He became the first batsman to score 12,000, 13,000, 14,000 and 15,000 runs in Test cricket,[378] having also been the third batsman and the first Indian to pass 11,000 runs in that form of the game.[379] He was also the first player to score 10,000 runs in one-day internationals,[380] and also the first player to cross every subsequent 1,000-run mark that has been crossed in ODI cricket history.[citation needed] On 8 November 2011, Tendulkar became the first batsman to score 15,000 runs in Test Cricket.[381]</p>
          <p className='para'>Tendulkar has consistently done well in Cricket World Cups. He was the highest run scorer of the 1996 Cricket World Cup with a total of 523 runs and also of the 2003 Cricket World Cup with 673 runs.[382]</p>


          <p className='p1'>Centuries</p>
          <table className='table-third'>
            <caption >Tendulkar's international centuries</caption>

            <tbody>
              <tr>
                <th></th>
                <th>Test</th>
                <th>ODI</th>

              </tr>
              <tr>
                <th> Australia</th>
                <td> 11</td>
                <td>9</td>
              </tr>
              <tr>
                <th> Sri Lanka</th>
                <td>9</td>
                <td>8</td>
              </tr>
              <tr>
                <th> South Africa</th>
                <td>7</td>
                <td>5</td>
              </tr>
              <tr>
                <th> England</th>
                <td>7</td>
                <td>2</td>
              </tr>
              <tr>
                <th> New Zealand</th>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <th> West Indies</th>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <th> Zimbabwe</th>
                <td>3</td>
                <td>5</td>
              </tr>
              <tr>
                <th> Pakistan</th>
                <td>2</td>
                <td>5</td>
              </tr>
              <tr>
                <th>Bangladesh</th>
                <td>5</td>
                <td>1</td>
              </tr>
              <tr>
                <th> Kenya</th>
                <td>NA</td>
                <td>4</td>
              </tr>
              <tr>
                <th> Namibia</th>
                <td>NA</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <p className='p3'>Further information: List of international cricket centuries by Sachin Tendulkar</p>
       
          <p className='para'>Tendulkar holds the record of the highest number of centuries in Tests (51) and stands second in the highest number of centuries in ODIs (49) behind Virat Kohli. He has the most number of centuries when Tests and ODIs combined (100). He is the only player to have scored 50 centuries in Test cricket,[383] and was the first to score 50 centuries in all international cricket combined.[384]</p>
          <p className='para'>In the fourth Test match of the 2008–09 Border-Gavaskar Trophy against Australia on 6 November 2008, Tendulkar surpassed Australia's Allan Border to become the player to cross the 50-run mark the most times in Test cricket history,[385] and also the second ever player to score 11 Test centuries against Australia, tying Jack Hobbs, who had set the record more than 70 years prior.[386] After his century against England during group stages of 2011 Cricket World Cup, he became the player to hit most centuries in Cricket World Cups with six centuries, and the first player to score 2000 runs in World Cup cricket.[387][388] On 16 March 2012, Tendulkar scored his 100th international hundred against Bangladesh during the Asia Cup 2012.[389]</p>


          <p className='p1'>Wins</p>
          <table className='table-fourth'>
            <tbody>
              <tr >
                <th colSpan={7} className='h2'>Match results in Tendulkar's international career</th>
              </tr>
              <tr>
                <th> </th>
                <th>	Matches</th>
                <th>		Won</th>
                <th>	Lost</th>
                <th>	Drawn</th>
                <th>	Tied</th>
                <th>		No result</th>


              </tr>
              <tr>

                <td>Test</td>
                <td>200</td>
                <td>72</td>
                <td>56</td>
                <td>72</td>
                <td>0</td>
                <td>-</td>


              </tr>
              <tr>

                <td>T20</td>
                <td>1</td>
                <td>1</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>




              </tr>
              <tr>

                <td>ODI</td>
                <td>463</td>
                <td>	234</td>
                <td>	200</td>
                <td>-</td>
                <td>5</td>
                <td>24</td>

              </tr>
            </tbody>
          </table>
          <p className='para'>He also holds the world record for playing the highest number of Test matches (200)[394] and ODI matches (463).[376] Tendulkar has been part of most wins by an Indian in both Test cricket with 72 wins and ODIs with 234 wins, and is third in the world in ODI victories after Ricky Ponting (262), Mahela Jayawardene (241).[395][396]</p>


          <p className='p1'>Man of the Match</p>
          <p className='para'>He has been Man of the Match 13 times in Test matches and Man of the Series four times, including twice in the Border-Gavaskar Trophy against Australia.[397] The performances earned him respect from Australian cricket fans and players.[82] In ODI, he has been Man of the Match 62 times and Man of the Series 15 times.[376]</p>
          <p className='p1'>Statistics</p>
          <div className='border-img'>
            <img src={Graph} className='Graph'></img>
            <p className='img-SachinGround1'>An innings-by-innings breakdown of Tendulkar's Test match batting career showing runs scored (red and green bars) and the average of the last ten innings (blue line)</p>
          </div>
          <h1 className='h1'>Personal life</h1>
          <hr className='hr'></hr>
          <figure className='figure-right'>

            <img src={Sachin1} className='Sachin1'></img>
            <figcaption className='figcaption'> Sachin Tendulkar and his wife Anjali</figcaption>
          </figure>
          <p className='para'>On 24 May 1995, Tendulkar married Anjali Mehta, a paediatrician of Gujarati origin, whom he had first met in 1990.[398][399][400][401] Anjali decided to leave her medical career following their marriage.[402] They have two children: Sara and Arjun.[403][404] Tendulkar lives in a bungalow in the Mumbai suburb of Bandra.[405]</p>
          <p className='para'>Tendulkar is a Hindu.[406] He is a devotee of Ganesha,[407] and a follower of Sathya Sai Baba, whom he visited for the first time in 1997.[408][409][410] The death of Sai Baba on Tendulkar's 38th birthday, in 2011, caused him to cancel his birthday celebrations.[411][412]</p>


          <h1 className='h1'>Business interests</h1>
          <hr className='hr'></hr>
          <p className='para'>Tendulkar's popularity has led him to be a pioneer in India on cricket business dealings. In 1995, he signed a record sports management deal with WorldTel, the value of the deal being ₹300 million (US$3.8 million) over five years.[413][414] In 2001, he re-signed with WorldTel in 2001 with a five-year, ₹800 million (US$10 million) contract.[415] In 2006, Tendulkar's marketing rights were sold to Saatchi and Saatchi through a three-year, ₹1.8 billion (US$23 million) contract.[416] He started Sachin Ramesh Tendulkar Sports Management Pvt Ltd, a sports management organisation. It manages all social and commercial work of Tendulkar.[417][when?][better source needed]</p>
          <p className='para'>Tendulkar has opened two restaurants: Tendulkar's (Colaba, Mumbai) and Sachin's (Mulund, Mumbai).[418][419] Tendulkar owns these restaurants in partnership with Sanjay Narang of Mars Restaurants.[420]</p>
          <p className='para'>In 2013, Tendulkar was listed in the 51st position on Forbes' list of world's highest-paid athletes, with his total earnings estimated to be US$22 million.[421] In October 2013, the net worth of Tendulkar was estimated at US$160 million by Wealth-X, making him India's wealthiest cricket player.[422][423]</p>
          <p className='para'>Until 2017, Tendulkar co-owned the Kerala Blasters FC in the Indian Super League Football in association with Prasad V. Potluri's PVP Ventures. The team was named for Tendulkar's nickname, "Master Blaster".[424][425][426] In 2016, Tendulkar became co-owner of the Bengaluru Blasters badminton team, which participates in the Premier Badminton League.[427]</p>
          <p className='para'>In October 2021, Tendulkar was named in the Pandora Papers leak. His representatives stated that Tendulkar's investments have been legitimate and fully taxed.[428]</p>
          <p className='para'></p>
          <h1 className='h1'>Political career</h1>
          <hr className='hr'></hr>
          <p className='para'>In April 2012, Tendulkar was nominated by President Pratibha Patil to the Rajya Sabha, the upper house of India's parliament. He became the first active sportsperson and cricketer to receive the honour.[18][429] He took the oath of office on 4 June.[430] He refused to accept the bungalow allotted to him in New Delhi, calling it "a waste of [taxpayers'] money as I reside in Mumbai".[431]</p>
          <p className='p1'>Attendance</p>

          <p className='para'>As a member of parliament in Rajya Sabha, Tendulkar was one of the worst performers in regards to attendance at parliament sessions and house debates.[432][433][434] Fellow MPs from various parties, including other nominated MPs, criticised Tendulkar for his absence.[435][436] In his first year, he did not attend a single day of budget or winter session, and his attendance for the monsoon session was 5 percent. In his career as an MP, he asked 22 questions and did not participate in any debates. He was part of the Standing Committee on Information Technology. Overall, his attendance for his six year-term was 8 percent.[437] In response to criticism about his attendance, Tendulkar said that he was absent because of personal issues.[438]</p>
          <p className='p1'>Use of funds</p>
          <p className='para'>In 2015, Tendulkar released ₹76 lakh (equivalent to ₹1.1 crore or US$140,000 in 2023) from his Members of Parliament Local Area Development Scheme fund to a West Midnapore, West Bengal school after receiving a request from the school.[439] In 2019, Tendulkar contributed ₹22 lakh (US$28,000) from his Members of Parliament Local Area Development (MPLAD) funds allotted to him during his stint as Rajya Sabha MP for the renovation of a Children's Park in East Bandra.[440]</p>
          <p className='para'>In his six years as a Rajya Sabha MP, Tendulkar accrued nearly ₹90 lakh (US$110,000) in salaries and other monthly allowances. He donated this entire salary and allowances to the Prime Minister Relief Fund. In response, the Prime Minister's Office released a statement: "Prime Minister acknowledges this thoughtful gesture and conveys his gratitude. These contributions will be of immense help in providing assistance to the persons in distress."[441]</p>
          <h1 className='h1'>Role in public awareness and philanthropy</h1>
          <hr className='hr'></hr>
          <p className='p3'>For charity matches Tendulkar has participated in, see § Exhibition and charity matches.</p>

          <p className='para'>Tendulkar has a charitable organisation, the Sachin Tendulkar Foundation.[442][third-party source needed] He has also supported the campaigns of other organisations.</p>
          <p className='para'>Since November 2013, he has been the UNICEF Goodwill Ambassador for South Asia as well its national ambassador for India.[443][444]</p>
          <p className='p1'>Health</p>
          <p className='para'>In 2003, Tendulkar worked for UNICEF's initiative to spread awareness about polio prevention in India. In 2010, Tendulkar's campaign for the Crusade Against Cancer Foundation, "Sachin's Crusade Against Cancer in Children", raised ₹10.25 million (equivalent to ₹23 million or US$290,000 in 2023).[445] In November 2021, he donated retinal cameras, which can be used to diagnose retinopathy of prematurity, to a hospital in Assam.[446]</p>
          <p className='p1'>Sanitation</p>
          <p className='para'>In 2008, Tendulkar became involved with UNICEF's initiative to promote hygiene and sanitation.[447] Tendulkar led UNICEF's Team Swachh Bharat campaign which supported the Indian government's Swachh Bharat Mission (Clean India Mission), a campaign dedicated to improving sanitation in India.[447][448]</p>
          <p className='para'>In 2014, Tendulkar was one of the first nine celebrities appointed by Prime Minister Narendra Modi to promote Swachh Bharat Mission.[448] Tendulkar accepted the nomination, posting a video of himself sweeping a street with his friends in Mumbai.[449] In 2017, he helped sanitation workers clean the Bandra Fort to contribute to the Swachhata Hi Seva ('Cleanliness is Service') campaign.[450] In 2019, he was awarded the most effective Swachhta ('Cleanliness') Ambassador by India Today Group's fifth edition of Safaigiri (lit. 'Spread awareness about hygiene movement').[451]</p>
          <p className='p1'>COVID-19 pandemic</p>
          <p className='para'>In March 2020, he donated ₹25 lakh (US$31,000) to the Prime Minister Relief Fund and ₹25 lakh (US$31,000) to the Chief Minister Relief Fund of Maharashtra in the initial months of the COVID-19 pandemic.[452] In May 2020, Tendulkar donated an undisclosed amount of money to 4,000 people, including children of Brihanmumbai Municipal Corporation schools.[453] On 29 April 2021, during the second wave of the pandemic in India, he donated ₹1 crore (US$130,000) to the Mission Oxygen group, which imported and donated oxygen concentrator devices.[454]</p>
          <p className='p1'>Education</p>
          <p className='para'>On 18 September 2011, Tendulkar spent nine hours on the 12-hour "Coca-Cola-NDTV Support My School" telethon. The campaign raised ₹70 million (equivalent to ₹140 million or US$1.8 million in 2023) for "the creation of basic facilities, particularly toilets for girl students, in 140 government schools across the country".[455] In 2009, Tendulkar announced that he would sponsor the education of 200 children through Apnalaya, a Mumbai-based non-governmental organisation associated with his mother-in-law, Annabel Mehta.[456][457] As of 2013, Tendulkar continued to annually support 200 children through Apnalaya.[458][459]</p>
          <h1 className='h1'>Post-playing career  </h1>
          <hr className='hr'></hr>
          <p className='p1'>Cricket Advisory Committee</p>
          <p className='para'>In 2015 he was appointed by BCCI into the Cricket Advisory Committee (CAC).[460] He was one of three in the committee along VVS Laxman and Sourav Ganguly. He resigned from this job after allegations of conflict of interest on him.[date missing][when?]CAC was formed by BCCI to appoint a head coach for Indian cricket team.[461] On 23 June 2016, CAC appointed Anil Kumble as national team's head coach.[462]</p>
          <p className='para'>In 2019, Tendulkar made his debut as a Cricket commentator during the 2019 ICC Cricket World Cup.[463][464]</p>
          <h1 className='h1'>In media</h1>
          <p className='para'>In 2001, Tendulkar appeared on Kaun Banega Crorepati on Star Plus with Vinod Kambli[465][39]</p>
          <p className='para'>In 2011, Tendulkar Opus was released by Kraken Opus, a specialty book publisher.[466] Ten copies were part of the "Blood Edition", in which Tendulkar's blood was "mixed into the paper pulp" of the signature page.[467] The proceeds from the "Blood Editions", which cost US$75,000 each, went to Tendulkar's charitable organisation.[467] Other editions were offered: about a thousand hardback copies at US$2,000–$3,000, a smaller edition at US$200–$300, and a digital edition.[467][468][469]</p>
          <p className='para'>Tendulkar's autobiography, Playing It My Way, was released on 6 November 2014. It was listed in the 2016 Limca Book of Records for breaking the record for adult hardback pre-publication orders, with 150,289.[470] It was written by a ghostwriter, Boria Majumdar.[471]</p>
          <p className='para'>In 2017, Sachin: A Billion Dreams, directed by James Erskine, was released.[472] It is a docudrama film about Tendulkar, featuring interviews with cricket players and sports commentators. The film received mixed reviews.[402][473]</p>
          <p className='para'>The 2023 film Sachin: The Ultimate Winner depicts a child called Sachin who is inspired by Tendulkar, his hero and namesake, to return to cricket after becoming severely injured.[474]</p>
          <h1 className='h1'>Notes  </h1>
          <hr className='hr'></hr>
          <div>
            <ol type='1'>
              <li> Craig White, although born in Yorkshire was the first player to be signed as an overseas player by Yorkshire. He had to be listed as an overseas player as he had already played for Victoria in Australia.</li>
              <li> Belinda Clark of the Australian women's cricket team was the first cricketer (of any gender) to score 200 or more in an ODI match. She scored 229* in a 1997 Women's Cricket World Cup match against Denmark</li>
            </ol>
          </div>
          <h1 className='h1'>References </h1>
          <hr className='hr'></hr>
          <div>
            <ol type='1'>
              <li> "Sachin Tendulkar: How the Boy Wonder became Master Blaster". NDTV. 6 November 2013. Archived from the original on 16 November 2013. Retrieved 17 November 2013.</li>
              <li> Gupta, Gaura (13 November 2013). "Top guns salute Master Blaster Sachin Tendulkar". The Times of India. Archived from the original on 18 November 2013. Retrieved 17 November 2013.</li>
              <li> "THROWBACK: When Sachin Tendulkar captained East Bengal in P. Sen Trophy!". BADGEB.com. Archived from the original on 25 April 2020. Retrieved 25 April 2020.</li>
              <li> *"Sachin Tendulkar is greatest cricketer in history – Brian Lara". BBC Sport. 12 November 2013. Archived from the original on 16 November 2013. Retrieved 19 November 2013.
                <div>
                  <ul>
                    <li>"Sachin Tendulkar greatest batsman to have played cricket: Dennis Lillee". The Times of India. 26 June 2012. Retrieved 5 December 2017.</li>
                    <li>"'Why Sachin Tendulkar is the greatest' by Michael Vaughan". The Daily Telegraph. Archived from the original on 11 November 2014. Retrieved 5 December 2017.</li>
                    <li>"Is Sachin Tendulkar the greatest batsman of all time?". The Daily Telegraph. 10 October 2013. Archived from the original on 13 October 2013. Retrieved 19 November 2013.</li>
                    <li>Alex Brown (11 October 2013). "Cricket's greatest batsmen: Sachin Tendulkar v Don Bradman." Archived 16 November 2013 at the Wayback Machine News.com.au</li>
                    <li>"Revealed! What makes Sachin Tendulkar the greatest batsman..." rediff.com. Archived from the original on 5 August 2014. Retrieved 5 August 2014.</li>

                  </ul>
                </div>
              </li>

            </ol>
          </div>
          <p className='p'>External links  </p>
          <hr className='hr'></hr>
          <div className='bottom'>
            <div className='border-img2'>
              <div>
                <h4 className='align'>Sachin Tendulkar</h4>
                <p className='align'>at Wikipedia's sister projects</p>
                <hr className='hr1'></hr>

              </div>
              <div className='data'>
                <ul >
                  <li>Definitions from Wiktionary</li>
                  <li>Media from Commons</li>
                  <li>News from Wikinews</li>
                  <li>Quotations from Wikiquote</li>
                  <li>Texts from Wikisource</li>
                  <li>Data from Wikidata</li>
                </ul>
              </div>

            </div>
            <div className='bottom-links'>
              <ul>
                <li><a href='#'>Sachin Tendulkar on Facebook</a></li>
                <li><a href='#'>Sachin Tendulkar's channel on YouTube</a></li>
                <li><a href='#'>Sachin Tendulkar at ESPNcricinfo</a></li>
                <li><a href='#'>Sachin Tendulkar at Wisden India</a></li>

              </ul>
            </div>


          </div>
          <div className='line-Bar'>
            <ul>
              <li>Portals:</li>
              <li> Biography</li>
              <li> India</li>
              <li>Cricket</li>
              <li> Sport</li>
            </ul>
          </div>

        </div>

      </section >
    </div >
  </>
  )
}

export default WikipediaProject