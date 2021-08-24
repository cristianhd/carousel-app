import { Request, Response, Router } from "express";
import { defaultData } from "../defaultData";

const router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.status(200).send(defaultData)
})

export default router;