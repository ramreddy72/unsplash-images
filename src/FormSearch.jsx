import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useGlobalContext } from './GlobalContext'

const FormSearch = () => {
  const { setSearchTerm } = useGlobalContext()

  const handleSubmitForm = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    console.log(searchValue)
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form action="" className="search-form" onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}

export default FormSearch
