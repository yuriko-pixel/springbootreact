import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

const endpoint = 'http://localhost:8080/user/all';
const end='http://localhost:8080/user/save';

function App() {
    const [users, setUsers] = useState([]);
    const [r_id, setId] = useState();
    const [r_name, setName] = useState();
    const [r_surname, setSurname] = useState();
    const [r_username, setUsername] = useState();
    const [r_email, setEmail] = useState();
    const [r_password, setPassword] = useState();

    const getUsers = ()=> {
        fetch(endpoint)
            .then((results) => results.json()
            )
            .then(data => {
                const arr = data;
            	setUsers(arr);
                console.log(data);
            })
            .catch(() => {
                console.log('通信に失敗しました。');
            });
    }

    function handleInputChange(e, targetValue) {
        const target = e.target;
        console.log(targetValue);
        setUsername(target);
      }
      
      const postData = (e)=> {
       
        const method = "POST";
        const body = JSON.stringify({"id": 2, "name": "Shaun", "surname": "Darragh", "username": r_username, "email": "tekito", "password": "hai"});
        const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        };
        fetch(end, {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);
            
            getUsers();
      }
      
    return (
        <div>
        <input type="button" onClick={() => getUsers()}/>
        <form>
            <input type="text" value={r_name} onChange={e=>{handleInputChange(e, "name")}} />
            <input type="submit" value="submit" onSubmit={(e) => postData(e)}></input>
        </form>
        </div>
    )
  }

export default App;

// action={`/user/${i.id}`}
// users.map(i=>{return (
//     <form key={Math.random()} className="input-group" method="post" action="/user/save">
//     <div className="data" name="id">{i.id}</div>
//     <input type="text" 
//         className="data" name="name" onChange={e=>handleInputChange(e,i.name)} defaultValue={i.name}/>
//     <input type="text" 
//         className="data" name="username" onChange={e=>handleInputChange(e,i.username)} defaultValue={i.username}/>
//     <input type="text" 
//         className="data" name="surname" onChange={e=>handleInputChange(e,i.surname)} defaultValue={i.surname}/>
//     <input type="text" 
//         className="data" name="email" onChange={e=>handleInputChange(e,i.email)} defaultValue={i.email}/>
//     <input type="text" 
//         className="data" name="password" onChange={e=>handleInputChange(e,i.password)} defaultValue={i.password}/>
//     <input type="submit" 
//         className="data" value="submit" />
//     </form>
//         )})
ReactDOM.render(<App />, document.querySelector("#app"));