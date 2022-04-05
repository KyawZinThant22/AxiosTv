import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { movieAPI } from '../../Api/movieApi';
import CustomPagination from '../../components/Pagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import TrendingPage from '../../components/Trending/TrendingPage';

const Series = () => {

  const [content , setContent ] = useState([]);
  const [data , setData] = useState([])
  const [page , setPage] = useState(2)
  const [numofPages , setNumofPages] = useState(0)


    // fetch data

    const fetchTrending = async () => {
      const { data } = await movieAPI.get(`/discover/tv?api_key=${process.env.REACT_APP_API_KEY}`)
      setContent(data.results)

  }


  const fetchData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
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
    if ( language == "en"){
        return "English"
    }else if (language == "es"){
        return "Spain"
    }else if (language == "ja"){
        return "Japan"
    }else return "None"
}


  return (
    <div>

        <TrendingPage contentItem={contentItem} content ={content} />

      Series

        <Grid container spacing={2} className="mt-4">
                {data && data.map((item , index) => (

                    <SingleContent
                    poster = {item.poster_path}
                    voting = {item.vote_average}
                    Language = {language(item.original_language)}
                    date = {item.first_air_date.slice(0,4)}
                    title = {item.title || item.name}
                    />
                ))}

            </Grid>
            {numofPages > 1 && <CustomPagination setPage={setPage}  numofPages={numofPages} /> }

    </div>
  )
}

export default Series