import React from 'react';
import { useEffect,useState } from 'react';
import CardUser from './CardUser';
import CardProd from './CardProd';

function ContentHome(){
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://g12-sprint8-lskv.herokuapp.com/api/users")
        .then(res => res.json())
		.then(data =>{
            
            setUsers(data.data.list)
		})
		.catch(error => console.log(error))
    })

    /* const[prod,setProd] = useState([]);
    useEffect(()=>{
        fetch("https://g12-sprint8-lskv.herokuapp.com/api/products")
        .then(res => res.json())
		.then(data =>{

            console.log(data.data.list.length-1)
            setProd(data.data.list[data.data.list.length-1])
            console.log(prod)

		})
        
		.catch(error => console.log(error))
    }) */
    
    return(
        <React.Fragment>
                
            <div className="container mt-3">
              <div className="row">
                {
                  users.length > 0 && users.map((user,i)=>{
                    return<CardUser {...user[users.length-1]} key ={i}/>
                })
                }
              </div>
            </div>
            
        </React.Fragment>
        
       
    )

}

export default ContentHome;