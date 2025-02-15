import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
   <div className='d-flex justify-content-center align-items-center mt-5 bg-success-subtle'>
    <div className='footer d-flex align-item-center justify-content-evenly mt-5'>
      <div className='website'style={{width:"400px"}}>
        <h5><i class="fa-solid fa-leaf"></i> GREENY</h5>
        <p style={{textAlign:"justify"}}>Greeny - Your One-Stop Plant Haven!
        Greeny brings nature closer to you with a curated collection of plants for every space. Whether you're a seasoned gardene or a beginner, we offer a variety of indoor and outdoor plants to brighten up your home.</p>
      </div>
      <div className='links d-flex flex-column ms-5'>
        <h4>Links</h4>
        <Link to='/'style={{textDecoration:'none',color:"black"}}>Home</Link>
        <Link to='/cart'style={{textDecoration:'none',color:"black"}}>Cart</Link>
        <Link to='/wishlist'style={{textDecoration:'none',color:"black"}}>Wishlist</Link>
        <Link to='/login'style={{textDecoration:'none',color:"black"}}>Login</Link>
        </div>
        <div className='guides d-flex flex-column ms-5'>
        <h4>Guides</h4>
        <Link to='https://react.dev/' target='_blank'style={{textDecoration:'none',color:"black"}}>React</Link>
        <Link to='https://react-bootstrap.netlify.app/'style={{textDecoration:'none',color:"black"}}>React Bootstrap</Link>
        <Link to='https://bootswatch.com/'style={{textDecoration:'none',color:"black"}}>Boots Watch</Link>
      </div>
      <div className='contactus ms-5'>
        <h4>Contact Us</h4>
        <div className='d-flex'>
          <input type="text" className='form-control' placeholder='enter your email'/>
          <button className='btn btn-success ms-3' style={{color:'white'}}>Subscribe</button>
        </div>
        <div className='d-flex-justify-content-evenly align-items-center mt-3'>
       <Link><i class="fa-brands fa-instagram fa-2x ms-5 "style={{ color: 'green' }}></i></Link>
         <Link><i class="fa-brands fa-twitter fa-2x ms-5"style={{ color: 'green' }}></i></Link>   
         <Link><i class="fa-brands fa-facebook fa-2x ms-5"style={{ color: 'green' }}></i></Link>   
         <Link><i class="fa-brands fa-linkedin fa-2x ms-5"style={{ color: 'green' }}></i></Link>    
       
        </div>
      </div>
      </div>
      </div>

   <p className='mt-5 text-center'>Copyright &copy;2025 Greeny. Built with React</p>
   </>
  )
}

export default Footer