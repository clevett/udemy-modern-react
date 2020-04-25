//Import the React and ReactDOM Libraires
import React from 'react'
import ReactDOM from 'react-dom'

// Create a react component
const App = () => {
  const buttonText = "Click Me!";
  
  return (
    <div>
      <label class="label">Enter name:</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  )
}

// Take the react compnent and show it on the screen
ReactDOM.render(< App />, document.querySelector('#root') )
