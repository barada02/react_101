import { useState } from 'react'

// 🔄 STATE EXAMPLE - Internal component data that can change

function Counter() {
  // State: data that belongs to this component and can change
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Click the button!')

  const handleClick = () => {
    setCount(count + 1)
    setMessage(`You clicked ${count + 1} times!`)
  }

  const resetCounter = () => {
    setCount(0)
    setMessage('Click the button!')
  }

  return (
    <div style={{ border: '2px solid #059669', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>🔢 Counter (State)</h3>
      <p><strong>Count:</strong> {count}</p>
      <p><strong>Message:</strong> {message}</p>
      <button onClick={handleClick} style={{ margin: '5px', padding: '8px 16px' }}>
        Click Me!
      </button>
      <button onClick={resetCounter} style={{ margin: '5px', padding: '8px 16px' }}>
        Reset
      </button>
      <br />
      <small>🔄 This data is managed internally by the component (state)</small>
    </div>
  )
}

export default Counter
