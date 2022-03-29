import React, { useState, useEffect} from 'react';

function Category(){
	const [cate, setCate] = useState({data:"Data Default"});
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
        <div className="container" class="container">
               <div class="row">
               <table class="table  table-bordered  table-hover table-sm">
					<thead>
						<tr>
              <th>ID:</th>
							<th>Categorias:</th>
              <th>Cantidad:</th>
              
						</tr>
					</thead>
					<tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td >Blusas</td>
                      <td>{cate.Blusas}</td>
                     </tr>
                     <tr>
                     <th scope="row">2</th>
                       <td>Remeras</td>
                       <td>{cate.Remeras}</td>
                     </tr>
                     <tr>
                     <th scope="row">3</th>
                       <td>Vestidos</td>
                       <td>{cate.Vestidos}</td>
                     </tr>
                     <tr>
                     <th scope="row">4</th>
                       <td>Monos</td>
                       <td>{cate.Monos}</td>
                     </tr>
                     <tr>
                     <th scope="row">5</th>
                       <td>Shorts</td>
                       <td>{cate.Shorts}</td>
                     </tr>
                     <tr>
                     <th scope="row">6</th>
                       <td>Faldas</td>
                       <td>{cate.Faldas}</td>
                     </tr>
                     <tr>
                     <th scope="row">7</th>
                       <td>Jeans</td>
                       <td>{cate.Jeans}</td>
                     </tr>

                     <tr>
                     <th scope="row">8</th>
                       <td>Pantalones</td>
                       <td>{cate.Pantalones}</td>
                     </tr>
                        </tbody>
                        

                 </table>


               </div>


               
           




        </div> 


    )
}

export default Category;