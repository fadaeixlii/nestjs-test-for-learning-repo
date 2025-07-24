import { IsOptional, IsString } from 'class-validator';
import { PaginateDTO } from './paginate.dto';

export class SearchDTO extends PaginateDTO {
  @IsString()
  @IsOptional()
  search?: string;
}
