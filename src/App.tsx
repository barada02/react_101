import './App.css'
import UserCard from './components/UserCard'
import Counter from './components/Counter'

function App() {
  return (
    <div className="app-container">
      <h1>Props vs State Example 🚀</h1>
      <p>Understanding the difference between Props and State</p>
      
      {/* PROPS EXAMPLE - Passing data TO components */}
      <UserCard name="Alice" age={25} city="New York" />
      <UserCard name="Bob" age={30} city="London" />
      
      {/* STATE EXAMPLE - Component manages its own data */}
      <Counter />
      <Counter />
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
        <p><strong>📥 Props:</strong> Data passed FROM parent TO child components</p>
        <p><strong>🔄 State:</strong> Data managed WITHIN a component that can change</p>
      </div>
    </div>
  )
}

export default App
