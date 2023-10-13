import React from 'react'
import '../style/Banner.css'
const Banner = ({movie}) => {
  return (
    <div className='mainBanner'
    style={{backgroundImage : "url("+
    `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`
    +")"
      }}
      >
      <div className='movie_info'>
        <h2 className='title'>{movie.original_title}</h2>
        <p className='vote'>
          <span className='badge_01'>IMDb</span>
          {movie.vote_average}/100</p>
        <p className='overview'>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Banner