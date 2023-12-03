import React from 'react'
import '../Styles/Home.css'
import Header from './Header'
import bg from '../Images/2076113.jpg'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg">
        {/* <img className='bg-img' src={bg} alt="background" /> */}
        <div className='slogan'>
         Creative Home Simpify your <br />Furniture
        </div>
        <div className='slog-desc'>Decorate your Home where Comfort Meets Style  <br /> Making Your Home Feel Perfect</div>
        <div className='shop'> <a href="/products">
          <button className='shop-link'  href="/products">Shop Now</button>
          </a></div>
        <div className="stats">
          <div className="stats-det"><span>25+</span><br />Year Exprience</div>
          <div className="stats-det"><span>2</span><br />Opened In Jamshedpur</div>
          <div className="stats-det"><span>50k+</span><br />Furniture Sold</div>
          <div className="stats-det"><span>100+</span><br />Varient Furniture</div>
        </div>
        <img className='bg-img' src={bg} alt="background" />

      </div>

    </div>
  )
}
