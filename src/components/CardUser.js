export default function CardUser(props){

    let nombre = props.name +" "+props.lastName;
    let f = props.date_of_birth;
    let year = f.substr(0,4)
    let month = f.substr(5,2)
    let day = f.substr(8,2)
    let fecha= day+"/"+month+'/'+year
    

    return(
        <div className="col-6">
            <div className="row bg-colorPri rounded m-2 align-items-center">
                <div className="col-4"><img className="w-100 rounded-circle" src={`${process.env.PUBLIC_URL}/images/users/${props.avatar}`} alt="User"/></div>
                <div className="col-8">
                    <h6 className='font-weight-bold'>{props.userName}</h6>
                    <p>{nombre.length < 30 ? nombre : nombre.substr(0,30)+"..."}</p>
                    <p>{props.email.length < 30 ? props.email : props.email.substr(0,30)+"..."}</p>
                    <p>{props.DNI}</p>
                    <p>{fecha}</p>
                </div>
            </div>
        </div>
    )

}