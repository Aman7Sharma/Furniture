import React from 'react'
import '../Styles/About.css'
import Header from './Header'
import post1 from '../Images/2076099.jpg'
import post2 from '../Images/2076083.jpg'
import post3 from '../Images/2076086.jpg'
import post4 from '../Images/2076201.jpg'
import post5 from '../Images/2076227.jpg'
import post6 from '../Images/2076257.jpg'
import post7 from '../Images/2076327.jpg'
import post8 from '../Images/2076328.jpg'
import post9 from '../Images/5410465.jpg'
 

export default function About() {
  return (
    <div >
      <Header/>
      <div className="container">
        <div className="a1">
          <div className='post1'><img className='p1' src={post1} alt="" /></div>
          <div className="post-desc"> 
            <h1>We Create your home more aesthetic</h1>
            <br />
            <p>Furniture power is a software as services for multipurpose business <br /> management system</p>
            <br />
            <h3>Valuation Services</h3>
            <p>Sometimes features require a short description. This can be <br /> detailed description</p><br /><br />
            <h3>Development of Furniture Models</h3>
            <p>Sometimes features require a short description. This can be <br /> detailed description</p><br /><br />
          </div>

        </div>
        <div className="a1">
          <div className="post-desc1"> 
            <br /><br /><br /><br />
            <h1>New In Store Now</h1>
            <br /><br /><br />
            <p>Get the latest item immediately <br /> with promo prices</p>
            <br /><br /><br />
            <h4>Check All ➡</h4>
          </div>
          <div className='post2'>
            <img className='p2' src={post1} alt="" />
            <img className='p2' src={post2} alt="" />
            <img className='p2' src={post3} alt="" />
            <img className='p2' src={post4} alt="" />
            <img className='p2' src={post5} alt="" />
            <img className='p2' src={post6} alt="" />
            <img className='p2' src={post7} alt="" />
            <img className='p2' src={post8} alt="" />
            </div>


        </div>

        <div className="a1">
          <div className="post-desc2"> 
            <h1>The Best Furniture <br /> Manufacturer of your choice </h1>
            <br /> <br />
            <p>Furniture power is a software as services for multiperpose <br />
             business management system, expecially for them who are <br />
             running two or more business explore the futre Furniture <br /> power is a software as services
             <br /><br /><br /><br /><br /></p>
          </div>
          <div className='post1'><img className='p1' src={post9} alt="" /></div>

        </div>


      </div>

    </div>
  )
}
