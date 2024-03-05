
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class UpdateRlDto {
    @ApiProperty({
        type: String,
        description: 'assembly_id',
        required:false
    })
    @IsString()
    @IsOptional()
    assembly_id: string;

    @ApiProperty({
        type: String,
        description: 'locus_name',
        required:false
    })
    @IsString()
    @IsOptional()
    locus_name: string;

    @ApiProperty({
        type: String,
        description: 'public_locus_name',
        required:false
    })
    @IsString()
    @IsOptional()
    public_locus_name: string;

    @ApiProperty({
        type: String,
        description: 'chromosome',
        required:false
    })
    @IsString()
    @IsOptional()
    chromosome: string;

    @ApiProperty({
        type: String,
        description: 'locus_name',
        required:false
    })
    @IsString()
    @IsOptional()
    strand: string;

    @ApiProperty({
        type: Number,
        description: 'locus_start',
        required:false
    })
    @IsNumber()
    @IsOptional()
    locus_start: number;

    @ApiProperty({
        type: Number,
        description: 'locus_stop',
        required:false
    })
    @IsNumber()
    @IsOptional()
    locus_stop: number;

    @ApiProperty({
        type: Number,
        description: 'member_count',
        required:false
    })
    @IsNumber()
    @IsOptional()
    member_count: number;

    @ApiProperty({
        type: String,
        description: 'urs_taxid',
        required:false
    })
    @IsString()
    @IsOptional()
    urs_taxid: string;

    @ApiProperty({
        type: Boolean,
        description: 'isActive',
        required:false,
    })
    @IsBoolean()
    @IsOptional()
    isActive: boolean;

}
