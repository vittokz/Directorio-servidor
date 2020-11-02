import {Request, Response, query} from 'express';
import pool from '../database';


class DepartamentosController{

    public async listDepartamentos(req: Request, res: Response){
        const departamentos = await pool.query('SELECT * FROM dir_departamento order by nombre ASC');
        res.json(departamentos);
    }

    //retornar un departamento segun su id
    public async getDeparId(req: Request, res: Response): Promise<any>{
      const { id } = req.params;
      const departamento = await pool.query('SELECT * FROM dir_departamento where id = ?', [id]);
      if(departamento.length > 0){
        return res.json(departamento[0]);
      }
      res.status(404).json({ message : 'Departamento no existe'});
    }

}

export const departamentosController = new DepartamentosController();