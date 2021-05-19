import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Signup from './containers/signup'
import CreateServer from './services/index'
import './index.scss'
function App() {
  useEffect(() => {
    CreateServer()
  } , [])
  return (
    <div className="app">
      <Signup />
      <ToastContainer/>
    </div>
  );
}

export default App;
