import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";
import { RldEntity } from "src/rld/entities/rld.entity";

export class 
CreateRlDto {

    @ApiProperty({
        type: String,
        description: 'assembly_id',
    })
    @IsString()
    @IsNotEmpty()
    assembly_id: string;

    @ApiProperty({
        type: String,
        description: 'locus_name',
    })
    @IsString()
    @IsNotEmpty()
    locus_name: string;

    @ApiProperty({
        type: String,
        description: 'public_locus_name',
    })
    @IsString()
    @IsNotEmpty()
    public_locus_name: string;

    @ApiProperty({
        type: String,
        description: 'chromosome',
    })
    @IsString()
    @IsNotEmpty()
    chromosome: string;

    @ApiProperty({
        type: String,
        description: 'locus_name',
    })
    @IsString()
    @IsNotEmpty()
    strand: string;

    @ApiProperty({
        type: Number,
        description: 'locus_start',
    })
    @IsNumber()
    @IsNotEmpty()
    locus_start: number;

    @ApiProperty({
        type: Number,
        description: 'locus_stop',
    })
    @IsNumber()
    @IsNotEmpty()
    locus_stop: number;

    @ApiProperty({
        type: Number,
        description: 'member_count',
    })
    @IsNumber()
    @IsNotEmpty()
    member_count: number;

    @ApiProperty({
        type: String,
        description: 'urs_taxid',
    })
    @IsString()
    @IsNotEmpty()
    urs_taxid: string;

    locus_members:RldEntity[];

}
