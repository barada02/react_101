import { useState, useEffect, useRef } from 'react'

// 🔬 UNDERSTANDING STATE BEHAVIOR

function StateRules() {
  const [message, setMessage] = useState('Initial state')
  const [previousValue, setPreviousValue] = useState('')
  const renderCountRef = useRef(0)  // ✅ Use ref instead for render counting
  
  // ✅ FIXED: This runs only when message changes
  useEffect(() => {
    renderCountRef.current += 1
  }, [message]) // 🎯 Dependency array - only run when message changes

  const updateMessage = () => {
    setPreviousValue(message) // Store current value
    setMessage(`Updated at ${new Date().toLocaleTimeString()}`)
  }
  const resetState = () => {
    setMessage('Initial state')
    setPreviousValue('')
    renderCountRef.current = 0  // ✅ Reset ref counter
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
        <p>Render Count: <strong>{renderCountRef.current}</strong></p>
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
          <li>✅ <strong>Triggers re-render:</strong> Component re-renders when state changes</li>          <li>✅ <strong>Functional updates:</strong> Use prev value: setState(prev =&gt; prev + 1)</li>
          <li>🆕 <strong>useEffect dependencies:</strong> Control when effects run</li>
        </ul>
      </div>

      <div style={{ padding: '10px', backgroundColor: '#f0fdf4', borderRadius: '5px', fontSize: '14px', marginTop: '10px' }}>
        <h4>🔄 useEffect Patterns:</h4>
        <ul>
          <li>❌ <code>useEffect(() =&gt; {})</code> - Runs after every render (infinite loop risk)</li>
          <li>✅ <code>useEffect(() =&gt; {}, [])</code> - Runs only once (on mount)</li>
          <li>✅ <code>useEffect(() =&gt; {}, [state])</code> - Runs when state changes</li>
        </ul>
      </div>
    </div>
  )
}

export default StateRules
