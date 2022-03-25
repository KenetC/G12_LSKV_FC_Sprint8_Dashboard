import React, { useState, useEffect, useRef } from 'react';

function Category(){
	const [cate, setCate] = useState({data:"Data Default"});
    useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpoint = `https://g12-sprint8-lskv.herokuapp.com/api/products`;
        const url = 'https://www.omdbapi.com/?s=comedy&apikey=e24ea09d'
		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
                setCate(data.Search[0]) 
			})
			.catch(error => console.log(error))
	}, [])

    console.log('cate', cate.Blusas)

    return(
        <div>
            <p>Estos son los valores:</p>
            <p>Blusas: {cate.Blusas}</p>
        </div> 
    )
}

export default Category;
