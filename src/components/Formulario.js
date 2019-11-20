import React,{Component} from 'react';

export default class Formulario extends Component {

    // para leer los inputs usamos Refs 
    nombreEventoRef = React.createRef();
    categoriaRef = React.createRef();
    //crear el objeto 
    buscarEvento = (e) => {
        e.preventDefault();
        const datosBusqueda = {
            nombre: this.nombreEventoRef.current.value,
            categoria : this.categoriaRef.current.value
        }
        //console.log(datosBusqueda);
        //pasarlo por props
        this.props.obtenerEventos(datosBusqueda);
    }
     
       // me quede el video 8
       
    //funcion llamada en categorias.map() para mostrar la opciones
        mostrarOpciones = (key) => {
            const categoria = this.props.categorias[key];
            
            const {id, name_localized} = categoria;
            if(!id || !name_localized) return null;
            return (
                <option key={id}>{name_localized}</option>
            )
        }
    render() {
        const categorias = Object.keys(this.props.categorias);
      //console.log(categorias);
      
        
        return (
           <form onSubmit={this.buscarEvento}>
               <fieldset className="uk-fieldset uk-margin">
                   <legend className="uk-legend uk-text-center">
                        Busca tu evento por nombre o categoría
                   </legend>

                   <div className="uk-column-1-3@m uk-margin">
                       <div className="uk-margin" uk-margin="true">
                           <input ref= {this.nombreEventoRef} className="uk-input" type="text" placeholder="Nombre de Evento o Cidad" />
                       </div>
                       <div className="uk-margin" uk-margin="true">
                           <select ref={this.categoriaRef} className="uk-select">
                               {categorias.map(this.mostrarOpciones)}
                           </select>
                       </div>
                       <div className="uk-margin" uk-margin="true">
                           <button className="uk-button uk-button-danger">
                               Buscar
                           </button>
                       </div>
                   </div>
               </fieldset>
           </form>
        );
    }
}