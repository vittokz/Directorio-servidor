import { Request, Response } from 'express';

class IndexController {

    public index(req: Request,res: Response){
       res.json( {
           text : 'Api esta en /api/empresas'
       });
    }
}

export const indexController = new IndexController();