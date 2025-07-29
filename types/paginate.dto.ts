import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginateDTO {
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  @Min(1)
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Enter Page number',
    example: 1,
    default: 1,
  })
  page?: number = 1;

  @IsInt()
  @IsPositive()
  @Type(() => Number)
  @Min(8)
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Enter per page count',
    example: 10,
    default: 10,
  })
  limit?: number = 10;
}
