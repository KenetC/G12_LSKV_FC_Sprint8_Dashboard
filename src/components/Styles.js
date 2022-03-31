import React, { useState, useEffect} from 'react';

function Styles(){
	const [Styles, setStyle] = useState({data:"Data Default"});
    useEffect(() => {
		
		const endpoint = '/api/products';
     
		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
                console.log(data)
                setStyle(data.meta.countByStyle) 
			})
			.catch(error => console.log(error))
	}, [])

    console.log('styloooou', Styles)

    return(
        <div className="container" class="container">
               <div class="row">
               <table class="table  table-bordered  table-hover table-sm">
					<thead>
						<tr>
                            <th>ID:</th>
                            <th>Estilos:</th>
                            <th>Cantidad:</th>
						</tr>
					</thead>
					<tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td >Casual</td>
                        <td>{Styles.Casual}</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Trendy</td>
                        <td>{Styles.Trendy}</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Minimalista</td>
                        <td>{Styles.Minimalista}</td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>Hipster</td>
                        <td>{Styles.Hipster}</td>
                        </tr>
                    </tbody>
                        

                 </table>


               </div>


               
           




        </div> 


    )
}

export default Styles;