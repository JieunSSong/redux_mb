import React from 'react'
import { useEffect, useState } from 'react';
import '../style/GenreBox.css';
import api from '../redux/api';
import { useSelector } from "react-redux";
import Card from './Card'

const API_KEY=process.env.REACT_APP_API_KEY;
const GenreMovie = () => {
  const [movieGenreList, setMovieGenreList]=useState();
  const getMovieGenreList = async ()=>{
    let url = `/movie/popular?api_key=${API_KEY}&language=en-US&page=5`;
    let response = await api.get(url);
    let data = response.data;
    setMovieGenreList(data);
  };
  //console.log("무비리스트", movieGenreList && movieGenreList);

  useEffect(() => {
    getMovieGenreList();
  }, []);
  return (
    <div className='genreWrap'>
      <h2 className='genreTitle'>Animation</h2>
      <div className='genrePartLise'>
        {movieGenreList?.results
        .filter(({ genre_ids }) => genre_ids.includes(16))
        .map((item, index) =>(
          <Card 
          key={index}
          item={item}></Card>
        ))}
      </div>
      <h2 className='genreTitle'>Action</h2>
      <div className='genrePartLise'>
        {movieGenreList?.results
        .filter(({ genre_ids }) => genre_ids.includes(80))
        .map((item, index) =>(
          <Card 
          key={index} item={item}></Card>
        ))}
      </div>
      <h2 className='genreTitle'>Horror</h2>
      <div className='genrePartLise'>
        {movieGenreList?.results
        .filter(({ genre_ids }) => genre_ids.includes(27))
        .map((item, index) =>(
          <Card 
          key={index} item={item} className='Card'></Card>
        ))}
      </div>
    </div>
  )
}

export default GenreMovie