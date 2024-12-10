import { PartialType } from '@nestjs/mapped-types';
import { CreateMikulaDto } from './create-mikula.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateMikulaDto extends PartialType(CreateMikulaDto) {
    @IsString()
    @IsOptional()

    name : string;

    @IsString()
    @IsOptional()
    address : string;

    @IsBoolean()
    @IsOptional()
    goodOrBad : boolean;

    @IsString()
    @IsOptional()
    toys? : string
}
