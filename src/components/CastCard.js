import React from 'react'

const CastCard = ({item}) => {
  return (
    <div  >
      <div className='castImg'>
        {(item.profile_path?
          (<img src={`https://image.tmdb.org/t/p/original//${item.profile_path}`} style={{width:'200px'}}/>)
          :(<img src='https://unsan.nonghyup.com/user/unsan/sopmal/images/goods/egovtemp_201607271036213000.jpg'style={{width:'200px', height:'300px'}}/>))}
      </div>
      <div className='castTitle'>
        {item.name}
      </div>
    </div>
  )
}

export default CastCard