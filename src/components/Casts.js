import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import api from '../redux/api';
import CastCard from './CastCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';

const API_KEY=process.env.REACT_APP_API_KEY

const Casts = ({item}) => {
    const {id} = useParams();
    const [character,setCharacter]=useState([])
    const getCast=async()=>{
        let url=`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        let response = await api.get(url)
        let data = response.data;
        setCharacter(data)
        console.log("출연진",data)
  }

  useEffect(()=>{ getCast();}, [])

  return (
    <div className='Cast'>
      <h1>Cast Member</h1>
      <div className='castMember'
        style={{display:'flex'}}>
        {character.cast&&character.cast.length>0?
          character.cast.slice(0,5).map((item)=>
          <CastCard item={item}/>):null
        }
      </div>
    </div>
  )
}

export default Casts