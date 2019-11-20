import React,{Component} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

export default class Class extends Component {

    token = 'U4FDN53LXNFJ4C2PJ7XP&locale';
    state = {
      categorias : []
    }
    // inicia el sitio con los valores asignado en la funcion
    componentDidMount() {
      this.obtenerCategorias();
    }
    //funcion para obtener las cateogorias
    obtenerCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}=es_ES`;
        await fetch(url)
                .then(respuesta => {
                  return respuesta.json();
                })
                .then(categorias => {
                 this.setState({
                   categorias : categorias.categories
                 })
                })
    }

    obtenerEventos = async (busqueda) => {
      let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}=es_ES`;
        await fetch(url)
                .then(respuesta => {
                  return respuesta.json();
                })
                .then(categorias => {
                 this.setState({
                   categorias : categorias.categories
                 })
                })
      
    }
    render() {
        return (
          <div className="App">
                <Header titulo = "Eventos Sociales" />

                <div className="uk-container">
                    <Formulario 
                      categorias = {this.state.categorias}
                      obtenerEventos={this.obtenerEventos}
                    />
                </div>
          </div>
        );
    }
}


