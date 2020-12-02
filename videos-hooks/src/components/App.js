import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar/SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList/VideoList'
import VideoDetail from './VideoDetail/VideoDetail'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    onTermSubmit('bad wolves')
  }, [])

  const onVideoSelect = video =>  setSelected(video)

  const onTermSubmit = async term => {
    const KEY = ''; //Add key
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });

    setVideos(response.data.items)
    setSelected(response.data.items[0])
  }

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selected} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
    )
}


export default App