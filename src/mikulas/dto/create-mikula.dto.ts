import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMikulaDto {
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsString()
    @IsNotEmpty()
    address : string;

    @IsBoolean()
    @IsNotEmpty()
    goodOrBad : boolean;

    @IsString()
    @IsOptional()
    toys? : string


}
