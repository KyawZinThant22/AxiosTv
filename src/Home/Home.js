
import React, { useEffect, useState } from 'react'


import { movieAPI } from '../Api/movieApi'
import TrendingPage from '../components/Trending/TrendingPage'

export const Home = () => {

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
  
        const slice = 8
        const contentItem = filterItem.slice(4,slice)

       
        

  return (

      <>
      
          <TrendingPage contentItem={contentItem} content={content}/>

      </>
    
  )
}
