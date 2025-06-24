import { useState, useEffect } from 'react'

// 🔬 UNDERSTANDING STATE BEHAVIOR

function StateRules() {
  const [renderCount, setRenderCount] = useState(0)
  const [message, setMessage] = useState('Initial state')
  const [previousValue, setPreviousValue] = useState('')

  // This runs after every render
  useEffect(() => {
    setRenderCount(prev => prev + 1)
  })

  const updateMessage = () => {
    setPreviousValue(message) // Store current value
    setMessage(`Updated at ${new Date().toLocaleTimeString()}`)
  }

  const resetState = () => {
    setMessage('Initial state')
    setPreviousValue('')
    setRenderCount(0)
  }

  // ❌ WRONG WAY - Never mutate state directly
  const wrongWay = () => {
    // message = 'This is wrong!' // ❌ Don't do this!
    alert('❌ Never mutate state directly! Always use setState functions.')
  }

  // ✅ RIGHT WAY - Always use setter function
  const rightWay = () => {
    setMessage('This is the right way! ✅')
  }

  return (
    <div style={{ border: '2px solid #dc2626', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>🔬 State Rules & Behavior</h3>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fef2f2', borderRadius: '5px' }}>
        <h4>📊 State Tracking</h4>
        <p>Render Count: <strong>{renderCount}</strong></p>
        <p>Current Message: <strong>{message}</strong></p>
        <p>Previous Message: <strong>{previousValue || 'None'}</strong></p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h4>🔄 State Updates</h4>
        <button onClick={updateMessage} style={{ margin: '5px', padding: '8px 12px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '4px' }}>
          ✅ Update State (Right Way)
        </button>
        <button onClick={wrongWay} style={{ margin: '5px', padding: '8px 12px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px' }}>
          ❌ Wrong Way Example
        </button>
        <button onClick={rightWay} style={{ margin: '5px', padding: '8px 12px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px' }}>
          ✅ Right Way Example
        </button>
        <button onClick={resetState} style={{ margin: '5px', padding: '8px 12px', backgroundColor: '#6b7280', color: 'white', border: 'none', borderRadius: '4px' }}>
          🔄 Reset All
        </button>
      </div>

      <div style={{ padding: '10px', backgroundColor: '#fffbeb', borderRadius: '5px', fontSize: '14px' }}>
        <h4>📚 Key State Rules:</h4>
        <ul>
          <li>✅ <strong>Always use setState:</strong> setMessage('new value')</li>
          <li>✅ <strong>State is immutable:</strong> Don't modify state directly</li>
          <li>✅ <strong>Async updates:</strong> State updates may be batched</li>
          <li>✅ <strong>Triggers re-render:</strong> Component re-renders when state changes</li>
          <li>✅ <strong>Functional updates:</strong> Use prev value: setState(prev =&gt; prev + 1)</li>
        </ul>
      </div>
    </div>
  )
}

export default StateRules
