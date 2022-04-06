import { Button, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { img_300 } from '../../Config/api-config';
import styles from "./Single.module.css"
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';







const SingleContent = (props) => {



    const {poster,voting , Language , date , title ,id, media_type} = props;

  



  return (
    <Grid item xs={6} sm ={3}  lg ={2}  >
      <Link to={`${id}`}>
            <div className={styles.SingleContainer}>
                    <img className={styles.singleImg}  src={`${img_300}/${poster}`}  /> 

                    <div className="subContaienr p-2">

                     <StarIcon fontSize='small' color='primary'/>
                     <span className='me-2  text-secondary  '>{voting}</span>
                     <span className='me-2'>{Language}</span>
                     <span className='me-2 text-secondary'>{date}</span>
                       <Typography variant='body2' className='mt-1 p-1 text-light '>
                           {title}
                       </Typography>
                       
                       <Button startIcon={<PlayArrowIcon />} variant="contained" size='small' fullWidth className='my-3' color='error' sx={{textTransform:'capitalize'}}  >
                                Watch Now
                       </Button>
                    </div>
            </div>  
          </Link>
    </Grid>
  )
}

export default SingleContent