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

    getUsers() {
        axios
            .get(endpoint)
            .then((results) => results.json()
            )
            .then(data => {
                this.state = data;
                console.log(this.state);
            })
            .catch(() => {
                console.log('通信に失敗しました。');
            });
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