import { useState } from "react";

function Home(){
    return (
        <>
        <div style={{backgroundColor: "gray"}}>
            <h2>Home</h2>
            <Counter />
        </div>
        <Footer />
        </>
    )
}

function Counter(){
    const [counter,setCounter] = useState(1);

    function addCounter() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={addCounter}>Add</button>
        </div>
    )
}

function Footer(){
    return (
        <div className="cFooter">
            Footer Here
        </div>
    )
}

export default Home;