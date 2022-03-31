import React, { useState, useEffect } from 'react';

function ProdDetail() {
    let [product, setproduct] = useState([]);
    useEffect(() => {
        const id = window.location.href.slice(window.location.href.length-4,window.location.href.length);
        function volverNumeros(str){   
            let s = true;
            let n = 1222;
            for(let i = 0; i < 4 && s ;i++){
                if(!isNaN(Number(str.slice(i,4)))) s = false;
                n = Number(str.slice(i,4));
            }
            return n
        }
		const endpoint = `api/products/${volverNumeros(id)}`;
        console.log(endpoint)
		fetch(endpoint)
			.then(response => {return response.json()})
			.then(data => {
                setproduct(data.data);
			})
			.catch(error => console.log(error))
	    })
  return (
    <React.Fragment>
    <div className='container'>
        <div className="card bg-colorPri color-letter margin">
        <div className="card-header bg-colorPri color-letter">
        ID: {product.id}
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/users/default.png`} className="card-img-top mg" alt="Img no encontrada"></img>
        <div className="card-body bg-colorPri color-letter">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <ul className="list-group list-group-flush bg-colorPri color-letter">
                <li className="list-group-item bg-colorPri color-letter"></li>
                <li className="list-group-item bg-colorPri color-letter">{product.price}$</li>
                <li className="list-group-item bg-colorPri color-letter">
                <div className="row align-items-start">
                    <div className='col'>Category: {` ${product.category}`} </div>
                    <div className='col'>Style:{` ${product.style}`}</div>
                </div>
                </li>
                <li className="list-group-item bg-colorPri color-letter">
                <div className="row align-items-start">
                {
                product.images && product.images.map(img=>{
                    return(
                        <div className='col'>
                            {img}
                        </div>
                    )
                })
                }
                </div> 
                </li>
                <li className="list-group-item bg-colorPri color-letter">
                    <div className="row align-items-start">
                        {
                            product.color && product.color.map(color=>{
                                return(
                                    <div className='col'>
                                        <img src={`${process.env.PUBLIC_URL}/images/colores/${color}.jpg`} className="img-color"/> - {color}  
                                    </div>
                                )
                            })
                        }
                    </div>
                </li>
                <li className="list-group-item bg-colorPri color-letter">
                <div className="row align-items-start">
                    {
                        product.size && product.size.map(size=>{
                            return(<div className='col'>{size}</div>)
                        }) 
                    }
                </div>
                </li>
            </ul>
        </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default ProdDetail;
      