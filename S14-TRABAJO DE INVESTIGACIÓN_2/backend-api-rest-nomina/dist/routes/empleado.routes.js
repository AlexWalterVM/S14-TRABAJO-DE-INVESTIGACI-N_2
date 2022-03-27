"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleado_controller_1 = require("../controllers/empleado.controller");
const router = (0, express_1.Router)();
router.route("/")
    .get(empleado_controller_1.getEmpleados)
    .post(empleado_controller_1.createEmpleado);
// rutas de cargos con un id "/:cargoId"
router.route("/:empleadoId")
    .get(empleado_controller_1.getEmpleado)
    .delete(empleado_controller_1.deleteEmpleado)
    .put(empleado_controller_1.updateEmpleado);
exports.default = router;
