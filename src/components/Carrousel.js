import React from "react";

export default function Carrousel(){
    return(
        <React.Fragment>
            <div className="container" >
                <div className="row justify-content-center">
                    <div id="carouselExampleControls" className="carousel slide" width="77%" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/carrusel-mood.PNG`} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/carrusel-mood.PNG`} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/carrusel-mood.PNG`} alt="Third slide"/>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}