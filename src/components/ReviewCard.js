import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'

  const ReviewCard = ({review}) => {
    return (
      <div className='ReviewCard'
      style={{color:'#fff'}}
      >
      <span className='cast member'></span>
      <div>{review?.updated_at}</div>
      <div><FontAwesomeIcon icon={faUser} />{review?.author}</div>
      <div>{review?.content}</div>
      </div>
    )
  }

export default ReviewCard