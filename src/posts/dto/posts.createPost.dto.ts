import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { MetaOptionDto } from './metaOption.dto';

export enum PostTypeEnum {
  POST = 'post',
  PAGE = 'page',
  STORY = 'story',
  SERIES = 'series',
}

export enum PostStatusEnum {
  SCHEDULED = 'scheduled',
  DRAFT = 'draft',
  REVIEW = 'review',
  PUBLISHED = 'published',
}

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  title!: string;

  @ApiProperty({ enum: PostTypeEnum })
  @IsEnum(PostTypeEnum)
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  postType!: PostTypeEnum;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug always should with small latter and just use - for spaces. example : my-url ',
  })
  slug!: string;

  @ApiProperty({ enum: PostStatusEnum })
  @IsEnum(PostStatusEnum)
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  status!: PostStatusEnum;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MinLength(3)
  content?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsJSON()
  schema?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @IsUrl()
  featureImageUrl?: string;

  @ApiProperty()
  @Type(() => Date)
  @IsNotEmpty()
  @IsDate()
  publishedOn!: Date;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  tags!: string[];

  @ApiProperty({ type: [MetaOptionDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MetaOptionDto)
  metaOptions!: MetaOptionDto[];
}
