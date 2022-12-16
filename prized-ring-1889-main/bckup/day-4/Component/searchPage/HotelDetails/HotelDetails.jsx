

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import trvloLogo from "../HotelsList/gitWanderlust.gif";

import AboutHotel from './AboutHotel'
import FetchDataAxios from '../FetchDataAxios'
const url=`localhost:8080/hotel`

const HotelDetails = () => {
    const { id } = useParams()
    console.log('id:', id)
    const [isLoading, setIsLoading] = useState(false)

    // const { hotelData } = FetchDataAxios(`${url}/${id}`)
    // console.log('hotelData[0]:', hotelData[0])
    // console.log('hotelData:', hotelData)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true)
        }, 2500);
    }, [])

    const styles = {
        progress: {
            width: '20%',
            margin: '200px auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

        img: {
            width: '100px',
        },

    }

    return (
        <>
            {isLoading && hotelData.length > 0 ?
                <div>
                    <AboutHotel hotelData={hotelData[0]} id={id} />
                </div>
                : <div style={styles.progress}>
                    <img src={trvloLogo} alt="" style={styles.img} />
                    <CircularProgress color='secondary'/>
                </div>}
        </>
    )
}

export default HotelDetails
