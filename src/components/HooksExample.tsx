import { useState, useEffect } from 'react'

// 🎣 REACT HOOKS EXAMPLE - useState + useEffect working together

function HooksExample() {
  // 🎯 useState - Managing component state
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [isOnline, setIsOnline] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // 🔄 useEffect #1 - Runs on every render (watching count changes)
  useEffect(() => {
    document.title = `Count: ${count}`
    console.log('Count changed to:', count)
  }, [count]) // Dependency: runs when count changes

  // 🔄 useEffect #2 - Runs only once (component mount)
  useEffect(() => {
    console.log('Component mounted! This runs only once.')
    
    // Simulate checking online status
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }
    
    window.addEventListener('online', checkOnlineStatus)
    window.addEventListener('offline', checkOnlineStatus)
    
    // 🧹 Cleanup function (runs when component unmounts)
    return () => {
      console.log('Cleaning up event listeners')
      window.removeEventListener('online', checkOnlineStatus)
      window.removeEventListener('offline', checkOnlineStatus)
    }
  }, []) // Empty dependency array = runs once

  // 🔄 useEffect #3 - Window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Runs once, sets up listener

  // 🔄 useEffect #4 - Multiple dependencies
  useEffect(() => {
    if (name && count > 0) {
      console.log(`${name} clicked ${count} times!`)
    }
  }, [name, count]) // Runs when name OR count changes

  // 🔄 useEffect #5 - Conditional effect
  useEffect(() => {
    if (count >= 5) {
      alert('🎉 You reached 5 clicks!')
    }
  }, [count])

  // Event handlers that update state
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1) // Functional update
  }

  const resetAll = () => {
    setCount(0)
    setName('')
  }

  const toggleOnline = () => {
    setIsOnline(!isOnline)
  }

  return (
    <div style={{ 
      border: '3px solid #8b5cf6', 
      padding: '20px', 
      margin: '10px', 
      borderRadius: '12px',
      backgroundColor: '#faf5ff'
    }}>
      <h3>🎣 React Hooks: useState + useEffect</h3>
      
      {/* State Display Section */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#ffffff', 
        borderRadius: '8px', 
        marginBottom: '15px',
        border: '1px solid #e5e7eb'
      }}>
        <h4>📊 Current State:</h4>
        <p><strong>Count:</strong> {count}</p>
        <p><strong>Name:</strong> {name || 'Not entered'}</p>
        <p><strong>Online Status:</strong> {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
        <p><strong>Window Width:</strong> {windowWidth}px</p>
      </div>

      {/* Controls Section */}
      <div style={{ marginBottom: '15px' }}>
        <h4>🎮 Controls (useState in action):</h4>
        
        <div style={{ marginBottom: '10px' }}>
          <button 
            onClick={incrementCount}
            style={{ 
              padding: '8px 16px', 
              margin: '5px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Increment Count (+)
          </button>
          
          <button 
            onClick={() => setCount(count - 1)}
            style={{ 
              padding: '8px 16px', 
              margin: '5px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Decrement Count (-)
          </button>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ 
              padding: '8px', 
              marginRight: '10px',
              border: '1px solid #d1d5db',
              borderRadius: '4px'
            }}
          />
          <label>👆 Type to see useState update name</label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <button 
            onClick={toggleOnline}
            style={{ 
              padding: '8px 16px', 
              margin: '5px',
              backgroundColor: isOnline ? '#f59e0b' : '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Toggle Online Status
          </button>
        </div>

        <button 
          onClick={resetAll}
          style={{ 
            padding: '8px 16px', 
            margin: '5px',
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          🔄 Reset All
        </button>
      </div>

      {/* Effects Explanation */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f0f9ff', 
        borderRadius: '8px',
        fontSize: '14px'
      }}>
        <h4>🔄 useEffect Examples in Action:</h4>
        <ul>
          <li><strong>Effect #1:</strong> Updates browser title when count changes</li>
          <li><strong>Effect #2:</strong> Sets up online/offline listeners (runs once)</li>
          <li><strong>Effect #3:</strong> Tracks window resize (try resizing browser!)</li>
          <li><strong>Effect #4:</strong> Logs when name AND count change</li>
          <li><strong>Effect #5:</strong> Shows alert at 5 clicks</li>
        </ul>
        <p>💡 <strong>Open browser console</strong> to see useEffect logs!</p>
      </div>

      {/* Interactive Challenges */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f0fdf4', 
        borderRadius: '8px',
        fontSize: '14px',
        marginTop: '10px'
      }}>
        <h4>🎯 Try These Interactions:</h4>
        <ol>
          <li>Click increment 5 times → See alert (useEffect with condition)</li>
          <li>Enter your name → See console log with name + count</li>
          <li>Resize browser window → Watch width update</li>
          <li>Look at browser tab title → See count in title</li>
          <li>Toggle online status → See state change</li>
        </ol>
      </div>
    </div>
  )
}

export default HooksExample
