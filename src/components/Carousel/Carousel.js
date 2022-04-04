
import { makeStyles } from '@mui/styles';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, img_500, noPicture } from '../../Config/api-config';




const useStyles = makeStyles({
    img : {
        width : "100%",
    },
    subPic :{
        width : "130px"
    },
    subPoster : {
        position: 'absolute',
        top : "200px",
        left : "30px",
        display : 'flex',
        alignItems: 'center'
    }

})






const Carousel = ({ content}) => {

  const classes = useStyles()


   

        //get data from 20 array as 3
      const filterItem = content?.map((item) => {
          return item
      })

      const slice = 3
      const contentItem = filterItem.slice(0,slice)
      


      const items = contentItem?.map((item) => (
         <>
            
            <img  className={classes.img} src={item.poster_path? `${img_500}/${item.backdrop_path}` : noPicture} alt="" />

            <div className={classes.subPoster}>
                            
                    <img  className={classes.subPic} src={item.poster_path? `${img_300}/${item.poster_path}` : noPicture} alt="" />

                    <PlayCircleOutlineIcon className='ms-4' fontSize='large' sx={{fontSize : "50px"}} color='primary' />

                        <div className='ms-4 ' >
                           <h5>{item.title || item.name}</h5>

                           <span className='me-2'>{item.vote_average} </span>
                           <span className='me-2'> {item.original_language ? "English" : item.original_language}</span>
                           <span>{item.media_type == 'movie'?  "Movie" : "Tv Series"}</span>

                           <p className='mt-3'>{item.overview.slice(0,150)}</p>
                        </div>
            </div> 

           
         </>
      ))
     

      
      return(
          <div>
      <AliceCarousel mouseTracking items={items} autoPlay  autoPlayInterval={3000} infinite disableButtonsControls disableDotsControls />



          </div>
      )

  

  


}




export default Carousel

