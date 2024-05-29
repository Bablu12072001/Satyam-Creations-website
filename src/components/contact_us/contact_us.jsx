import React from 'react'
import CallIcon from '@mui/icons-material/Call';

function contact_us() {
  return (
    <>
      <center>
        <div className='w-11/12 h-20 bg-green-600 shadow-md text-white text-center text-3xl font-bold rounded-lg mt-10 mb-10 transition-transform duration-300 hover:scale-105 hover:shadow-blue-700
                            lg:w-1/2 lg:h-10'>
          Call now for Oreder
          <span> </span>
          {/* <CallIcon />
          <span> </span> */}
          6202548771
        </div>
        {/* <hr className='mb-10 ml-52 mr-52 '/> */}
        <div className='w-11/12 shadow-lg border-2 border-black bg-neutral-500 rounded-2xl mb-10 transition-transform duration-300 hover:scale-105 hover:shadow-blue-700
                          lg:w-1/2'>
          <p className='text-center text-xl font-bold text-white mt-20'>Address</p>
          <hr className='mt-1 mb-1 ml-20 mr-20'/>
          <p className='text-md font-semibold text-white'>
            PLOT NO. F-73A, Road Number 2, RIICO INDUSTRIAL AREA,<br /> Churu Rajasthan 331001
          </p>
          <p className='text-center text-xl font-bold text-white mt-10'>Contact</p>
          <hr className='mt-1 mb-1 ml-20 mr-20'/>
          <p className='text-md font-semibold text-white'>
            7976140566
          </p>
          <p className='text-center text-md font-bold text-white mt-10'>Email</p>
          <hr className='mt-1 mb-1 ml-20 mr-20'/>
          <p className='text-md font-semiboldn text-white mb-20'>

            satyamcreationsashish@gmail.com 
          </p>
        </div>
      </center>
    </>
  )
}

export default contact_us