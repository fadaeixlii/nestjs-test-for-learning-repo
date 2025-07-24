import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginateDTO {
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @IsInt()
  @IsPositive()
  @Type(() => Number)
  @Min(8)
  @IsOptional()
  limit?: number = 10;
}
