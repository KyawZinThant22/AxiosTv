
import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'


import { movieAPI } from '../Api/movieApi'
import CustomPagination from '../components/Pagination'
import SingleContent from '../components/SingleContent/SingleContent'
import TrendingPage from '../components/Trending/TrendingPage'

export const Home = () => {

    // Hooks
    const [content , setContent] = useState([])
    const [page , setPage] = useState(1)
    const [numofPages , setNumofPages] = useState(0)
    // fetch data

    const fetchTrending = async () => {
        const { data } = await movieAPI.get(`trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        setContent(data.results)
        setNumofPages(data.total_pages)

    }

    useEffect(() => {
        fetchTrending()

        return () => {
            setContent([])
        }
    },[page])


        //get data from 20 array as 3
        const filterItem = content?.map((item) => {
            return item
        })
  
        const slice = 8
        const contentItem = filterItem.slice(4,slice)

        const language = (language) => {
            if ( language === "en"){
                return "English"
            }else if (language === "es"){
                return "Spain"
            }else if (language === "ja"){
                return "Japan"
            }else return "None"
        }

        const dateSlice = (date) => {
           if ( date) {
               return date.slice(0,4)
           }
            
        }
      
  return (

      <>
      
          <TrendingPage contentItem={contentItem} content={content}/>

          <Grid container spacing={2} className="mt-4">
                {content.length > 0? ( content.map((item , index) => (

                    <SingleContent
                    id = {item.id}
                    key = { index}
                    poster = {item.poster_path}
                    voting = {item.vote_average}
                    Language = {language(item.original_language)}
                    date = {dateSlice(item.release_date)}
                    title = {item.title || item.name} 
                    media_type = {item.media_type}
                    />
                ))) : <div className="lds-hourglass"></div>}

            </Grid>
            {numofPages > 1 && <CustomPagination setPage={setPage}  numofPages={numofPages} /> }

    

      </>
    
  )
}
