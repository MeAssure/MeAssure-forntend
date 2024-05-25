import { useState } from 'react'

import './App.css'
import AppBar from './components/AppBar/AppBar.jsx'
import MenuBar from './components/MenuBar/MenuBar.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'

function App() {
  const [dashTitle, setDashTitle] = useState("DASHBOARD");
  return (
    <>
      <AppBar/>
      <div style={{display:'flex', flex: 1}}>
        <MenuBar changer = {setDashTitle}/>
        <Dashboard title={dashTitle}/>
      </div>
    </>
  );
}

export default App
