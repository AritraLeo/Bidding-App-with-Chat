import { useState } from 'react'
import './App.css'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useSocket } from './context/SocketProvider'

function App() {

  const { sendMessage } = useSocket();
  const [message, setMessage] = useState('')

  return (
    <>
      <div>
        <div>
          <h1>Messages</h1>
        </div>
        <div className='d-flex flex-row'>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={(e) => sendMessage(message)}>Send</Button>
          </InputGroup>
        </div>
      </div>
    </>
  )
}

export default App
