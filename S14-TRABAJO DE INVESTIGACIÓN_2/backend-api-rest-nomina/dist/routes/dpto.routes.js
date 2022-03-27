"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dpto_controller_1 = require("../controllers/dpto.controller");
const router = (0, express_1.Router)();
router.route("/")
    .get(dpto_controller_1.getDepartamentos)
    .post(dpto_controller_1.createDepartamento);
router.route("/:departamentoId")
    .get(dpto_controller_1.getDepartamento)
    .delete(dpto_controller_1.deleteDepartamento)
    .put(dpto_controller_1.updateDepartamento);
exports.default = router;
