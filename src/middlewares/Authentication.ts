import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';
import {NextFunction, Request , Response} from 'express';

// burası global middleware
@Middleware({ type: 'before' })
export class AuthenticationMiddleware implements ExpressMiddlewareInterface {
   public use(request: Request, response: Response, next: NextFunction ): void {
        console.log('global middleware');
        next();
      }
}
