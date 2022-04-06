import { Button, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import React from 'react'
import { Link } from 'react-router-dom'
import { img_300, noPicture } from '../../Config/api-config'
import Carousel from '../Carousel/Carousel'


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

const TrendingPage = ({contentItem,content}) => {
    const classes = useStyles();
  return (
    <div className='pt-4 mt-5 pt-5'>
    <Grid container  >
        <Grid item md ={8} xs = {12} className="pe-4 ">
         <div style={{position: 'relative', cursor:'pointer'}}>
             <Carousel content = {content}  media_type="movie"/>
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
                                         
                                        <Link to = {`${item.id}`}>
                                            <Button variant='outlined' size='small' color='error' sx={{fontSize: "10px"}}>Watch Now</Button>
                                        </Link>
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

export default TrendingPage