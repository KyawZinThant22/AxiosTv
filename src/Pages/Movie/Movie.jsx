import { ClassNames } from '@emotion/react'
import { Button, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'

import { movieAPI } from '../../Api/movieApi'
import Carousel from '../../components/Carousel/Carousel'
import { img_300, noPicture } from '../../Config/api-config'


const useStyles = makeStyles({
    slidebarImg : {
        height : "130px",
        marginBottom : "8px"
    },
    desce: {
        fontSize: "13px !important",
        marginBottom: "5px"
        
    }
})

export const Movie = () => {

    const classes = useStyles();

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


        //get data from 20 array as 3
        const filterItem = content?.map((item) => {
            return item
        })
  
        const slice = 7
        const contentItem = filterItem.slice(4,slice)

        console.log(contentItem);
        


  return (


   

    <div className='pt-4'>


            <Grid container  >
                <Grid item md ={8} xs = {12} className="pe-4 ">
                 <div style={{position: 'relative'}}>
                     <Carousel content={content}  media_type="movie"/>
                 </div>
                </Grid>
                <Grid item md = {4} xs = {12} className="pt-3" >
                        <div>
                                {contentItem.map((item,index) => (
                                <div key={index} className="d-flex">
                                   <div className='d-flex'>
                                        <img  className={classes.slidebarImg}  src={item.poster_path? `${img_300}/${item.poster_path}` : noPicture} alt={item.title || item.name} />
                                        <div className="about ms-4 text-light">
                                            <span className='me-2 ' style={{fontSize : "14px" , color : 'gray'}}>{item.vote_average} </span>
                                            <span className='me-2 '  style={{fontSize : "14px" , color : 'gray'}}> {item.original_language ? "English" : item.original_language}</span>
                                            <h6 className='mb-1'>{item.title || item.name}</h6>
                                                <p  className={classes.desce}>{item.overview.slice(0,80)}..</p>
                                                 
                                                 <Button variant='outlined' size='small' color='error' sx={{fontSize: "10px"}}>Watch Now</Button>
                                        </div>
                                    </div>
                                </div>
                                ))}
                        </div>
                </Grid>
            </Grid>

    </div>
  )
}
