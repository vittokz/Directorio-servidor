import { Router } from "express";
import { departamentosController } from "../controllers/departamentoController";

class DepartamentosRoutes {

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
       this.router.get('/', departamentosController.listDepartamentos);
       this.router.get('/:id',departamentosController.getDeparId);
    }

}

const departamentosRoutes = new DepartamentosRoutes();
export default departamentosRoutes.router;

