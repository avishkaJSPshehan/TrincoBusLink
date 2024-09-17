import React from 'react'
import './footer.css'
import video2 from '../../Assets/footer_video.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillFacebook, AiFillInstagram, AiFillTikTok, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type='text' placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore/>  TrincoBusLink.
              </a>
            </div>

            <div className='footerParagraph'>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type 
            specimen book.
            </div>

            <div className='footerSocials flex'>
              <AiOutlineTwitter className='icon'/>
              <AiFillInstagram className='icon'/>
              <AiFillFacebook className='icon'/>
              <AiFillTikTok className='icon'/>
            </div>
          </div>

          <div className='footerLinks grid'>

            {/*Group One*/}
            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>

            {/*Group Two*/}
            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>

            {/*Group Three*/}
            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>

          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Footer
