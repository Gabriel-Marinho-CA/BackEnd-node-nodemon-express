const express = require('express');
const LoginController = require('./controllers/LoginController');
 
 class App {

    #controllers; 

    start() {
        //  1 - Configurar o expess -> # = metodo privado
        this.#configurarExpress();

        //  2 - Caregar os controllers
        this.#carregarControllers();

        //  3 - iniciar o servidor
        this.#iniciarServidor();

    }
    #configurarExpress = () => {
        // -> Cria a instancia do express para gerenciar o servidor
        this.express = express(); //express() = instancia da aplicação | express = referenciando a lib
        
        // -> Registra os middlewares para fazer a conversao das requisicoes da API
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(express.json());

        //Registra o middleware para fazer log das requisicoes
        this.express.use((req,res,next) => {
            console.log(`requisicao recebida , url = ${req.url}, metodo http = ${req.method}`);
            next();
        })
    }

    #carregarControllers = () => {
        // atribui para a propriedade #controllers a lista de controllers disponiveis da aplicação
        this.#controllers = [
            new LoginController(this.express)
        ];
    }
    #iniciarServidor = () => {
        // tenta pegar a porta a partir da variavel de ambiente EXPRESS_PORT, se não tiver definida, vai usar a porta padrao 3001
        const port = process.env.EXPRESS_PORT  || 3001;
        this.express.listen(port, () => {
            console.log(`Servidor iniciado na porta : ${port}` );
        })
    }
}

module.exports = App;