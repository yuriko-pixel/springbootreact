import React, { Component } from "react";
import ReactDOM from "react-dom";


export class App extends Component {
    render() {
        return (
            <div>Hello</div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));