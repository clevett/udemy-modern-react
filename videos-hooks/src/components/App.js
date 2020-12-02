import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import VideoList from './VideoList/VideoList'
import VideoDetail from './VideoDetail/VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
  const [selected, setSelected] = useState(null)
  const [videos, search] = useVideos('bad wolves')

  useEffect(() => setSelected(videos[0]), [videos])

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selected} />
          </div>
          <div className='five wide column'>
            <VideoList 
              onVideoSelect={setSelected} 
              videos={videos} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default App