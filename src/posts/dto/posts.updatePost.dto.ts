import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './posts.createPost.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty()
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  id!: string;
}
