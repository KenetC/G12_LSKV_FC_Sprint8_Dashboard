import React from "react";
import {useEffect,useState} from "react"


function UserList(){
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://g12-sprint8-lskv.herokuapp.com/api/users")
        .then(res => res.json())
		.then(data =>{
            console.log(data)
            setUsers(data.data.list)
		})
		.catch(error => console.log(error))
    })

    return(
        <React.Fragment>

            <h1>Total de usuarios: {users.length}</h1>

            <div className="container-fluid">
            <table class="table table-striped table-danger">
              <thead>
                <th>ID</th>
                <td>USER</td>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>Email</td>
                <td>DNI</td>
                <td>Fecha de nacimiento</td>
              </thead>
              <tbody>
                {
                    users.length > 0 && users.map((user,i)=>{
                        return(
                            <tr key={i}>
                              <th>{user.id}</th>
                              <td>{user.userName}</td>
                              <td>{user.name}</td>
                              <td>{user.lastName}</td>
                              <td>{user.email}</td>
                              <td>{user.DNI}</td>
                              <td>{user.date_of_birth}</td>
                            </tr>
                        )

                    })
                }
              </tbody>
            </table>
                
            </div>
            
        </React.Fragment>
    )
    
}

export default UserList;