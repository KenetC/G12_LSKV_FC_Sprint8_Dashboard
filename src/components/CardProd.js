import {Link} from 'react-router-dom';
import '../App.css';
 function CardProd(prod){    
    let to = '/products/'+ prod.id;
    return(
        <div className="col-12">
            <div className="row bg-colorPri rounded m-2 align-items-center">
                <div className="col-3">
                    <Link to={to}>
                        <img className="img-prod" src={`${process.env.PUBLIC_URL}/images/products/${prod.img}`}alt="Img no encontrada"/> 
                    </Link>
                </div>
                <div className="col-4">
                    <h5>{prod.name}</h5>
                    <small>${prod.price}</small><br/>
                    <small>Category: {prod.category}</small><br/>
                    <small>Style: {prod.style}</small><br/>
                    <small>ID: {prod.id}</small><br/>
                </div>
                <div className="col-4">
                    <h6>Colours: </h6>
                    {
                        prod.color.length > 0 && prod.color.map(color=>{
                            console.log(color)
                            return(
                                <li className='list-unstyled'>
                                <img src={`${process.env.PUBLIC_URL}/images/colores/${color}.jpg`} className="img-color" /> - {color}  
                                </li>
                            )
                        })
                    }
                </div>
                <div className="col-1">
                    <h6>Sizes: </h6>
                    {
                        prod.size.length > 0 && prod.size.map(size=>{
                            return(<li className='list-unstyled'>{size}</li>)
                        })
                    }
                </div>
            </div>
        </div>
    )

}
export default CardProd;