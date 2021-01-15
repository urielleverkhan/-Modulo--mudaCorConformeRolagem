# Modulo que muda a cor de uma div conforme a rolagem de tela

### É um projeto onde conforme a tela da a rolagem, vai trocando a cor de fundo.

## Projeto ainda em desenvolvimento

* Primeiro você deve colocar o arquivo definirCores.js e a pasta core que estão na pasta src/moduloTrocaCor contendo os arquivos estiloTrocaCor.js, moduloTrocaCor.js e trocaCor.css dentro da pasta do seu componente onde você quer ativar a mudança de cor conforme a rolagem da tela.

* O arquivo definirCores é nada mais que um objeto com varias cores definidas, de 1 a 10. a cor um coresponde de 0 a 10% da pagina, a cor 2 corresponde de 10 a 20% da pagina e assim sucetivamente, é nestas variabeis que você deve escolher as cores que deseja ter em sua pagina. Por favor não mudar o nome das variaveis ou das propriedades do objeto, apenas mudar seus valores. 

* Você deve então adicionar ao seu componente as seguintes linhas de codigo:

1 - No construtor defina a state (é muito importante que não troque os nomes das variaveis e as funções):

        this.state ={
            corFundo: DefinirMudancaDeCor(),
        };
        
2 - No componentDidMount() escreva o seguinte codigo:

          window.onscroll = () => this.setState({
            corFundo: DefinirMudancaDeCor()
          }); 
          
3 - No html de sua pagina, no caso dentro do render() do seu componente, você deve chamar o seguinte elemento:

          <MudaScroll className="fundo" id="fundo" corDeFundo={this.state.corFundo}>
               Seu conteudo vai aqui.
          </MudaScroll>
          
   Este elemento trabalha como uma div e é o componente que ira mudar de cor, neste caso ele esta definido para sua pagina inteira e por hora so muda a cor do fundo de uma pagina toda. 

link para o versel:
https://mudacorrolagem.vercel.app/
