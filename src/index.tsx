import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.scss'
import './fonts/AunchantedXspace.ttf'
import './fonts/AunchantedXspaceBold.ttf'
import './fonts/AunchantedXspaceThin.ttf'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
