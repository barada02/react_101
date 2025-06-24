# Props vs State 🎯

## What We Built
A clear comparison between Props and State with interactive examples.

---

## 📥 Props Example (UserCard)

```tsx
// Component receives props from parent
function UserCard(props: UserCardProps) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  )
}

// Parent passes data as props
<UserCard name="Alice" age={25} city="New York" />
<UserCard name="Bob" age={30} city="London" />
```

### Key Points about Props:
- ✅ **Data flows FROM parent TO child**
- ✅ **Read-only** - child cannot modify props
- ✅ **Different data** for each component instance
- ✅ **Passed as attributes** in JSX

---

## 🔄 State Example (Counter)

```tsx
function Counter() {
  // State belongs to this component
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Click the button!')

  const handleClick = () => {
    setCount(count + 1)                    // Update state
    setMessage(`You clicked ${count + 1} times!`)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Message: {message}</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}
```
App.tsx:
```tsx
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
```
### Key Points about State:
- ✅ **Internal component data**
- ✅ **Can be modified** using setState functions
- ✅ **Triggers re-render** when changed
- ✅ **Independent** - each component has its own state

---

## 🔄 Visual Comparison

### Props Flow:
```
App Component (Parent)
    ↓ passes data
UserCard Component (Child)
    ↓ displays data
User sees: "Alice, 25, New York"
```

### State Flow:
```
Counter Component
    ↓ manages own data
Button Click Event
    ↓ updates state
Component Re-renders
    ↓ shows new data
User sees: updated count
```

---

## 🎯 Key Differences

| Aspect | Props | State |
|--------|-------|-------|
| **Source** | Parent component | Component itself |
| **Mutability** | Read-only | Can be changed |
| **Purpose** | Pass data down | Manage internal data |
| **Triggers Re-render** | When parent updates | When state changes |
| **Scope** | External data | Internal data |

---

## 🚀 What You Can Observe

### Props in Action:
- Two UserCard components with different data
- Each shows different name, age, city
- Data comes from App component (parent)

### State in Action:
- Two Counter components with independent counters
- Each has its own count and message
- Clicking one doesn't affect the other
- Data is managed within each component

---

## 💡 Real-World Analogy

### Props = Ingredients Given to Chef
- Chef (component) receives ingredients (props) from supplier (parent)
- Chef cannot change the ingredients
- Different chefs get different ingredients

### State = Chef's Cooking Process
- Chef manages their own cooking steps (state)
- Chef can change cooking temperature, timing, etc.
- Each chef cooks independently

---

## 🔍 Interactive Learning

Try this in your app:
1. **Props**: Notice how Alice and Bob show different information
2. **State**: Click counters and see how each maintains its own count
3. **Independence**: Each counter works separately
4. **Re-rendering**: State changes trigger visual updates

---

## 🎯 Next Steps

Now you understand:
- ✅ Props pass data between components
- ✅ State manages component's internal data
- ✅ Both are essential for React apps

Next topics to explore:
- Event handling (already saw onClick!)
- Lifting state up
- useEffect hook
- Custom hooks

Great job! You're building a solid React foundation! 🚀
