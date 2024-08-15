import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
/* import './index.css' */
import HousePricePred from './housePricePred.jsx'
import Dropdown from './test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*  <App /> */}
    <HousePricePred/>
  </StrictMode>
)
