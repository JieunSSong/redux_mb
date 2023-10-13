import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../style/GenreBox.css';

const Card = ({item}) => {
  const navigate = useNavigate();
  const goMovieDetail = () =>{
    navigate(`/movies/${item.id}`)
  }
  return (
    <div className='genreBox' onClick={goMovieDetail}>
      <img src={
        `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} className='genreBoxImg'>
      </img>
      <h1>{item.title}</h1>
    </div>
  )
}
export default Card