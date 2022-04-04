import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { movieAPI } from '../../Api/movieApi'
import Carousel from '../../components/Carousel/Carousel'

export const Movie = () => {


    // Hooks
    const [content , setContent] = useState([])
    


    // fetch data

    const fetchTrending = async () => {
        const { data } = await movieAPI.get(`trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        
   
        setContent(data.results)

    }


    useEffect(() => {
        fetchTrending()

        return () => {
            setContent([])
        }
    },[])



  return (


   

    <div className='pt-3'>


            <Grid container>
                <Grid item md ={8} xs = {12} >
                 <div style={{position: 'relative'}}>
                     <Carousel content={content}/>
                 </div>
                </Grid>
                <Grid item md = {4} xs = {12} >
                    what is the meaning of life
                </Grid>
            </Grid>

    </div>
  )
}
