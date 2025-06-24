import './App.css'
import StateExamples from './components/StateExamples'
import StateRules from './components/StateRules'

function App() {
  return (
    <div className="app-container">
      <h1>React State Deep Dive �</h1>
      <p>Understanding State Management in Detail</p>
      
      {/* Comprehensive State Examples */}
      <StateExamples />
      
      {/* State Rules and Behavior */}
      <StateRules />
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
        <h3>🎯 Key Takeaways:</h3>
        <ul>
          <li><strong>State is local:</strong> Each component manages its own state</li>
          <li><strong>Immutable:</strong> Never modify state directly, always use setState</li>
          <li><strong>Reactive:</strong> State changes trigger component re-renders</li>
          <li><strong>Flexible:</strong> Can store numbers, strings, booleans, objects, arrays</li>
        </ul>
      </div>
    </div>
  )
}

export default App
