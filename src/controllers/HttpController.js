const AppConstants = require('../enum/AppConstants');

class HttpController {
    constructor(instanciaExpress) {
        if(!instanciaExpress) throw new Error (" A instancia do express é obrigatoria") ;

        // Persiste na propriedade express do controller a instância do express criada no APP.js
        this.express = instanciaExpress;
        this.configurarRotas(AppConstants.BASE_API_URL);
        
    }
    configurarRotas(baseUrl) {
        throw new Error ("Método configurarRotas precisa ser implementado");
    }

}

module.exports = HttpController;