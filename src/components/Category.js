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
        <div>
            <p>Los valores de:</p>
            <p>Blusas: {cate.Blusas}</p>
            <p>Remeras: {cate.Remeras}</p>
            <p>Vestidos: {cate.Vestidos}</p>
            <p>Monos: {cate.Monos}</p>
            <p>Shorts: {cate.Shorts}</p>
            <p>Faldas: {cate.Faldas}</p>
            <p>Jeans: {cate.Jeans}</p>
            <p>Pantalones: {cate.Pantalones}</p>
        </div> 
    )
}

export default Category;