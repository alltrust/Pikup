import { Response, Request } from 'express';

export const register = async (req: Request, res: Response) => {
    console.log(req);
    res.status(200).json({ message: "Welcome you name!" });
};