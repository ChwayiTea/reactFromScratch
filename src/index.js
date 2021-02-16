import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    return(
        <div>
            <h1>React app from scratch</h1>
            <h3>Hello World React</h3>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));