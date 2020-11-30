import React, {useState} from 'react'

const Search = () => {
  const [term, setTerm] = useState('')

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input 
            className='input' 
            onChange={event => setTerm(event.target.value)} 
            type='text' 
            value={term}
          />
        </div>
      </div>
    </div>
  )
}

export default Search