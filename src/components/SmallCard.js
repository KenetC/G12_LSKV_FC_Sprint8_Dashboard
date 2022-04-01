import React from "react";
function SmallCard(props){
    return(
        <div className="col-md-3 mb-3">
            <div className={`card border-${props.color} shadow h-100 py-2 rounded-left border-right`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>Cantidad de <br/>{props.name}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.total}</div>
                        </div>
                        <div className="col-auto text-secondary">
                            {props.icon}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallCard;