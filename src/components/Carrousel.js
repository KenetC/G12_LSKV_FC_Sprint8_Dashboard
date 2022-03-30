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
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}