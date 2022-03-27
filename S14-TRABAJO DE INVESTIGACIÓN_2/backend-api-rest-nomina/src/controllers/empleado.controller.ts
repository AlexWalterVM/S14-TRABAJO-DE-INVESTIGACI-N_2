import { Request, Response } from "express";
import { Coneccion } from "../bd/database";
import {Iempleado} from '../interface/Empleado'
const conection:Coneccion = new Coneccion();
export async function getEmpleados(req:Request, res:Response): Promise<Response | void> {
    try { 
        const conn = await conection.getConneccion();
        const empleado = await conn.query("SELECT E.id,E.nombre,E.cedula,C.descripcion 'Cargo',D.descripcion 'Departamento',E.sueldo,E.estado  FROM empleado E, cargo C, departamento D WHERE E.cargoid = C.id AND E.dptoid = D.id");
        return res.json(empleado[0]);
    }   
    catch (err) {
        console.log(err);
    }
};
// creacion de un empleado
export async function createEmpleado(req: Request, res: Response) {
    try {
        const modEmpleado: Iempleado = req.body;
        console.log(modEmpleado);
        const conn = await conection.getConneccion();
        const empleados = await conn.query("INSERT INTO empleado SET ?", [modEmpleado]);
        res.json({ msg: "Empleado insertado Satisfactoriamente", empleado: modEmpleado });
    } catch (err) {
        console.log(err);
    }
}
  // obtener un empleado mediante su id 
export async function getEmpleado(req: Request, res: Response) {
    const id = req.params.empleadoId;
    const conn = await conection.getConneccion();
    const empleado = await conn.query("SELECT * FROM empleado WHERE id = ?", [id]);
    //console.log(req.params.cargoId,id);
    //res.json(req.params);
    res.json(empleado[0]);
}
  // eliminar un empleado mediante su id
export async function deleteEmpleado(req: Request, res: Response) {
    const id = req.params.empleadoId;
    console.log(req.params);
    const conn = await conection.getConneccion();
    await conn.query("DELETE FROM empleado WHERE id = ?", [id]);
    res.json({
        message: "empleado eliminado",
        id,
    });
}
  // actualizar o modificar o editar un empleado mediante su id
export async function updateEmpleado(req: Request, res: Response) {
    const id = req.params.empleadoId;
    const modEmpleado: Iempleado = req.body;
    const conn = await conection.getConneccion();
    await conn.query("UPDATE empleado set ? WHERE id = ?", [modEmpleado, id]);
    res.json({
        message: "Empleado actualizado",
        modEmpleado,
    });
}