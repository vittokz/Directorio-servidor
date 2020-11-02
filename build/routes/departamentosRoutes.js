"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoController_1 = require("../controllers/departamentoController");
class DepartamentosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', departamentoController_1.departamentosController.listDepartamentos);
        this.router.get('/:id', departamentoController_1.departamentosController.getDeparId);
    }
}
const departamentosRoutes = new DepartamentosRoutes();
exports.default = departamentosRoutes.router;
