import {
  Controller,
  Param,
  Body,
  Get,
  Req,
  QueryParam,
  Res,
  Post,
  Put,
  Delete,
  UseBefore,
} from 'routing-controllers';
import {Response} from 'express';
import { TestMiddleware } from '../middlewares/TestMiddleware';

@Controller()
export class UserController {

  @Get('/users/:id')
  @UseBefore(TestMiddleware)
  public getAll(@Param('id') id: number, @Req() request: any, @Res() response: any): Response {
    console.log(id);
    return response.send('Hello response!');
  }

  @Get('/users')
  public getUsers(@QueryParam('limit') limit: number, @Req() request: any, @Res() response: any): any {
    console.log(limit);
    return response.status(200).json({
      malik: 'aslşdfkjasdf',
    });
  }

  @Get('/users/:id')
  public getOne(@Param('id') id: number): any {
    return 'This action returns user #' + id;
  }

  @Post('/users')
  public post(@Body() user: any): any {
    return 'Saving user...';
  }

  @Put('/users/:id')
  public put(@Param('id') id: number, @Body() user: any): any {
    return 'Updating a user...';
  }

  @Delete('/users/:id')
  public remove(@Param('id') id: number): any {
    return 'Removing user...';
  }
}
