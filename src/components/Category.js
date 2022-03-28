import React, { useState, useEffect} from 'react';
import '../App.css';
function Category(){
	const [cate, setCate] = useState();
    useEffect(() => {
		
		const endpoint = 'https://g12-sprint8-lskv.herokuapp.com/api/products';
     
		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
                console.log(data)
                setCate(data.meta.countByCategory) 
			})
			.catch(error => console.log(error))
	}, [])

    console.log('cate', cate)

    return(
        <div className="hola" class="container">
         
				<table class="table  table-bordered table-danger table-hover table-sm">
					<thead>
						<tr>
							<th>Categorias:</th>
                            <th>Cantidad:</th>
						</tr>
					</thead>
					<tbody>
                    <tr>
                      <th scope="row">Blusas</th>
                      
                        <td>{cate.Blusas}</td>
                     </tr>
                     <tr>
                       <th scope="row">Remeras</th>
                       <td>{cate.Remeras}</td>
                     </tr>
                     <tr>
                       <th scope="row">Vestidos</th>
                       <td>{cate.Vestidos}</td>
                     </tr>
                     <tr>
                       <th scope="row">Monos</th>
                       <td>{cate.Monos}</td>
                     </tr>
                     <tr>
                       <th scope="row">Shorts</th>
                       <td>{cate.Shorts}</td>
                     </tr>
                     <tr>
                       <th scope="row">Faldas</th>
                       <td>{cate.Faldas}</td>
                     </tr>
                     <tr>
                       <th scope="row">Jeans</th>
                       <td>{cate.Jeans}</td>
                     </tr>

                     <tr>
                       <th scope="row">Pantalones</th>
                       <td>{cate.Pantalones}</td>
                     </tr>
                        </tbody>
                        

                 </table>


          
            
        </div> 
    )
}

export default Category;