import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
//component
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide'; 
import GenreMovie from '../components/GenreMovie'
//react-spinners
import { useState, CSSProperties } from "react";
import GridLoader from "react-spinners/GridLoader";
const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector(state=>state.movie);
  //console.log('인기영화',popularMovies);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  },[]);

  //로딩이 true명 스피너 보여주고, false면 데이터 보여준다.
  if(loading){
    return 
    <GridLoader color='#BE123C' loading={loading} size={150}/>
  }
  return (
    <div>
      {/* 로딩스피너 */}
      <GridLoader color='#BE123C' loading={loading} size={150}/>
      {/* 배너영역 */}
      {<Banner movie={popularMovies.results[0]}/>}
      {/* 슬라이드 */}
      <div  className='movieSlideWrap'>
        <h2>Popular Movies</h2>
        {<MovieSlide movies={popularMovies}/>}
        <h2>TopRated Movies</h2>
        {<MovieSlide movies={topRatedMovies}/>}
        <h2>upComing Movies</h2>
        {<MovieSlide movies={upComingMovies}/>}
      </div>
      <div className='movieGenre'>
        <h2>What about movies in these genres?</h2>
        <GenreMovie/>
      </div>
    </div>
  )
}

export default Home