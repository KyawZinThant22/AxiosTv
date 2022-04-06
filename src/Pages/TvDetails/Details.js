import { YouTube } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { movieAPI } from '../../Api/movieApi';
import { img_300, img_500 } from '../../Config/api-config';
import styles from "./Details.module.css"

const Details = () => {

  const { id } = useParams();


    // hooks
    const [movie , setMovie] = useState([]);
    const [movieVideo , setMovieVideo] = useState()

    const [Series , setSeries] = useState([]);
    const [SeriesVideo , setSeriesVideo] = useState()
  
  


    // fetch movie data according to id
    const fetchMovieData = async () => {
        const { data } = await movieAPI.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setMovie(data)
        console.log(data);
        setSeries(false)

       
       
    }
  
//   fetch series video according to id
    const fetchMovieVideo = async () => {
        const { data } = await movieAPI.get (`/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setMovieVideo(data.results[0]?.key)
    }

    // fetch series data according to id
    const fetchSeriesData = async () => {
        const { data } = await movieAPI.get(`/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        
        setSeries(data)
        setMovie(false)
        
    }
  
//   fetch series video according to id
    const fetchSeriesVideo = async () => {
        const { data } = await movieAPI.get (`/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setSeriesVideo(data.results[0]?.key)
    }

    useEffect(() => {
        fetchMovieData()
        fetchMovieVideo()
        fetchSeriesData()
        fetchSeriesVideo()
        

        return () => {
            fetchMovieData([])
            fetchMovieVideo([])
            fetchSeriesData([])
            fetchSeriesVideo([])
        }
    },[])

    const language = (language) => {
        if ( language === "en"){
            return "English"
        }else if (language === "es"){
            return "Spain"
        }else if (language === "ja"){
            return "Japan"
        }else return "None"
    }

    console.log(Series);
  
  return (
    <div className='mt-md-5 pt-md-5'>

        {/* for Movie */}
            {movie && (
              <Grid container className='d-flex mt-5 pt-5 justify-content-center flex-xs-column '   >

                <Grid item xs ={12} md ={6}   > 
                        <img
                                src={
                                `${img_300}${movie.poster_path}` ||
                                "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
                                }
                                alt="movie logo"
                                className={styles.imgLeft}
                            />
                </Grid> 
                    <Grid item xs={12} md ={6}>
                    <div className="aboutDetails mt-md-5 pt-md-5 text-xs-center">
                                <h4 className='fw-bolder'>{movie.title || movie.name} </h4>

                                <span className=''>{language(movie.original_language)}</span>
                                <span className='me-3 ms-3  text-warning  '>IMDB : {movie.vote_average}</span>
                                <span>{movie.runtime} min</span>

                                <h6 className='mt-3'>Overview:</h6>
                                <p className='mt-2 fs-6 text-light '>{movie.overview}</p>

                                <p className='mb-sm-4'>Released : {movie.release_date}</p>

                                

                                <Button

                                        variant="contained"
                                        startIcon={<YouTube/>}
                                        color="error"
                                        target="__blank"
                                        href={`https://www.youtube.com/watch?v=${movieVideo}`}
                                        className ="mt-lg-2 mt-sm-3 mb-sm-3 text-light"
                                        id="btn-watch"
                                        style={{marginBottom : "20px"}}
                                    >
                                    Watch the Trailer
                                </Button>
    
                        </div>
                    </Grid>
              
              </Grid>
            )}




{/* for Series */}
{Series && (
              <Grid container className='d-flex mt-5 pt-5 justify-content-center flex-xs-column '   >

                <Grid item xs ={12} md ={6}   > 
                        <img
                                src={
                                `${img_300}${Series.poster_path}` ||
                                "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
                                }
                                alt="Series logo"
                                className={styles.imgLeft}
                            />
                </Grid> 
                    <Grid item xs={12} md ={6}>
                    <div className="aboutDetails mt-md-5 pt-md-5 text-xs-center">
                                <h4 className='fw-bolder'>{Series.title || Series.name} </h4>

                                <span className=''>{language(Series.original_language)}</span>
                                <span className='me-3 ms-3  text-warning  '>IMDB : {Series.vote_average}</span>
                                <span>{Series.number_of_seasons} Season</span>

                                <h6 className='mt-3'>Overview:</h6>
                                <p className='mt-2 fs-6 text-light '>{Series.overview}</p>

                                <p className='mb-sm-4'>Released : {Series.release_date}</p>

                                

                                <Button

                                        variant="contained"
                                        startIcon={<YouTube/>}
                                        color="error"
                                        target="__blank"
                                        href={`https://www.youtube.com/watch?v=${SeriesVideo}`}
                                        className ="mt-lg-2 mt-sm-3 mb-sm-3 text-light"
                                        id="btn-watch"
                                        style={{marginBottom : "20px"}}
                                    >
                                    Watch the Trailer
                                </Button>
    
                        </div>
                    </Grid>
              
              </Grid>
            )}

    </div>
  )
}

export default Details