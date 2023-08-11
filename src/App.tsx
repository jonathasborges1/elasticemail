import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Grid } from '@mui/material'
import { addContacts } from './modules/contacts'
import { contactsMocks, listNames } from './modules/contacts/IContactPayload'

function App() {
  const [count, setCount] = useState(0)

  const handleAddContact = () => {
    addContacts(contactsMocks,listNames);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Grid container>
        <Grid item xs={12}>
          <Button variant='contained' onClick={()=>handleAddContact()}>Cadastrar Usuarios</Button>
        </Grid>
      </Grid>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
