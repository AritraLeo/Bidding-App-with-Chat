import { useState } from 'react'
import './App.css'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useSocket } from './context/SocketProvider'

function App() {

  const { sendMessage, messages, bidAmounts, makeBid } = useSocket();
  const [message, setMessage] = useState('')
  const [bidAmount, setbBidAmount] = useState(0)

  return (
    <>
      <div>
        <div className='d-flex flex-row' style={{ justifyContent: 'space-between', gap: 160 }}>
          <div>
            <h1>Messages</h1>
            <div>
              {
                messages.map((msg) => (
                  <p>
                    {msg}
                  </p>
                ))
              }
            </div>
          </div>

          <div>
            <h1>Bids</h1>
            <div>
              {
                bidAmounts.map((bid) => (
                  <p>
                    {bid}
                  </p>
                ))
              }
            </div>
          </div>
        </div>
        <div className='d-flex flex-row' style={{ justifyContent: 'space-between', gap: 160 }}>
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
          <div className='d-flex flex-row'>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setbBidAmount(parseInt(e.target.value))}
              />
              <Button onClick={(e) => makeBid(bidAmount)}>Send</Button>
            </InputGroup>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
