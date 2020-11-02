"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const empresasRoutes_1 = __importDefault(require("./routes/empresasRoutes"));
const departamentosRoutes_1 = __importDefault(require("./routes/departamentosRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); //ver peticiones de clientes
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/empresas', empresasRoutes_1.default);
        this.app.use('/api/departamentos', departamentosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor desde " + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
