import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

const MovieCard = ({item}) => {
  const navigate = useNavigate();
  const {genreList} = useSelector((state => state.movie));
  const goMovieDetail =()=>{
    navigate(`/movies/${item.id}`)
  }
  //console.log('goMovieDetail', goMovieDetail);
  return (
      <div
      className='MovieCard'
      style={{
        backgroundImage :
        "url(" +
        `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`+
        ")",
      }} onClick={goMovieDetail}>
        <div className='overlay'>
          <p>{item.release_date}</p>
          <h2>{item.title}</h2>
          <h3><span className='badge_01'>IMDb</span>{item.vote_average}/100</h3>
          <div className='genrewrap'>
            {item.genre_ids.map((id, index)=>(
              <p className='genre'key={index}>
                {genreList.find(item =>item.id == id).name }
              </p>
            ))}
          </div>
          <span>{item.adult ? '청불':'Under 18'}</span>
        </div>
      </div>
  )
}
export default MovieCard