import './App.css';
import React from 'react'
const useState = React.useState


function App() {

    // const [myStateVariable, setMyStateVariable] = useState('Initial Value')

    // let whatUseStateRetursns = useState(false);
    // let myThing = whatUseStateReturns[0];
    // let changeMyThing = whatUseStateReturns[1];

    // The old way
    //<button onClick={() => count += 1}></button>

    //The React Way
    //<button onClick = {() => setCount(count + 1)}>Click me!</button>

    const [name, setName]  = useState('Alex')
    const [count, setCount] = useState(0)
    const [nameInput, setNameInput] = useState('')

    const handleClick = () =>{
        console.log("I clicked");
        setCount(count + 1)
    }
        const handleSubmit = () => {
            setName(nameInput)
            setNameInput('')
        }
    
    return (
        <div className="App">
            {/* <input onChange={() => console.log('name changed!')} placeholder="Name"/> */}
            {/* <input onChange={(event) => console.log('name changed!' , event.target.value)} placeholder="Name"/> */}
            <input value={nameInput} onChange={(event) => setNameInput(event.target.value)} placeholder="Name"/>
            <button onClick={handleSubmit}>Submit</button>
            <p>Hello! My name is {name}.</p>
            {/* <button    onClick = {() => console.log('clicked!')}    >Click me!</button> */}
            <button onClick = {handleClick}>Click me!</button>
            <p>I've clicked the button {count} times.</p>
        </div>
    );

}

export default App;