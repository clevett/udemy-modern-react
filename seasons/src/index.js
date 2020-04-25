import React from 'react'
import ReactDOM from 'react-dom'

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  //State can be initiatilized outside a constructor
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  componentDidUpdate() {
    console.log('Did update')
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage  && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    } else {
      return <div>Loading!</div>
    }
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))