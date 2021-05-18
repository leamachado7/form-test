import React, { useEffect, useState } from 'react'
import './index.scss'
import Signup from './containers/signup'
import CreateServer from './services/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [server, setServer] = useState(null)
  useEffect(() => {
    setServer(CreateServer());
  } , [])
  return (
    <div className="app">
      <Signup />
      <ToastContainer/>
    </div>
  );
}

export default App;
