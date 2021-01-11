import React, {Component} from 'react';
import { MudaScroll } from './estiloTrocaCor'
import './trocaCor.css';

class moduloTrocaCor extends Component{
    constructor(props){
        super(props);
        this.state ={
            corFundo: 'fff',
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() { 
        let state = this.state;
        let tamanhoTela = document.body.clientHeight;
        let telaAgora = document.documentElement.scrollTop;
        let porcents = (telaAgora / tamanhoTela)*100;
        

        console.log(porcents);
        console.log(telaAgora);

        if (porcents > 0 && porcents <= 10) {
           this.setState({
             corFundo: 'c79fd8'
           })
         } 
         else if (porcents > 10 && porcents <= 20){
            this.setState({
                corFundo: 'be94d8'
              })
        }
        else if (porcents > 20 && porcents <= 30){
            this.setState({
                corFundo: 'b589d5'
              })
        }
        else if (porcents > 30 && porcents <= 40){
            this.setState({
                corFundo: 'ab7ed2'
              })
        }
        else if (porcents > 40 && porcents <= 50){
            this.setState({
                corFundo: 'a174cf'
              })
        }
        else if (porcents > 50 && porcents <= 60){
            this.setState({
                corFundo: '9564c5'
              })
        }
        else if (porcents > 60 && porcents <= 70){
            this.setState({
                corFundo: '8953b8'
              })
        }
        else if (porcents > 70 && porcents <= 80){
            this.setState({
                corFundo: '7e43b1'
              })
        }
        else if (porcents > 80 && porcents <= 90){
            this.setState({
                corFundo: '7231a7'
              })
        }
        else if (porcents > 90 && porcents <= 100){
            this.setState({
                corFundo: '5c2994'
              })
        }

       }
       componentDidMount() {
         window.onscroll = () => this.handleScroll();  
       }
    

    render(){
        return(
           
            <MudaScroll className="homeInteiro" id="homeInteiro" corDeFundo={this.state.corFundo}>
                <div className="conteudo">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo duis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Sit amet commodo nulla facilisi nullam vehicula ipsum. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Sit amet porttitor eget dolor morbi non arcu risus. Augue ut lectus arcu bibendum at varius vel pharetra. Morbi tincidunt augue interdum velit euismod in pellentesque. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Vitae congue mauris rhoncus aenean vel elit. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Nam aliquam sem et tortor. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Donec et odio pellentesque diam volutpat. Pharetra vel turpis nunc eget. Platea dictumst quisque sagittis purus sit. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.

Curabitur gravida arcu ac tortor dignissim convallis aenean et. Eros donec ac odio tempor orci. Velit laoreet id donec ultrices tincidunt arcu. Urna neque viverra justo nec ultrices dui sapien eget. Turpis massa sed elementum tempus egestas sed sed. Faucibus in ornare quam viverra. Purus viverra accumsan in nisl nisi scelerisque eu. Malesuada fames ac turpis egestas sed. Imperdiet dui accumsan sit amet nulla. Erat imperdiet sed euismod nisi. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. In eu mi bibendum neque egestas congue quisque egestas. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Sed turpis tincidunt id aliquet risus feugiat.

Tempus egestas sed sed risus pretium quam vulputate. Id faucibus nisl tincidunt eget nullam. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Amet dictum sit amet justo donec enim diam vulputate. Ornare suspendisse sed nisi lacus sed. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Cras semper auctor neque vitae tempus. Adipiscing elit duis tristique sollicitudin nibh sit. Sit amet est placerat in egestas erat imperdiet sed euismod. Blandit aliquam etiam erat velit scelerisque in dictum non.

Velit dignissim sodales ut eu sem integer vitae. Habitant morbi tristique senectus et netus et malesuada fames ac. Sit amet risus nullam eget. Vel facilisis volutpat est velit egestas dui id ornare. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Sed blandit libero volutpat sed cras. At quis risus sed vulputate. Vitae auctor eu augue ut lectus. Commodo sed egestas egestas fringilla phasellus faucibus. Eu mi bibendum neque egestas. Maecenas pharetra convallis posuere morbi.

Luctus accumsan tortor posuere ac ut. Sit amet aliquam id diam maecenas ultricies mi eget. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. A diam maecenas sed enim ut. Cursus vitae congue mauris rhoncus aenean. Sit amet purus gravida quis blandit turpis cursus in hac. Porta nibh venenatis cras sed felis eget. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Convallis aenean et tortor at risus viverra. Turpis nunc eget lorem dolor sed.

Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Sem et tortor consequat id porta nibh venenatis. Orci phasellus egestas tellus rutrum tellus. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Dui id ornare arcu odio ut sem nulla pharetra. Nunc faucibus a pellentesque sit amet. At risus viverra adipiscing at in tellus. Suscipit tellus mauris a diam maecenas sed enim ut. Quam elementum pulvinar etiam non quam lacus. Feugiat sed lectus vestibulum mattis ullamcorper velit. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Interdum varius sit amet mattis vulputate enim. Mi ipsum faucibus vitae aliquet nec ullamcorper. Eget arcu dictum varius duis at consectetur lorem. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Proin libero nunc consequat interdum varius sit amet mattis. Et tortor at risus viverra.

Vel orci porta non pulvinar neque. Gravida neque convallis a cras semper auctor. Neque viverra justo nec ultrices dui. Proin fermentum leo vel orci. Nibh mauris cursus mattis molestie a. Sodales ut eu sem integer vitae justo eget. Adipiscing commodo elit at imperdiet dui accumsan sit. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Porttitor massa id neque aliquam vestibulum morbi. Pellentesque habitant morbi tristique senectus et netus et malesuada. Nulla porttitor massa id neque aliquam vestibulum morbi. Quis hendrerit dolor magna eget est lorem ipsum dolor. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.

Odio ut sem nulla pharetra diam sit amet nisl suscipit. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sit amet cursus sit amet. Vel quam elementum pulvinar etiam non quam. Non tellus orci ac auctor augue mauris. Pretium lectus quam id leo in. Tincidunt id aliquet risus feugiat in ante metus. Sollicitudin nibh sit amet commodo nulla facilisi. Tortor pretium viverra suspendisse potenti. Ac turpis egestas maecenas pharetra convallis posuere morbi. Malesuada proin libero nunc consequat interdum varius sit. Erat velit scelerisque in dictum non consectetur a. Nunc eget lorem dolor sed viverra ipsum. Nibh nisl condimentum id venenatis a. Id cursus metus aliquam eleifend mi in. Sagittis eu volutpat odio facilisis. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Justo eget magna fermentum iaculis eu. Bibendum at varius vel pharetra vel turpis nunc eget lorem.

Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Interdum velit euismod in pellentesque massa placerat duis ultricies. Elit ut aliquam purus sit. Ullamcorper a lacus vestibulum sed arcu non. Porttitor leo a diam sollicitudin. Nulla facilisi etiam dignissim diam quis enim. Amet purus gravida quis blandit turpis cursus in. Amet est placerat in egestas erat imperdiet. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Sed tempus urna et pharetra pharetra massa. Morbi tristique senectus et netus et malesuada fames ac. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Viverra mauris in aliquam sem fringilla. Mattis molestie a iaculis at erat pellentesque adipiscing. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Tristique magna sit amet purus gravida quis. Hendrerit dolor magna eget est lorem ipsum dolor sit.
                    </p>

                </div>
            </MudaScroll>
        ); 
    }
}

export default moduloTrocaCor;