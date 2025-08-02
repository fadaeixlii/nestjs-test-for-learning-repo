import { Body, Controller, Inject, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/posts.createPost.dto';
import { UpdatePostDto } from './dto/posts.updatePost.dto';
import { PostsService } from './provider/posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(@Inject() private readonly postsService: PostsService) {}

  @ApiOperation({
    summary: 'Create new a post',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  @ApiOperation({
    summary: 'Update a post',
  })
  @Patch()
  public updatePost(@Body() updatePostDto: UpdatePostDto) {
    return updatePostDto;
  }
}
