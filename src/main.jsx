//react
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

//redux
import store from './redux/store/store.js'
import { Provider } from 'react-redux'

import axios from 'axios'

//styles
import './index.css'

// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://videogamesback-production-a383.up.railway.app/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
