
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsNotEmpty, IsNumberString } from 'class-validator';

export class FilterRlDto {
    @ApiProperty({
        type: String,
        description: 'membership_status',
        required: false
    })
    @IsString()
    @IsOptional()
    membership_status: string;

    @ApiProperty({
        type: String,
        description: 'id',
        required: false
    })
    @IsString()
    @IsOptional()
    id: string;

    @ApiProperty({
        type: String,
        description: 'assemblyId',
        required: false
    })
    @IsString()
    @IsOptional()
    assembly_id: string;

    @ApiProperty({
        type: String,
        description: 'region_id',
        required: false
    })
    @IsNumberString()
    @IsOptional()
    region_id: string;

    @ApiProperty({
        type: String,
        description: 'page',
    })
    @IsString()
    @IsNotEmpty()
    page: string;

    @ApiProperty({
        type: String,
        description: 'limit',
        required: false
    })
    @IsString()
    @IsOptional()
    limit: string;
}
