import './App.css'
import HooksExample from './components/HooksExample'

function App() {
  return (
    <div className="app-container">
      <h1>React Hooks Deep Dive 🎣</h1>
      <p>Understanding useState and useEffect working together</p>
      
      {/* Comprehensive Hooks Example */}
      <HooksExample />
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
        <h3>🎯 Key Learning Points:</h3>
        <ul>
          <li><strong>useState:</strong> Manages component state that can change</li>
          <li><strong>useEffect:</strong> Handles side effects and lifecycle events</li>
          <li><strong>Dependencies:</strong> Control when effects run with dependency arrays</li>
          <li><strong>Cleanup:</strong> Return functions from useEffect for cleanup</li>
          <li><strong>Together:</strong> State changes can trigger effects, effects can update state</li>
        </ul>
      </div>
    </div>
  )
}

export default App
