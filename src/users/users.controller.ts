import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { PaginateDTO } from 'types/paginate.dto';
import { GetUserResponseDTO, UserIdDto } from './dto/user.dto';
import { ApiSuccessResponse } from 'src/common/decorators/apiOkResponse';
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get('/:id{/:optionalId}') optional example
  @Get('/:id')
  @ApiParam({
    name: 'id',
    description: 'UserId',
    example: '4af69451-ab31-4112-abb4-50aab542643e',
  })
  @ApiSuccessResponse(GetUserResponseDTO)
  public getUsersWithParams(
    @Param() params: UserIdDto,
    @Query() query: PaginateDTO,
  ) {
    console.log('getUsers with query : ', query);
    console.log('getUsers with params : ', params);
    return {
      items: [
        {
          id: '4af69451-ab31-4112-abb4-50aab542643e',
          name: 'name 1',
          email: 'email 1',
        },
        {
          id: '4af69451-ab31-4112-abb4-50aab542643a',
          name: 'name 2',
          email: 'email 2',
        },
        {
          id: '4af69451-ab31-4112-abb4-50aab542643b',
          name: 'name 3',
          email: 'email 3',
        },
      ],
    };
  }

  @Get()
  public getUserByEmail(@Query('email') email: string) {
    this.usersService.getUserByEmail(email);
  }

  @Post()
  public createNewUse(
    @Body() body: { name: string; email: string; password: string },
  ) {
    console.log('Post request with body:', body);
    return body;
  }
}
