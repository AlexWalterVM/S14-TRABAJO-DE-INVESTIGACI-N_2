import { Router } from "express";
import { getDepartamentos,createDepartamento,getDepartamento,deleteDepartamento,updateDepartamento } from "../controllers/dpto.controller";


const router = Router();

router.route("/")
    .get(getDepartamentos)
    .post(createDepartamento);

router.route("/:departamentoId")
    .get(getDepartamento)
    .delete(deleteDepartamento)
    .put(updateDepartamento)
export default router