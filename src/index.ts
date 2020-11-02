import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import empresasRoutes from './routes/empresasRoutes';
import departamentosRoutes from './routes/departamentosRoutes';

class Server {
    public app : Application;
    
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
      this.app.set('port', process.env.PORT || 3000);
      this.app.use(morgan('dev')); //ver peticiones de clientes
      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true}));
    }
    
    routes(): void{
       this.app.use('/',indexRoutes);
       this.app.use('/api/empresas',empresasRoutes);
       this.app.use('/api/departamentos',departamentosRoutes);
    }

    start ():void{
        this.app.listen(this.app.get('port'), () =>{
            console.log("Servidor desde " + this.app.get('port'));
        });
    }


}

const server = new Server();
server.start();