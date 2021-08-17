import { NextFunction, Response , Request} from 'express';
import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  public error(error: Error, request: Request, response: Response, next: NextFunction): void {
    console.error('error middleware çalıştı' , error);
    next();
  }
}
