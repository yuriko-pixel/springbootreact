import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

const endpoint = '/user/all';


export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: {}
        };
      }

    render() {
        return (
            <div>
                <input type="button" onClick={()=>this.getUsers()}/>
            </div>
    );
    }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));