import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/posts.createPost.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepo: Repository<PostEntity>,
  ) {}

  public async createPost(createPostDto: CreatePostDto) {
    const existPost = await this.postRepo.findOne({
      where: { slug: createPostDto.slug },
    });

    if (existPost) {
      throw new Error('Post with this slug already exists');
    }
    const post = this.postRepo.create(createPostDto);
    return this.postRepo.save(post);
  }
}
