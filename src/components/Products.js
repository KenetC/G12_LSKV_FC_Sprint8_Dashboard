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
        <div className='container'>
            <table class="table  table-bordered table-danger table-hover table-sm">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Style</th>
                    <th scope="col">Colours</th>
                    <th scope="col">Sizes</th>
                    <th scope="col">Detalle</th>
                    </tr>
                </thead>
                <tbody>
                { products.length > 0 && products.map(prod=>{
                    let to = '/products/'+ prod.id
                    return(
                            <tr>
                                <th scope="row">{prod.id}</th>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td>{prod.category}</td>
                                <td>{prod.style}</td>
                                <td>
                                    {
                                    prod.color.length > 0 && prod.color.map(color=>{
                                            return(
                                                <li className='list-unstyled'>{color}</li>
                                            )
                                        })
                                    }
                                </td>
                                <td>
                                {
                                    prod.size.length > 0 && prod.size.map(size=>{
                                        return(
                                            <li className='list-unstyled'>{size}</li>
                                        )
                                    })
                                }
                                </td>
                                <td><Link to={to}><span>Detalle de producto</span></Link></td>
                            </tr>
                            
                    )
                
                })
            }
            </tbody>
            </table>
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