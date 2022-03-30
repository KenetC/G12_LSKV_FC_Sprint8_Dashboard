import React from "react";
import {useEffect,useState} from "react"
import CardUser from "./CardUser";


function UserList(){
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("api/users")
        .then(res =>{ return res.json()})
		    .then(data =>{
          console.log(data.data.list)
          setUsers(data.data.list)
		    })
		    .catch(error => console.log(error))
        },[users])

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