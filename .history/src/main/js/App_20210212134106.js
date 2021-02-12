import React, { Component } from "react";
import ReactDOM from "react-dom";

const endpoint = 'http://localhost:8080/user/all ';


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          test: ''
        };
      }

    getUsers() {
        fetch(endpoint)
            .then((results) => results.json()
            )
            .then(data => {
                const arr = [...this.state.users, data];
                console.log(arr);
                console.log(this.state.users == arr);
            	this.setState({users: [...this.state.users, data]});
                this.setState({test: 'TEST'})
            })
            .catch(() => {
                console.log('通信に失敗しました。');
            });
    }

    render() {
        const testarr =  [{id: 1, name: "Yuriko", surname: "Darragh", email: "test@gmail.com", username: "yuriko);↵"}];
    
        return (
            <div>
                <p>{this.state.username}</p>
                <input type="button" onClick={()=>this.getUsers()}/>
                {
                   testarr.map(i=>{<ul><li>{i.username}</li></ul>})
                }
                {this.state.test}
            </div>
    );
    }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));