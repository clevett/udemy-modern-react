import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import StreamCreate from '.streams/StreamCreate'
import StreamDelete from '.streams/StreamDelete'
import StreamEdit from '.streams/StreamEdit'
import StreamList from '.streams/StreamList'
import StreamShow from '.streams/StreamShow'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Router path='/' exact component={StreamList}></Router>
        <Router path='/streams/new' exact component={StreamCreate}></Router>
        <Router path='/streams/edit' exact component={StreamEdit}></Router>
        <Router path='/streams/delete' exact component={StreamDelete}></Router>
        <Router path='/streams/show' exact component={StreamShow}></Router>
      </div>
    </BrowserRouter>
  )
}

export default App