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

    function handleInputChange(e) {
        const target = e.target;
        console.log("check"+target == defaultValue);
      }

    return (
        <div>
            <input type="button" onClick={()=>getUsers()}/>
            <input type="text" key={Math.random()}/>
            {
               users.map(i=>{return (
                <form key={Math.random()} className="input-group" method="post" action="/user/save">
                <div className="data" name="id">{i.id}</div>
                <input type="text" 
                    className="data" name="name" onChange={e=>handleInputChange(e,i.name)} defaultValue={i.name}/>
                <input type="text" 
                    className="data" name="username" onChange={e=>handleInputChange(e,i.username)} defaultValue={i.username}/>
                <input type="text" 
                    className="data" name="surname" onChange={e=>handleInputChange(e,i.surname)} defaultValue={i.surname}/>
                <input type="text" 
                    className="data" name="email" onChange={e=>handleInputChange(e,i.email)} defaultValue={i.email}/>
                <input type="text" 
                    className="data" name="password" onChange={e=>handleInputChange(e,i.password)} defaultValue={i.password}/>
                <input type="submit" 
                    className="data" value="submit" />
                </form>
                    )})
            }

        </div>
    );
  }

export default App;

// action={`/user/${i.id}`}

ReactDOM.render(<App />, document.querySelector("#app"));