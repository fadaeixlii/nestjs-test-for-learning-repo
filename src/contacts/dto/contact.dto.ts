import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  ValidateIf,
} from 'class-validator';

export class ContactDTO {
  @ValidateIf((obj: { phone: string }) => !obj.phone)
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  email!: string;

  @ValidateIf((obj: { email: string }) => !obj.email)
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  @Transform(({ value }: { value: string }) => value.toLowerCase())
  phone!: string;
}
