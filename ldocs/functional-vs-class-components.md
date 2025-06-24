# Functional vs Class Components 🎯

## What We Built
A simple comparison showing both types of React components side by side.

---

## 🎯 Functional Component

```tsx
function WelcomeMessage() {
  return (
    <div>
      <h2>Hello from Functional Component! 👋</h2>
      <p>I'm simple and modern</p>
    </div>
  )
}
```

### Key Points:
- ✅ **Just a JavaScript function**
- ✅ **Takes props as parameters** (we'll learn this next)
- ✅ **Returns JSX**
- ✅ **Modern React way** (recommended)
- ✅ **Can use React Hooks** for state and effects

---

## 🏗️ Class Component

```tsx
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
```

### Key Points:
- ✅ **ES6 class that extends Component**
- ✅ **Must have a render() method**
- ✅ **render() returns JSX**
- ✅ **Traditional React way** (still works)
- ❌ **Cannot use React Hooks** (uses lifecycle methods instead)

---

## 🔄 How They Work

### Functional Component Flow:
```
1. React calls WelcomeMessage()
2. Function executes and returns JSX
3. React renders the JSX to DOM
```

### Class Component Flow:
```
1. React creates instance of GreetingMessage class
2. React calls the render() method
3. render() returns JSX
4. React renders the JSX to DOM
```

---

## 🚀 Key Differences

| Aspect | Functional | Class |
|--------|------------|-------|
| **Syntax** | Simple function | ES6 class |
| **State** | useState hook | this.state |
| **Lifecycle** | useEffect hook | componentDidMount, etc. |
| **Performance** | Slightly faster | Slightly slower |
| **Code** | Less boilerplate | More boilerplate |
| **Modern React** | ✅ Recommended | ❌ Legacy |

---

## 🎯 When to Use What?

### Use Functional Components When:
- ✅ Building new React applications
- ✅ You want cleaner, simpler code
- ✅ You want to use modern React features
- ✅ Performance is important

### Use Class Components When:
- ✅ Working with legacy codebases
- ✅ Team is more familiar with classes
- ✅ Using older React versions (< 16.8)

---

## 🔍 What's the Same?

Both components:
- ✅ Return JSX
- ✅ Can receive props
- ✅ Can be reused multiple times
- ✅ Follow the same component lifecycle
- ✅ Render exactly the same way

---

## 💡 Next Steps

Now that you understand both types, we'll focus on:
1. **Props** - Passing data to components
2. **State** - Managing component data
3. **Events** - Handling user interactions
4. **Hooks** - Modern state management

Let's stick with **functional components** going forward as they're the modern standard! 🚀
