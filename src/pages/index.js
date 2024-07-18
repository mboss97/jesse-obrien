import * as React from "react"
import '../assets/scss/main.scss'
import Project1 from '../assets/images/project-1.jpg'
import Project2 from '../assets/images/project-2.jpg'
import Project3 from '../assets/images/project-3.jpg'
import Project4 from '../assets/images/project-4.png'
import Project5 from '../assets/images/project-5.png'
import Project6 from '../assets/images/project-6.jpg'
import Project7 from '../assets/images/project-7.jpg'
import Project8 from '../assets/images/project-8.png'
import Project9 from '../assets/images/project-9.jpg'
import Project11 from '../assets/images/project-11.jpg'
import Project12 from '../assets/images/project-12.png'
import Project13 from '../assets/images/project-13.jpg'
import Project14 from '../assets/images/project-14.png'
import Project16 from '../assets/images/project-16.png'
import Project17 from '../assets/images/project-17.jpg'
import Project18 from '../assets/images/project-18.jpg'
import Project19 from '../assets/images/project-19.jpg'
import Project20 from '../assets/images/project-20.jpg'
import Project21 from '../assets/images/project-21.jpg'
import Project22 from '../assets/images/project-22.jpg'
import Project23 from '../assets/images/project-23.jpg'
import Project24 from '../assets/images/project-24.jpg'
import Project25 from '../assets/images/project-25.jpg'
import Slider from 'react-slick'

const IndexPage = () => {

  const slider = React.useRef(null)
  const [clients, setClients] = React.useState(false)

  // turn images into an array
  const images = [
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
    Project7,
    Project8,
    Project9,
    Project11,
    Project12,
    Project13,
    Project14,
    Project16,
    Project17,
    Project18,
    Project19,
    Project20,
    Project21,
    Project22,
    Project23,
    Project24,
    Project25
  ]

  // random sort the images
  images.sort(() => Math.random() - 0.5)


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
  }

  return (
    <>
      <main className='main'>
        <h1>Jesse O'Brien</h1>
        <section className='slider' onClick={() => slider.current.slickNext()}>
          <Slider ref={slider} {...settings}>
            {images.map((image, index) => (
              <div key={index} className='slide'><img src={image} alt="Jesse O'Brien" /></div>
            ))}
          </Slider>
        </section>
        <ul id="contact">
          <li><a href="mailto:jesse@jesseobrien.com.au">jesse@jesseobrien.com.au</a></li>
          <li><a href="tel+61 422 287 731">+61 422 287 731</a></li>
          <li><a href="https://instagram.com/jesselobrien">Instagram</a></li>
          <li><button onClick={() => setClients(true)}>Clients</button></li>
        </ul>
        <section className={`clients${clients ? ' active' : ''}`} onClick={() => setClients(false)}>
          <ul>
            <li><strong>Fashion</strong></li>
            <li>Zara</li>
            <li>Cotton On Group</li>
            <li>Topshop</li>
            <li>Topman</li>
            <li>David Jones</li>
            <li>adidas</li>
            <li>Ksubi</li>
            <li>Diesel</li>
            <li>Sportsgirl</li>
            <li>Nobody Denim</li>
            <li>White Story</li>
            <li>Witchery</li>
            <li>Mimco</li>
            <li>Bardot</li>
            <li>Prene Bags</li>
            <li>The Forme</li>
            <li>Foot Locker</li>
            <li>Lee</li>
            <li>Puma</li>
            <li>Havaianas</li>
            <li>Bershka</li>
            <li>Jaggad</li>
            <li></li>
            <li><strong>Hair &amp; Beauty</strong></li>
            <li>YSL</li>
            <li>L’Oréal</li>
            <li>Redken</li>
            <li>Kérastase</li>
            <li>Kiehl’s</li>
            <li>La Roche-Posay</li>
            <li>Urban Decay</li>
            <li>Pureology</li>
            <li>Matrix</li>
            <li>GHD</li>
            <li>Muk</li>
            <li>Headstudio</li>
            <li>Biba</li>
            <li>Toni&amp;Guy</li>
            <li>Trés She</li>
            <li></li>
            <li><strong>Publications &amp; Press</strong></li>
            <li>Russh magazine (AUS)</li>
            <li>Oyster magazine (AUS)</li>
            <li>Fashion Trend (AUS)</li>
            <li>Mens Style Australia magazine (AUS)</li>
            <li>Madison magazine (AUS)</li>
            <li>Cleo magazine (AUS)</li>
            <li>marie claire online (AUS)</li>
            <li>Vogue online (AUS)</li>
            <li>Harper’s BAZAAR online (AUS)</li>
            <li>Manuscript Daily online</li>
            <li>INSTYLE magazine (AUS)</li>
            <li>The Wearer’s Right (AUS)</li>
            <li>Remix magazine (NZ)</li>
            <li>Culture magazine online (AUS)</li>
            <li>InStyle magazine online (AUS)</li>
            <li>New York magazine online (USA)</li>
            <li>Frankie magazine online (AUS)</li>
            <li>Scoop Magazine (AUS)</li>
            <li>Spook magazine (AUS)</li>
            <li>Stab magazine (AUS)</li>
            <li>Shop Til You Drop magazine (AUS)</li>
            <li>Vice magazine (AUS)</li>
            <li>Monster children (AUS)</li>
            <li>-</li>
            <li>Herald Sun</li>
            <li>The Australian</li>
            <li>The Sunday Telegraph</li>
            <li>Sydney Morning Herald</li>
            <li>Brisbane Times</li>
            <li>The Weekly Review</li>
            <li>-</li>
            <li>Fashion TV (FTV)</li>
            <li>The Morning Show (CH7)</li>
            <li></li>
            <li></li>
            <li><strong>Entertainment</strong></li>
            <li><strong></strong>EMI</li>
            <li>Future Entertainment</li>
            <li>Onelove Totem Group</li>
            <li>Jam</li>
            <li>360 Agency</li>
            <li></li>
            <li><strong>Financial</strong></li>
            <li>National Australia Bank</li>
            <li></li>
            <li></li>
            <li><strong>Automotive</strong></li>
            <li>Ford</li>
            <li>Liberty Oil Australia</li>
            <li></li>
            <li><strong>Photographic</strong></li>
            <li>Pentax</li>
            <li>Sigma</li>
            <li></li>
            <li><strong>FMCG</strong></li>
            <li>Sony</li>
            <li>Starward</li>
            <li>Redbull</li>
            <li>Rekorderlig Cider</li>
            <li>Hendrick’s Gin</li>
            <li>Glenfiddich</li>
            <li>Ketel One</li>
            <li>Cointreau</li>
            <li>Smirnoff</li>
            <li>Russian Standard Vokda</li>
            <li>Dunhill</li>
            <li>Winfield</li>
            <li>Streets Cornetto</li>
            <li>Wrigley’s 5 gum</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default IndexPage