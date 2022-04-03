import React from 'react';
import {useEffect,useState} from "react"
import TopHome from './TopHome';
import Carrousel from './Carrousel';

function Home(){
    let [users,setUsers] = useState([]);
    let [product,setProd] = useState([]);

    useEffect(()=>{
        fetch("api/users")
        .then(res => {return res.json()})
		.then(data =>{
            setUsers( data.data.list[data.data.list.length-1] );
		})
		.catch(error => console.log(error))
    })

    useEffect(()=>{
        fetch("api/products")
        .then(res => res.json())
		.then(data =>{
            setProd( data.data.list[data.data.list.length-1] );
		})
		.catch(error => console.log(error))
    })
    

    return(
        <React.Fragment>
            <TopHome/>
            {/* <Carrousel/> */}
            <div className='container'>
                <div className='row'>
                    
                    <div className="card bg-colorPri color-letter col-12 col-lg-6">
                        <div className='m-2'>
                            <h4 className='text-center'>Último producto</h4>
                            <div className="card-header bg-colorPri color-letter">
                            ID: {product.id}
                            </div>
                            <img src={`${process.env.PUBLIC_URL}/images/products/${product.img}`} className="card-img-top mg" alt="Img no encontrada"></img>
                            <div className="card-body bg-colorPri color-letter">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <ul className="list-group list-group-flush bg-colorPri color-letter">
                                    <li className="list-group-item bg-colorPri color-letter">
                                        {
                                            users && `${users.name} ${users.lastName}`.substring(30)
                                        }
                                    </li>
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
                        <div className="col-12 col-lg-6">
                                <div className="row bg-colorPri rounded m-2 align-items-center justify-content-between">
                                <h4 className='text-center color-letter mt-1'>Último usuario</h4>
                                    <div className="col-3"><img className="rounded-circle" width="155px" height="155px" src={`${process.env.PUBLIC_URL}/images/users/${users && users.avatar }`} alt="User"/></div>
                                    <div className="col-7 p-2 color-letter">
                                        <h6 className='font-weight-bold'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill m-1" viewBox="0 0 16 16">
                                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                            {users && users.userName }
                                        </h6>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal m-1" viewBox="0 0 16 16">
                                              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                            </svg>
                                            { users && `${users.name} ${users.lastName}`.substring(0,30)}
                                        </p>
                                        <p>
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope m-1" viewBox="0 0 16 16">
                                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                            </svg>
                                            {users && `${users.email}`.substring(0,30)}
                                        </p>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-heading m-1" viewBox="0 0 16 16">
                                              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                              <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"/>
                                            </svg>
                                            {users && users.DNI}
                                        </p>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-week-fill m-1" viewBox="0 0 16 16">
                                              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                                            </svg>
                                            {users && `${users.date_of_birth}`.substring(0,10)}
                                        </p>
                                        <p>
<<<<<<< HEAD
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge-fill m-1" viewBox="0 0 16 16">
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
                                          </svg>
                                          {users.id}
=======
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge-fill m-1" viewBox="0 0 16 16">
                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
                                            </svg>
                                            {users.id}
>>>>>>> 7d9080bc7f8c86ca90b2ed2744eafc4d6f9332a8
                                        </p>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        
                    
        </React.Fragment>
    )
}

export default Home;