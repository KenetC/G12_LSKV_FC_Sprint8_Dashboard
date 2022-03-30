import React, { useState, useEffect } from 'react';
import {Link, Route, Switch,NavLink} from 'react-router-dom';
import ProdDetail from './prodDetail';
import CardProd from './CardProd';

function Products(){
	const [products, setproducts] = useState({data:"Data Default"});
    useEffect(() => {
		const endpoint = `api/products`;
		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
                setproducts(data.data.list); 
			})
			.catch(error => console.log(error))
	}, [])
    return(
        <React.Fragment>
            <h1>Total de productos: {products.length}</h1>
        <div className='container'>
            <div className='row'>
                { products.length > 0 && products.map((prod,i)=>{
                    return( <CardProd {...prod} key={i}/> )
                })
            }
            </div>
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
        </React.Fragment>
    )
}

export default Products;