import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import GreetingMessage from './components/GreetingMessage'

function App() {
  return (
    <div className="app-container">
      <h1>React Components Comparison 🚀</h1>
      <p>App() is also a functional component!</p>
      
      {/* Using Functional Component */}
      <WelcomeMessage />
      
      {/* Using Class Component */}
      <GreetingMessage />
      
      <p>Both components render the same way!</p>
    </div>
  )
}

export default App
