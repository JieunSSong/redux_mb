let initialState = {
    popularMovies:{},
    topRatedMovies:{},
    upComingMovies:{},
    loading: true,
    genreList:[],
    MovieDetails:{},
}
function movieReducer(state=initialState,action){
  let {type, payload}=action
  switch(type){
    case 'GET_MOVIES_REQUEST':
        return{...state,loading:true};
    case 'GET_MOVIES_SUCCESS':
        return {...state,
            popularMovies: payload.popularMovies,
            topRatedMovies: payload.topRatedMovies,
            upComingMovies: payload.upComingMovies,
            genreList:payload.genreList,
            MovieDetail:payload.MovieDetail,
            loading:false,
        };
    
    case 'GET_MOVIES_DETAIL_REQUEST':
        return{...state,loading:true};
    case 'GET_MOVIES_DETAIL_SUCCESS':
        return{...state,
            MovieDetail: payload.MovieDetails}
    case 'GET_MOVIES_FAILURE':
        return {...state,loading:false};
            default:
                return{...state};
  };
  }
export default movieReducer;