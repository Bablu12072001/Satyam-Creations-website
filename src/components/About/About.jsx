import React from 'react'
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';

function About() {
  return (
    <>
      <center>
      <div className='w-full h-16 bg-gray-500 mt-10 rounded-md lg:w-2/3 lg:h-12'>
        <h1 className='text-center m-2 text-2xl text-white font-bold lg:text-4xl'>
          We at Satyam Creations make Wood look Good
        </h1>
      </div>
      </center>
      <div className='ml-5 mr-5 lg:ml-20 lg:mr-20'>
      <div className='text-2xl mt-10'>
      <StarHalfOutlinedIcon />
      <span> </span>We offer a wide variety of Solid Wood Furniture, and we specialize in furniture made of Indian rosewood (Popularly known as <span className='text-blue-600'>‘Sheesham Wood’</span>). 
      </div>
      <div className='text-2xl mt-10'>
        <StarHalfOutlinedIcon />
        <span> </span>Sheesham Wood is amongst most valuable timber sourced in India. Sourced from the best trees from around the country, this timber is very <span className='text-blue-600'>durable and perfect for making furniture.</span>. 
      </div>
      <div className='text-2xl mt-10'>
        <StarHalfOutlinedIcon />
        <span> </span>Our experienced craftsmen offer an amazing combination of <span className='text-blue-600'> modern style and classic elegance.</span>. 
      </div>
      <div className='text-2xl mt-10 mb-10'>
        <StarHalfOutlinedIcon />
        <span> </span>Our wide range of products offer solution to furniture needs of <span className='text-blue-600'>Homes, Hotels, Restaurants and Office.</span>. 
      </div>
      </div>
    </>
  )
}

export default About