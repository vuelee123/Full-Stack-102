// Intro to React Exercise

// create a functional component...
import React, {useState} from 'react'

function Counter () {
    const [count, setCount] = useState(0)

// implement two functions increment/decrement count value by 1
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    // create two button to display - & + 
return (
    <div className="div">
        <h1>Intro to React</h1>
    <div className="container">
    <button className="btn" onClick={decrement}>-</button>
    <span className="num">{count}</span>
    <button className="btn" onClick={increment}>+</button>
    
    </ div>
    </div>
)
}

// export the Counter function (component)
export default Counter
    
  