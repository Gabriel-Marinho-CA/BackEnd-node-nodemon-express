const HttpController = require('./HttpController');

class LoginController extends HttpController {

    // sobrescreve o metodo da calsse httpController
    configurarRotas(baseUrl) {
        // define a rota e o manipulador da classe login
        this.express.post(`${baseUrl}/login`, (req,res) => {
            this.login(req,res);
        });
    }
    login(req,res) {
        res.json({
            token: 'token gerado pela api'
        })
    }
}

module.exports = LoginController;