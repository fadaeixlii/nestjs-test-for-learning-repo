import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // @Get()
  // public getUsers() {
  //   console.log('getUser with no params ');
  //   return 'getUser with no params ';
  // }

  @Get('/:id{/:optionalId}')
  public getUsersWithParams(
    @Param('id') id: string,
    @Query() query: any,
    @Param('optionalId') optionalId?: string,
  ) {
    console.log('getUsers with params : ', {
      id,
      optionalId: optionalId,
    });
    console.log('getUsers with query : ', query);

    return {
      params: {
        id,
        optionalId,
      },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      query,
    };
  }

  @Post()
  public createNewUse(
    @Body() body: { name: string; email: string; password: string },
  ) {
    console.log('Post request with body:', body);
    return body;
  }
}
