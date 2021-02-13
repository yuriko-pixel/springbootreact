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
                const arr = data;
            	this.setState({users: arr});
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
                    this.state.users.map(i=>{return (
                    <form method="post" action="/user/{i.id}">
                	<li key={Math.random()}><input type="text" field="id" value={i.id}/></li>
                	<li key={Math.random()}><input type="text" field="name" value={i.name}/></li>
                	<li key={Math.random()}><input type="text" field="surname" value={i.surname}/></li>
                	<li key={Math.random()}><input type="text" field="email" value={i.email}/></li>
                	<li key={Math.random()}><input type="text" field="username" value={i.username}/></li>
                	<li key={Math.random()}><input type="text" field="password" value={i.password}/></li>
                	<input type="submit">Submit</input>
                </form>)})
                }

            </div>
    );
    }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));