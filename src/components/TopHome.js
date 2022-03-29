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

    const [products, setproducts] = useState([]);
    useEffect(() => {
		const endpoint = `https://g12-sprint8-lskv.herokuapp.com/api/products`;
		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
                setproducts(data.data.list); 
			})
			.catch(error => console.log(error))
	}, [])

    const [cate, setCate] = useState([]);
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
        name:"Cant. de usuarios",
        color: 'secondary',
        total:users.length,
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
            </svg>
    };
    let datPro={
        name:"Cant. de Productos",
        color: 'warning',
        total:products.length,
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="65" height="60" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
            </svg>
    }
    let datCat={
        name:"Cant. de categorias",
        color: 'info',
        total:Object.keys(cate).length,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="65" height="60" fill="currentColor" class="bi bi-clipboard-heart" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Z"/>
        <path d="M3 1.5h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"/>
        <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.31 8 6.982Z"/>
      </svg>
    }

    let datos=[datUser,datPro,datCat]

    return(
        
        <React.Fragment>
            <div className="row justify-content-center mt-3">
                {datos.map( (dato, i) => {
                return <SmallCard {...dato} key={i}/>
                })}
            </div>

        </React.Fragment>
    )

}

export default TopHome;