import { useState, useEffect } from 'react'
import youtube from '../apis/youtube'

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([])

  useEffect(() => search(defaultSearchTerm), [defaultSearchTerm])

  const search = async term => {
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
  }

  return [videos, search]
}

export default useVideos