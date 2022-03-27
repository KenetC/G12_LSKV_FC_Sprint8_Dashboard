import {useEffect,useState} from "react";
import React from "react";
import SmallCard from "./SmallCard";

function TopHome(){
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://g12-sprint8-lskv.herokuapp.com/api/users")
        .then(res => res.json())
		.then(data =>{
            
            setUsers(data.data.list)
		})
		.catch(error => console.log(error))
    })

    const [products, setproducts] = useState({data:"Data Default"});
    useEffect(() => {
		const endpoint = `https://g12-sprint8-lskv.herokuapp.com/api/products`;
		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
                setproducts(data.data.list); 
			})
			.catch(error => console.log(error))
	}, [])

    const [cate, setCate] = useState({data:"Data Default"});
    useEffect(() => {
		
		const endpoint = 'https://g12-sprint8-lskv.herokuapp.com/api/products';
     
		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
                
                setCate(data.meta.countByCategory) 
			})
			.catch(error => console.log(error))
	}, [])

    let datUser={
        name:"Cantidad de usuarios",
        color: 'primary',
        total:users.length
    };
    let datPro={
        name:"Cantidad de Productos",
        color: 'danger',
        total:products.length
    }
    let datCat={
        name:"Cantidad de categorias",
        color: 'success',
        total:Object.keys(cate).length
    }

    let datos=[datUser,datPro,datCat]

    return(
        
        <React.Fragment>
            <div className="row justify-content-center">
                {datos.map( (dato, i) => {
                return <SmallCard {...dato} key={i}/>
                })}
            </div>

        </React.Fragment>
    )

}

export default TopHome;