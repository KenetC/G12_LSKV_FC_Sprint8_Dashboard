import React, { useState, useEffect } from 'react';
import {Link, Route, Switch,NavLink} from 'react-router-dom';
import ProdDetail from './prodDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function Products(){
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
    return(
        <React.Fragment>
        <h1>Total de usuarios: {products.length}</h1>
        <div className='container-fluid'>
            <div class="card" >
            <img src="..." class="card-img-top"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Products;