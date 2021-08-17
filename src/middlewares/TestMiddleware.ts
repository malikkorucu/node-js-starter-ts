
import { NextFunction } from 'express';
import { ExpressMiddlewareInterface } from 'routing-controllers';

export class TestMiddleware implements ExpressMiddlewareInterface {
    public use(req: Request , res: Response, next: NextFunction): void {
        console.log('normal middleware');
        next();
    }
}
