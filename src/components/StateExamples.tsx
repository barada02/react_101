import { useState } from 'react'

// 🔄 COMPREHENSIVE STATE EXAMPLES

function StateExamples() {
  // 1. Simple State - Single value
  const [count, setCount] = useState(0)
  
  // 2. String State
  const [name, setName] = useState('')
  
  // 3. Boolean State
  const [isVisible, setIsVisible] = useState(true)
  
  // 4. Object State
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 25
  })
  
  // 5. Array State
  const [items, setItems] = useState(['Apple', 'Banana'])

  // Event handlers for different state updates
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const toggleVisibility = () => setIsVisible(!isVisible)

  const updateUser = () => {
    setUser({
      ...user, // Keep existing properties
      age: user.age + 1 // Update only age
    })
  }

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`
    setItems([...items, newItem]) // Create new array with existing items + new item
  }

  const removeLastItem = () => {
    setItems(items.slice(0, -1)) // Remove last item
  }

  return (
    <div style={{ border: '2px solid #7c3aed', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>🔄 State Management Examples</h3>
      
      {/* 1. Number State */}
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '5px' }}>
        <h4>📊 Number State</h4>
        <p>Count: <strong>{count}</strong></p>
        <button onClick={increment} style={{ margin: '2px', padding: '5px 10px' }}>+</button>
        <button onClick={decrement} style={{ margin: '2px', padding: '5px 10px' }}>-</button>
        <button onClick={reset} style={{ margin: '2px', padding: '5px 10px' }}>Reset</button>
      </div>

      {/* 2. String State */}
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f1f5f9', borderRadius: '5px' }}>
        <h4>📝 String State</h4>
        <input 
          type="text" 
          value={name} 
          onChange={updateName} 
          placeholder="Type your name"
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <p>Hello, <strong>{name || 'Anonymous'}</strong>!</p>
      </div>

      {/* 3. Boolean State */}
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f0f9ff', borderRadius: '5px' }}>
        <h4>👁️ Boolean State</h4>
        <button onClick={toggleVisibility} style={{ padding: '5px 10px', marginBottom: '10px' }}>
          {isVisible ? 'Hide' : 'Show'} Message
        </button>
        {isVisible && <p>🎉 This message is controlled by boolean state!</p>}
      </div>

      {/* 4. Object State */}
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fefce8', borderRadius: '5px' }}>
        <h4>👤 Object State</h4>
        <p>Name: <strong>{user.firstName} {user.lastName}</strong></p>
        <p>Age: <strong>{user.age}</strong></p>
        <button onClick={updateUser} style={{ padding: '5px 10px' }}>
          Have Birthday 🎂
        </button>
      </div>

      {/* 5. Array State */}
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f0fdf4', borderRadius: '5px' }}>
        <h4>📋 Array State</h4>
        <p>Items: {items.join(', ')}</p>
        <button onClick={addItem} style={{ margin: '2px', padding: '5px 10px' }}>Add Item</button>
        <button onClick={removeLastItem} style={{ margin: '2px', padding: '5px 10px' }}>Remove Last</button>
      </div>

      <small>🔄 Each state update triggers a re-render of this component!</small>
    </div>
  )
}

export default StateExamples
