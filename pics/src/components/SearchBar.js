import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  //This is one way to solve the issue of this not being set to the correct instance
  onFormSubmit = event => {
    //Prevents browser from trying to submit the form automatically and refresh page
    event.preventDefault()

    //References the props passed down from App.js
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label> Image Search</label>
            <input 
              type='text' 
              value={this.state.term} 
              onChange={event => this.setState({ term: event.target.value })} 
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar