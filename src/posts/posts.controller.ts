import { Body, Controller, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/posts.createPost.dto';
import { UpdatePostDto } from './dto/posts.updatePost.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  @ApiOperation({
    summary: 'Create new a post',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return createPostDto;
  }

  @ApiOperation({
    summary: 'Update a post',
  })
  @Patch()
  public updatePost(@Body() updatePostDto: UpdatePostDto) {
    return updatePostDto;
  }
}
