import React,{useEffect} from 'react'
import './main.css'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import img1 from '../../Asset/niagra.jpg'
import img2 from '../../Asset/kovalam.jpg'
import img3 from '../../Asset/eiffel.jpg'
import img4 from '../../Asset/statueofliberty.jpg'
import img5 from '../../Asset/tajmahal.jpg'
import img6 from '../../Asset/christtheredeemer.jpg'
import img7 from '../../Asset/bora.jpg'
import img8 from '../../Asset/opera.jpg'
import img9 from '../../Asset/agatti.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Niagara Falls",
    location: "Niagara",
    grade: 'Trip Advisor',
    fee: "$1500",
    description: "Niagara Falls, located on the border between the United States and Canada, is a breathtaking natural wonder that captivates visitors with its powerful cascades of water and stunning beauty. The falls consist of three main sections: the Horseshoe Falls, American Falls, and Bridal Veil Falls, each offering a unique perspective and awe-inspiring views. Visitors can take boat tours, such as the iconic Maid of the Mist, to get up close to the thundering falls, explore scenic hiking trails, or enjoy panoramic views from observation decks and viewpoints. It's not wonder somed people wait a lifetime to see Niagara."
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Kovalam beach",
    location: "Trivandrum",
    grade: 'Trip Advisor',
    fee: "$250",
    description: "Kovalam is an internationally renowned beach with three adjacent crescent beaches. It has been a favourite haunt of tourists since the 1930s. A massive rocky promontory on the beach has created a beautiful bay of calm waters ideal for sea bathing. The leisure options at this beach are plenty and diverse."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "The Eiffel Tower",
    location: "Paris",
    grade: 'Trip Advisor',
    fee: "$2700",
    description: "The Eiffel Tower, is an iconic symbol of Paris and one of the world's most recognizable landmarks. It attracts approximately 7 million visitors each year. Its towering presence and intricate ironwork offer breathtaking panoramic views of the city. Rising over 300 meters above the Parisian skyline, the Eiffel Tower offers multiple levels for exploration and observation, as well as a range of restaurants."
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Statue of Liberty",
    location: "New York",
    grade: 'Trip Advisor',
    fee: "$1300",
    description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, United States.The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel."
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Taj Mahal",
    location: "Agra",
    grade: 'Trip Advisor',
    fee: "$950",
    description: "The Taj Mahal is an ivory - white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself."
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Christ the Redeemer",
    location: "Rio de Janiero",
    grade: 'Trip Advisor',
    fee: "$1150",
    description: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French - Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot.Romanian sculptor Gheorghe Leonida sculpted the face."
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Bora Bora",
    location: "French Polynesia",
    grade: 'Trip Advisor',
    fee: "$1350",
    description: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.Surrounded by sand - fringed motus(islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving.It's also a popular luxury resort destination where some guest bungalows are perched over the water on stilts. At the island's center rises Mt.Otemanu, a 727m dormant volcano."
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Sydney Opera House",
    location: "Sydney",
    grade: 'Trip Advisor',
    fee: "$900",
    description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture."
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Agatti Island",
    location: "Lakshadweep",
    grade: 'Trip Advisor',
    fee: "$750",
    description: "Agatti Island is a 7.6 km long island, situated on a coral atoll called Agatti atoll in the Union Territory of Lakshadweep, India.It is 459 km west of the city of Kochi."
  }
  

]

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="setContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, fee, grade, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>

                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>{fee}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon' />
                  </button>

                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main