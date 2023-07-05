import { Lilita_One } from 'next/font/google'
import Link from 'next/link'
import style from '@styles/MapAddress.module.scss'

const lilita = Lilita_One({
  weight: "400",
  subsets: ['latin']
})

const MapAddress = () => {
  return (
    <div className={style.container}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3333674985597!2d73.82619727505126!3d18.513831469380346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb12a6fe48d%3A0x7c5faf18901673bf!2sDynastical%20Communication%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1687763798734!5m2!1sen!2sin" width="100%" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className={`${style.address} ${lilita.className}`}>
          <h1 className={style.title}>our office !</h1>
          <h2 className={style.officeAddress}>Minar Apartment, Law College Road, Pune</h2>
          <h3 className={style.phone}>Phone: 
          <Link className='px-2 cursor-pointer' href={'tel: +918766962067'}>+91 87669 62067</Link>
          <span>/</span>
          <Link className='px-2 cursor-pointer' href={'tel: +919175772356'}>+91 91757 72356</Link>
          </h3>
          <h4 className={style.email}>connectdynastical@gmail.com</h4> 
      </div>
    </div>
  )
}

export default MapAddress