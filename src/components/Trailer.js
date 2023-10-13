import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import api from '../redux/api';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilm} from '@fortawesome/free-solid-svg-icons'
import YouTube from 'react-youtube';

const API_KEY=process.env.REACT_APP_API_KEY

const Trailer = ({item}) => {
    const [modalShow, setModalShow] = React.useState(false);
    const {id} = useParams();
    console.log("예고편아이디",id)
    const [video,setVideo]=useState([])

    const getVideo=async()=>{
        let url=`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        let response = await api.get(url)
        let data = response.data;
        setVideo(data)
        console.log("예고편?",data)
    }
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal {...props} size="lg" centered>
          <Modal.Header className="bg-dark p-3 trailerMain" closeButton>MAIN TRAILER
          </Modal.Header>
          <YouTube className="videoYt"
                  //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                  videoId={video.results&&video.results?video.results[0].key:null}
                  onEnd={(e)=>{e.target.stopVideo(0);}}      
                  />
          </Modal>
        );
      }
    useEffect(()=>{
        getVideo();
    },[])

  return (
    <div>
     <Button variant="dark" className='trailer' onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faFilm}/>WATCH TRAILER</Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(true)}
              />
    </div>
  )
}

export default Trailer