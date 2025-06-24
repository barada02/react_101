import './App.css'
import { Component } from 'react'

// 🎯 FUNCTIONAL COMPONENT (Modern React Way)
function WelcomeMessage() {
  return (
    <div>
      <h2>Hello from Functional Component! 👋</h2>
      <p>I'm simple and modern</p>
    </div>
  )
}

// 🏗️ CLASS COMPONENT (Traditional React Way)
class GreetingMessage extends Component {
  render() {
    return (
      <div>
        <h2>Hello from Class Component! 🎓</h2>
        <p>I'm traditional but still works</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="app-container">
      <h1>React Components Comparison 🚀</h1>
      
      {/* Using Functional Component */}
      <WelcomeMessage />
      
      {/* Using Class Component */}
      <GreetingMessage />
      
      <p>Both components render the same way!</p>
    </div>
  )
}

export default App
