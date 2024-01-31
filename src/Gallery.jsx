import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useGlobalContext } from './GlobalContext'

const Gallery = () => {
  const { searchTerm } = useGlobalContext()

  const url = `https://api.unsplash.com/search/photos/?client_id=Exd0ni-pvrQL5FiTB28VFSEvwoxyVnc16ORyWoPQ33c&query=${searchTerm}`

  const { isLoading, isError, data } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(url)
      return result.data
    },
  })
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading....</h4>
      </section>
    )
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error....</h4>
      </section>
    )
  }
  const results = data.results
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found....</h4>
      </section>
    )
  }
  console.log(results)
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        )
      })}
    </section>
  )
}

export default Gallery
