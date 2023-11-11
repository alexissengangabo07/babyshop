import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization!.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
        const userId = decodedToken.userId;
        // Token valide, attache les informations de l'utilisateur à la requête pour un traitement ultérieure
        req.auth = { userId };
        next();
    } catch (error) {
        res.status(401).json({ error: "You are not authorized" });
    }
};

export default checkAuth;