const express = require('express');
const cors = require('cors');
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        this.routes(); // configura las rutas de la app
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        // Parsing y lectura del body
        this.app.use(express.json());

        //directorio publico
        this.app.use( express.static('public') );

    }

    routes(){

        this.app.use(this.usuariosPath,require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Corriendo en el puerto',this.port);
        });
    }


}



module.exports = Server;