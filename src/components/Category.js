import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Category extends Component {

    constructor(props){
        super(props)
        this.state = {
            d:""
        }
    }
    apiCategory(url,mostratCategory){
       fetch(url,{
            'mode': 'no-cors',
        })
       .then(res=> {return res.json()})
       .then(data=> {
           mostratCategory(data);
        })
       .catch(error=> console.log(error));
    }


    componentDidMount(){
        console.log("Entre")
        this.apiCategory('https://g12-sprint8-lskv.herokuapp.com/api/products',
        this.mostrarCategory)
    }

    mostrarCategory=(data)=>{
        console.log('data');
        console.log(data)
        this.setState({
            d: data.meta.countByCategory
        })
    }

    componentDidUpdate(){
        console.log("Me actualice")
    }

    render(){
        console.log(this.state.d)
        let valores; 
        if (this.state.d = ''){ 
            valores = <p>cargando</p>;
        }else{ 
            valores = <p>Blusas: {this.state.d.Blusas}</p>
        }
        return(
            <div>
                <p>Estos son los valores:</p>
                {valores}
            </div> 
        )
    } 
}

export default Category;