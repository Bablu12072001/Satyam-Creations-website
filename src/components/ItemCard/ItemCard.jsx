import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { useSelector, useDispatch } from 'react-redux'




function ItemCard(props) {
    const dispatch = useDispatch()

    return (
        <div className='h-96 w-72 bg-gray-700 mr-2 border-black border-0 rounded-lg shadow-md shadow-black hover:drop-shadow-lg mt-4 lg:mt-0
        transition-transform duration-300 hover:scale-105 hover:shadow-blue-700'>

            <div className='bg-gray-500 h-72 w-72 rounded-t-lg'>
                <img
                    className='h-72 w-72 rounded-t-lg'
                    src={props.imagePath1}
                    alt={props.name}
                />
            </div>
            <center>
                <Link
                    //to='/ItemDetail/'
                    className='text-white font-bold'
                >
                    {props.name}
                </Link>
            </center>


            <div className='justify-center rounded-lg'>
                <center>
                    <Link to="/contact">
                        <button className='bg-white h-8 w-56 m-3 text-lg font-bold rounded-lg'>
                            {/* <CallOutlinedIcon /> */}
                            Order now
                        </button>
                    </Link>
                </center>
            </div>
        </div>
    )
}

export default ItemCard