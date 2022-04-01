import {useEffect,useState} from "react";
import React from "react";
import SmallCard from "./SmallCard";

function TopHome(){
    const[Cantusers,setUsers] = useState(0);

    useEffect(()=>{
        fetch("api/users")
        .then(res => {return res.json()})
		.then(data =>{
            setUsers(data.meta.count)
		})
		.catch(error => console.log(error))
    })

    const [Cantproducts, setproducts] = useState(0);
    const [Cantcate, setCate] = useState(0);
    const [Cantstyle, setStyle] = useState(0);
    useEffect(() => {
		fetch('api/products')
			.then(response => {return response.json()})
			.then(data => {
                setproducts(data.meta.count); 
                setCate(data.meta.countOfCategories)
                setStyle(data.meta.countOfStyles)
			})
			.catch(error => console.log(error))
	}, [])

    let datUser={
        name:" usuarios",
        color: 'secondary',
        total: Cantusers,
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
            </svg>
    };
    let datPro={
        name:"Productos",
        color: 'warning',
        total: Cantproducts,
        icon:<svg xmlns="http://www.w3.org/2000/svg" width="65" height="60" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
            </svg>
    }
    let datCat={
        name:"categorias",
        color: 'info',
        total: Cantcate,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="65" height="60" fill="currentColor" class="bi bi-clipboard-heart" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Z"/>
        <path d="M3 1.5h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"/>
        <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.31 8 6.982Z"/>
      </svg>
    }
    let datStyle={
        name:"Estilos",
        color: 'danger',
        total: Cantstyle,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="65" height="60" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
        </svg>
      
    }

    let datos=[datUser,datPro,datCat,datStyle]

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