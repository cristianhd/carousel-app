import { Request, Response, Router } from "express";

const router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.send("t amooo dordi")
})

export default router;