import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const endpoint = 'http://localhost:8080/user/all ';

function App() {
    const [users, setUsers] = useState([]);
    const getUsers = ()=> {
        fetch(endpoint)
            .then((results) => results.json()
            )
            .then(data => {
                const arr = data;
            	setUsers(arr);
            })
            .catch(() => {
                console.log('通信に失敗しました。');
            });
    }

    return (
        <div>
            <input type="button" onClick={()=>getUsers()}/>
            {
               users.map(i=>{return (
                <div>{i.username}</div>
                    )})
            }

        </div>
    );
  }

export default App;

{/* <form method="post" action="/user/{i.id}">
                	<li key={Math.random()}><input type="text" name="id" value={i.id}/></li>
                	<li key={Math.random()}><input type="text" name="name" value={i.name}/></li>
                	<li key={Math.random()}><input type="text" name="surname" value={i.surname}/></li>
                	<li key={Math.random()}><input type="text" name="email" value={i.email}/></li>
                	<li key={Math.random()}><input type="text" name="username" value={i.username}/></li>
                	<li key={Math.random()}><input type="text" name="password" value={i.password}/></li>
                	<input type="submit">Submit</input> */}
ReactDOM.render(<App />, document.querySelector("#app"));