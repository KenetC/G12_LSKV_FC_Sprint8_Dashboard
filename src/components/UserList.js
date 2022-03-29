import React from "react";
import {useEffect,useState} from "react"
import CardUser from "./CardUser";


function UserList(){
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://g12-sprint8-lskv.herokuapp.com/api/users")
        .then(res => res.json())
		.then(data =>{
            
            setUsers(data.data.list)
		})
		.catch(error => console.log(error))
    })

    return(
        <React.Fragment>


            <div className="container mt-3">
              <div className="row">
                {
                  users.length > 0 && users.map((user,i)=>{
                    return<CardUser {...user} key ={i}/>
                })
                }
              </div>
            </div>
            
        </React.Fragment>
    )
    
}

export default UserList;