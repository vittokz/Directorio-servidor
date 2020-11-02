"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresasController_1 = require("../controllers/empresasController");
class EmpresasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', empresasController_1.empresasController.list);
        this.router.get('/:id', empresasController_1.empresasController.getEmpresa);
        this.router.post('/', empresasController_1.empresasController.create);
        this.router.delete('/:id', empresasController_1.empresasController.delete);
        this.router.put('/:id', empresasController_1.empresasController.update);
    }
}
const empresasRoutes = new EmpresasRoutes();
exports.default = empresasRoutes.router;
