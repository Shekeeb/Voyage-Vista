import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../Asset/helsinki.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaTripadvisor } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='footer'>

      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter E-mail Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>SEND<FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'><MdOutlineTravelExplore className='icon' />Voyage Vista.</a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">Keep calm and travel on.</div>

            <div data-aos="fade-up" className="footerSocials flex">
              <BsTwitterX className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">

            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex"><FiChevronRight className='icon' />Services</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Insurance</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Agency</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Tourism</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Payment</li>
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex"><FiChevronRight className='icon' />Bookings</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Rent Cars</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Hostel World</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Trivago</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Trip Advisor</li>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">TOP DESTINATIONS</span>
              <li className="footerList flex"><FiChevronRight className='icon' />London</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Manali</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Maldives</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Europe</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Lakshadweep</li>
            </div>

            <div data-aos="fade-up" data-aos-duration="6000" className="linkGroup">
              <span className="groupTitle">OFFBEAT DESTINATIONS</span>
              <li className="footerList flex"><FiChevronRight className='icon' />Gokarna</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Amsterdam</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Chicago</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Toronto</li>
              <li className="footerList flex"><FiChevronRight className='icon' />Munnar</li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small>COPYRIGHTS RESERVED 2024<br />VOYAGE VISTA PVT.LTD</small>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer