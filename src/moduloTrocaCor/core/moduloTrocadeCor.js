import { coresDefinidas } from '../definirCores';

 export const PorcentagemDaTela = function(){
    let tamanhoTela = document.body.clientHeight;
    let telaAgora = document.documentElement.scrollTop;
    let porcents = (telaAgora / tamanhoTela)*100;

    return porcents
 };

 export const DefinirMudancaDeCor = function(){

    if (PorcentagemDaTela() > 0 && PorcentagemDaTela() <= 10) {
        
          return  coresDefinidas.cor1;
      } 
      else if (PorcentagemDaTela() > 10 && PorcentagemDaTela() <= 20){
       
             return coresDefinidas.cor2; 
     }
     else if (PorcentagemDaTela() > 20 && PorcentagemDaTela() <= 30){
             return coresDefinidas.cor3;
     }
     else if (PorcentagemDaTela() > 30 && PorcentagemDaTela() <= 40){
             return coresDefinidas.cor4;
     }
     else if (PorcentagemDaTela() > 40 && PorcentagemDaTela() <= 50){
             return coresDefinidas.cor5;
     }
     else if (PorcentagemDaTela() > 50 && PorcentagemDaTela() <= 60){
             return coresDefinidas.cor6;
     }
     else if (PorcentagemDaTela() > 60 && PorcentagemDaTela() <= 70){
             return coresDefinidas.cor7;
     }
     else if (PorcentagemDaTela() > 70 && PorcentagemDaTela() <= 80){
             return coresDefinidas.cor8;
     }
     else if (PorcentagemDaTela() > 80 && PorcentagemDaTela() <= 90){
             return coresDefinidas.cor9;
     }
     else if (PorcentagemDaTela() > 90 && PorcentagemDaTela() <= 100){
             return coresDefinidas.cor10;
     }
     else{
        return  coresDefinidas.cor1;
     }
 };