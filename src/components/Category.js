import React, { useState, useEffect} from 'react';

function Category(){
	const [cate, setCate] = useState({data:"Data Default"});
    useEffect(() => {
		// Peticion Asincrónica al montarse el componente
		const endpoint = 'https://g12-sprint8-lskv.herokuapp.com/api/products';
        const url = 'https://www.omdbapi.com/?s=comedy&apikey=e24ea09d'
		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
                setCate(data.meta.countByCategory) 
			})
			.catch(error => console.log(error))
	}, [])

    console.log('cate', cate)

    return(
        <div>
            <p>Es son los valor:</p>
            <p>Blu: {cate.Blusas}</p>
        </div> 
    )
}

export default Category;