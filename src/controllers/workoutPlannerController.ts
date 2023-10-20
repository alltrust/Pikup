import { Response, Request } from "express";

export const getAllWorkouts = async (req:Request, res:Response)=>{
    console.log(req);
    res.status(200).json({plan:"some object plan son"});
};