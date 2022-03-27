import React, { useState, useEffect } from 'react';
import {Link, Route, Switch,NavLink} from 'react-router-dom';
import ProdDetail from './prodDetail';

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
        <div>
        {}
        { products.length > 0 && products.map(prod=>{
            let to = '/products/'+ prod.id
            return(
                <div>
                    <p>id: {prod.id}</p>
                    <p>name: {prod.name}</p>
                    <p>price: {prod.price}</p>
                    <p>category: {prod.category}</p>
                    <p>Style: {prod.style}</p>
                    <p>Colores:</p>
                    {}
                    {
                    prod.color.length > 0 && prod.color.map(color=>{
                        return(
                            <p> {color} </p>
                        )
                    })
                    }
                    <p>Talles:</p>
                    {}
                    {
                        prod.size.length > 0 && prod.size.map(size=>{
                            return(
                                <p>{size}</p>
                            )
                        })
                    }
                    <Link to={to}><span>Detalle de producto</span></Link>
                </div>
            )
        })
        }
        <Switch>
        {
            products.length > 0 && products.map(prod=>{
                let to = `/products/${prod.id}}`;
                return(
                    <Route path={to}><ProdDetail/></Route>
                )
            })
        }
        </Switch>
        </div> 
    )
}

export default Products;