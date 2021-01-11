import React, {Component} from 'react';
import { MudaScroll } from './core/estiloTrocaCor'
import { DefinirMudancaDeCor } from './core/moduloTrocadeCor';
import './core/trocaCor.css';

class moduloTrocaCor extends Component{
    constructor(props){
        super(props);
        this.state ={
            corFundo: DefinirMudancaDeCor(),
        };
    }
    
       componentDidMount() {
         window.onscroll = () => this.setState({
            corFundo: DefinirMudancaDeCor()
          });  
         
       }
 
    render(){
        return(
           
            <MudaScroll className="fundo" id="fundo" corDeFundo={this.state.corFundo}>
               
            </MudaScroll>
        ); 
    }
}

export default moduloTrocaCor;