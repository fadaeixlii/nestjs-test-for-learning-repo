import { PickType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDTO {
  @IsString()
  @IsUUID()
  @ApiProperty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  @ApiProperty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  @ApiProperty()
  email!: string;
}

export class UserIdDto extends PickType(UserDTO, ['id']) {}

export class GetUserResponseDTO {
  @ApiProperty({ type: [UserDTO] })
  items!: UserDTO[];
}
