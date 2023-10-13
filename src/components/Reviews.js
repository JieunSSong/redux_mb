import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import api from '../redux/api'
import ReviewCard from './ReviewCard';

const API_KEY=process.env.REACT_APP_API_KEY;
const Reviews = ({item}) => {
  const {id} = useParams();
  //console.log('아이디가 뭐지', id)
  const [review, getReview]=useState([])
  const getReviews=async()=>{
      let url=`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      let response = await api.get(url)
      let data = response.data;
      getReview(data)
  }
  useEffect(()=>{
      getReviews();
  },[])
return (
    <div>
      <h3 
      className='reviewTab'
      style={{
        fontSize:'2rem',
        color:'#fff',
        fontWeight:800,
      }}>REVIEWS&#40;	
      {review.results&&review.results.length}&#41;
      </h3>
      <div className='reviewTotal'>
        {
        review.results?
        review.results.map((review)=>
        <ReviewCard review={review}/>):null
        }
      </div>
    </div>
  )
}

export default Reviews