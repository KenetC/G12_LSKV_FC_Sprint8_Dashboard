import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Category extends Component {

    constructor(props){
        super(props)
    }
     apiCategory(url,cantidadCategorias){
        fetch(url)
        .then(res=>res.json)
        .then(data=> cantidadCategorias(data))
        .catch(error=> console.log(error))
     }


    componentDidMount(){
        console.log("Entre")
         this.apiCategory('https://g12-sprint8-lskv.herokuapp.com/api/products',this.mostrarCategory)
    }
      mostrarCategory=(data)=>{
          this.setState(
              {
                  category: data.meta.countByCategory
              }
          )
      }

    componentDidUpdate(){
        console.log("Me actualice")
    }
   
  
    }
export default Category;