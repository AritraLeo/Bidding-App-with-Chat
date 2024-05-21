import { useState } from 'react'
import './App.css'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useSocket } from './context/SocketProvider'

function App() {

  const { sendMessage, messages, bidAmounts, makeBid, socketId } = useSocket();
  const [message, setMessage] = useState('')
  const [bidAmount, setbBidAmount] = useState(0)

  return (
    <>
      <div>
        <div className='d-flex flex-row' style={{ justifyContent: 'space-between', gap: 160 }}>
          <div>
            <h1>Bid & Chat</h1>
            <div>
              {
                messages.map((msg) => (
                  <p>
                    Message from user {socketId} is -
                    <br />
                    {msg}
                  </p>
                ))
              }
              {
                bidAmounts.map((bid) => (
                  <p>
                    Bid from user - {socketId} is -
                    <br />
                    {bid}
                  </p>
                ))
              }
            </div>
            <div className='d-flex flex-row'>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="enter Message"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button onClick={(e) => sendMessage(message)}>Send</Button>
              </InputGroup>
            </div>
            <div className='d-flex flex-row'>
              <InputGroup className="mb-3" style={{ justifyContent: 'space-between', gap: 60 }}>
                <Form.Control
                  placeholder="Enter Bid amount"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setbBidAmount(parseInt(e.target.value))}
                />
                <Button onClick={(e) => makeBid(bidAmount)}>Bid Custom</Button>
                {/* onChange={(e) => setbBidAmount(parseInt(e.target.value))} */}
                <Button onClick={(e) => makeBid(bidAmount + 0.25 * bidAmount)}>+25%</Button>
                <Button onClick={(e) => makeBid(bidAmount + 0.50 * bidAmount)}>+50%</Button>
                <Button onClick={(e) => makeBid(bidAmount + 0.75 * bidAmount)}>+75%</Button>
              </InputGroup>
            </div>
          </div>

          <div>
            {/* <h1>Bids</h1>
            <div>
              {
                bidAmounts.map((bid) => (
                  <p>
                    {bid}
                  </p>
                ))
              }
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
