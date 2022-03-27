import { Router } from "express";
import { getEmpleados,createEmpleado,getEmpleado,deleteEmpleado,updateEmpleado} from "../controllers/empleado.controller";


const router = Router();

router.route("/")
    .get(getEmpleados)
    .post(createEmpleado);

// rutas de cargos con un id "/:cargoId"
router.route("/:empleadoId")
    .get(getEmpleado)
    .delete(deleteEmpleado)
    .put(updateEmpleado)
export default router