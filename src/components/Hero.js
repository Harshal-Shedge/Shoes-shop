import React from 'react'

function Hero() {
  return (
   <main className='hero'>
    <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora veniam praesentium libero iste pariatur explicabo quibusdam numquam doloremque autem!</p>
    <div className='hero-button'>
        <button>Shop Now</button>
        <button className='secondary-button'>Category</button>
    </div>
    <div className='shopping'>
    <p>Also Available Now</p>
        <div className='brand-icon'>
            <img src="/images1/flipkart.png" alt="flipcart" />
            <img src="/images1/amazon.png" alt="amazon" />
        </div>
    </div>
    </div>
    <div className='hero-image'>
    <img src="/images1/shoe_image.png" alt="shoeimage" />
    </div>
   </main>
  )
}

export default Hero
