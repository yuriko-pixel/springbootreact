import React, { Component } from "react";
import ReactDOM from "react-dom";

const endpoint = 'http://localhost:8080/user/all ';


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: []
        };
      }

    getUsers() {
        fetch(endpoint)
            .then((results) => results.json()
            )
            .then(data => {
                const arr = [...this.state.users, data];
            	this.setState({users: arr});
                const testarr =  [{id: 1, name: "Yuriko", surname: "Darragh", email: "test@gmail.com", username: "yuriko);↵"}];
                console.log(testarr);
            })
            .catch(() => {
                console.log('通信に失敗しました。');
            });
    }

    render() {
        

        return (
            <div>
                <p>{this.state.username}</p>
                <input type="button" onClick={()=>this.getUsers()}/>
                {
	                   this.state.users.map(i=>{return (<div>{i.name}</div>)})
                }
                {this.state.test}
            </div>
    );
    }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));