import {  Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { movieAPI } from '../../Api/movieApi'
import CustomPagination from '../../components/Pagination'
import SingleContent from '../../components/SingleContent/SingleContent'
import TrendingPage from '../../components/Trending/TrendingPage'

export const Movie = () => {

    // Hooks
    const [content , setContent] = useState([])
    const [data , setData] = useState([])
    const [page , setPage] = useState(1)
    const [numofPages , setNumofPages] = useState(0)
    
    

    // fetch data

    const fetchTrending = async () => {
        const { data } = await movieAPI.get(
            `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=`
          );
        
        setContent(data.results)
    }

    const fetchData = async () => {
        const { data } = await movieAPI.get(
            `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
          );
        console.log(data.results);
        setData(data.results)
        setNumofPages(data.total_pages)
    }



    
    useEffect(() => {
        fetchTrending()
        fetchData()

        return () => {
            setContent([])
            setData([])
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
        


  return (
    <>
    

            <TrendingPage contentItem={contentItem} content={content}/>
Movies
          <Grid container spacing={3} className="mt-4">
                {data && data.map((item , index) => (

                    <SingleContent
                        key = { index}
                        poster = {item.poster_path}
                        voting = {item.vote_average}
                        Language = {language(item.original_language)}
                        date = {item.release_date.slice(0,4)}
                        title = {item.title || item.name}

                    />
                ))}

            </Grid>

                    {numofPages > 1 && <CustomPagination setPage={setPage}  numofPages={numofPages} /> }

    
    </>

    
  )
}
