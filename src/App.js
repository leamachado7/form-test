import React, { useEffect, useState } from 'react'
import './index.scss'
import Signup from './containers/signup'
import CreateServer from './services/index'
function App() {
  const [server, setServer] = useState(null)
  useEffect(() => {
    setServer(CreateServer());
  } , [])
  return (
    <div className="app">
      <Signup />
    </div>
  );
}

export default App;
