import React, { useState, useEffect } from 'react';
import {Link, Route, Switch,NavLink} from 'react-router-dom';

function ProdDetail() {
    const [product, setproduct] = useState('ProductDetail');
    useEffect(() => {
        const id = window.location.href.slice(window.location.href.length-4,window.location.href.length);
        function volverNumeros(str){ 
            let s = true; 
            let n = 1222;
            for(let i = 0; i < 4 && s ;i++){ 
                if(!isNaN(Number(str.slice(i,4)))) s = false;
                console.log(isNaN(Number(str.slice(i,4))))
                n = Number(str.slice(i,4));
            }
            return n
        }
		const endpoint = `https://g12-sprint8-lskv.herokuapp.com/api/products/${volverNumeros(id)}`;
		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
                setproduct(data.data);
                console.log(product)
			})
			.catch(error => console.log(error))
	    }, [])
    
  return (
    <div>
        {
        Object.keys(product).map(key=>{
            let value = product[key];
            return(
                <p>{key}:{value}</p>
            )
        })
        }
    </div>
  )
}

export default ProdDetail;
      