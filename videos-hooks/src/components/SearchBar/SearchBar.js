import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')

  //Stop browser from refreshing when user submits
  const onSubmit = event => {
    event.preventDefault() //call callback from parent component
    onFormSubmit(term)
  }

  return (
    <div className='search-bar ui segment'> 
      <form onSubmit={onSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input 
            type="text"
            //Create a Controlled input by assigning the value to state
            value={term}
            //Built in Callback function
            onChange={event => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar